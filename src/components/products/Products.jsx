import "./products.scss";
import Product from "../product/Product";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts, getProducts } from "../../features/shop/shopSlice";
import { useEffect } from "react";

const Products = ({ active, basket }) => {
  const dispatch = useDispatch();
  const productData = useSelector(selectProducts);
  
  const wishlistData = JSON.parse(localStorage.getItem("myArray"));
  console.log(wishlistData, "w");
  console.log(productData, "p")


  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (basket) {
    if (wishlistData?.length === 0) {
      return <span>Empty Wishlist</span>;
    }
  } else {
    if (productData.length === 0) {
      return <span>Empty Wishlist</span>;
    }
  }

  return (
    <div className="products">
      {basket
        ? wishlistData?.map((item, i) => {
            return <Product key={i} item={item} />;
          })
        : productData?.map((item, i) => {
            return <Product key={i} item={item} />;
          })}
    </div>
  );
};

export default Products;
