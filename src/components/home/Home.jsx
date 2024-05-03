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
    const [stateCategory, setCategory] = React.useState(false);

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
                <span onClick={() => setCategory(false)}>all</span>
                <span className={stateCategory === 'appliance' && 'activeCategory'} onClick={() => setCategory('appliance')}>appliance</span>
                <span className={stateCategory === 'electronics' && 'activeCategory'} onClick={() => setCategory('electronics')}>electronics</span>
                <span className={stateCategory === 'health' && 'activeCategory'} onClick={() => setCategory('health')}>health</span>
                <span className={stateCategory === 'exercise' && 'activeCategory'} onClick={() => setCategory('exercise')}>exercise</span>
                <span className={stateCategory === 'food' && 'activeCategory'} onClick={() => setCategory('food')}>food</span>
                <span className={stateCategory === 'kitchenware' && 'activeCategory'} onClick={() => setCategory('kitchenware')}>kitchenware</span>
                <span className={stateCategory === 'clothes' && 'activeCategory'} onClick={() => setCategory('clothes')}>clothes</span>
                <span className={stateCategory === 'dental' && 'activeCategory'} onClick={() => setCategory('dental')}>dental</span>
                <span className={stateCategory === 'music' && 'activeCategory'} onClick={() => setCategory('music')}>music</span>
            </div>

            <div className="productContent">
                {
                    productData
                    .filter(item => {
                        if(stateCategory === false){
                            return item;
                        }
                        return item.category.includes(stateCategory);
                    })
                    .map(item => (
                        <Product key = {item.id} item={item} />
                    ))}
            </div>
        </div>
    )
}

export default Home;