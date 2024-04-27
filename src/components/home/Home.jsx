import "./home.scss";
import Product from "../product/Product";
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, selectProducts } from "../../features/shop/shopSlice";
import { useEffect } from "react";
import Modal from 'react-modal';
import React from 'react';

const Home = () => {
    const dispatch = useDispatch();
    const productData = useSelector(selectProducts);
    const [modalIsOpen, setIsOpen] = React.useState(true);

    useEffect(() => {
        dispatch(getProducts());
    }, [])
    let storedArray = JSON.parse(localStorage.getItem('myArray')) || [];

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="home">
            <div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                >
                    <button onClick={closeModal}>x</button>
                    <div className="intro"></div>
                </Modal>
            </div>
            <div className="categories">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
            </div>
            <div className="productContent">
                {
                    productData.map(item => (
                        <Product key={item.id} item={item} />
                    ))}
            </div>
        </div>
    )
}

export default Home;