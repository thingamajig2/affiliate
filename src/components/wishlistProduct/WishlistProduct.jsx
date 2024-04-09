import Product from "../product/Product";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts, getProducts } from "../../features/shop/shopSlice";
import { useState } from "react";

const WishlistProduct = () => {
  const dispatch = useDispatch();
  const wishlistData = JSON.parse(localStorage.getItem("myArray")) || [];
  const arrayOfIds = wishlistData.map(obj => obj.id);

  const [toggle, setToggle] = useState(false);
  
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  
  if (arrayOfIds.length === 0) {
    return <span>Empty Wishlist</span>;
  }

  return (
    <div className="products">
      {
        wishlistData.map((item, i) => {
          if (arrayOfIds.includes(item.id)) {
            return <Product key={i} item={item} setToggle={setToggle} />;
          }
          return null;
        })
      }
      <span>{toggle}</span>
    </div>
  );
};

export default WishlistProduct;
