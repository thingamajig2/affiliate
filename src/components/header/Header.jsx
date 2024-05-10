import { useState } from "react";
import Search from "../search/Search";
import "./header.scss";
import Products from "../products/Products";
import OutsideClickHandler from "react-outside-click-handler";
import productData from "../productData";
import Product from "../product/Product";
import { useDispatch, useSelector } from "react-redux";
import { openWishlist, selectWishlistOpenStatus } from "../../features/shop/shopSlice";
import { Link } from "react-router-dom";
import WishlistProduct from "../wishlistProduct/WishlistProduct";



const Header = () => {
  const active = useSelector(selectWishlistOpenStatus);
  const dispatch = useDispatch();

  const toggle = () => {
    if (active === "wishlistBoxOpen") {
      dispatch(openWishlist("wishlistBoxClose"));
    } else {
      dispatch(openWishlist("wishlistBoxOpen"));
    }
  }

  return (
    <div className="header">
      <div className="upper">
        <div className="wishlist" htmlFor="logos">
          <OutsideClickHandler
            onOutsideClick={() => {
                if (active === "wishlistBoxOpen") {
                  dispatch(openWishlist("wishlistBoxClose"));
                }
            }}
          >
            <div className = "wishListHeart" onClick={toggle}></div>
            <div className={`wishlistBox ${active}`}>
              <WishlistProduct />
            </div>
          </OutsideClickHandler>
        </div>
        <Link to='/'>
          <div className="oniomania"></div>
        </Link>
        <div className="searchAndCompare">
          <Search />
        </div>
      </div>
      <div className="lower">
        <div className="filters"></div>
      </div>
    </div>
  );
};

export default Header;
