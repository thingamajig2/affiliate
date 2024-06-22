import "./product.scss";
import heart from "../../assets/heart1.png";
import heartF from "../../assets/heartF.png";
import { useState } from "react";
import "../header/Header";
import { openWishlist } from "../../features/shop/shopSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Product = ({ item, setToggle }) => {
  const storedArrayCheck = JSON.parse(localStorage.getItem("myArray")) || [];
  const [wish, setWish] = useState(
    storedArrayCheck.some((obj) => obj.id === item.id) ? heartF : heart
  );
  const dispatch = useDispatch();

  const toggleHeart = (e) => {
    e.preventDefault();
    const storedArray = JSON.parse(localStorage.getItem("myArray")) || [];
    if (wish === heart) {
      setWish(heartF);
      storedArray.push(item);
      localStorage.setItem("myArray", JSON.stringify(storedArray));
      dispatch(openWishlist("wishlistBoxOpen"));
    } else {
      setWish(heart);
      localStorage.setItem(
        "myArray",
        JSON.stringify(storedArray.filter((element) => element.id !== item.id))
      );
    }
  };

  useEffect(() => {
    setToggle && setToggle(prev=>!prev)
  }, [wish, setToggle]);

  return (
    <div className="product">
      <a href={item.link} target="_blank" rel="noreferrer" className="link">
        <div className="description">{item?.description}</div>
        <img
          className="productImage"
          src={item?.image}
          height={200}
          alt="product"
        />
        <div className="productRow">
          <div className="price">{item?.price}</div>
          <div className="heart" onClick={toggleHeart}>
            <img src={wish} width={30} alt="wish" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default Product;

// redux remove hearts from product
