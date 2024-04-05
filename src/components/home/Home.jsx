import "./home.scss";
import Product from "../product/Product";
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, selectProducts } from "../../features/shop/shopSlice";
import { useEffect } from "react";

const Home = ()=>{
    const dispatch = useDispatch();
    const productData = useSelector(selectProducts);

    useEffect(() => {
        dispatch(getProducts());
    }, [])
    let storedArray = JSON.parse(localStorage.getItem('myArray')) || [];

    return(
        <div className = "home">
            <div className = "productContent">
                {
                     productData.map(item => (
                        <Product key={item.id} item={item} />
                    ))}
            </div>
        </div>
    )
}

export default Home;