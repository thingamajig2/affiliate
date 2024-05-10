import "./home.scss";
import Product from "../product/Product";
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, selectProducts } from "../../features/shop/shopSlice";
import { useEffect } from "react";
import Modal from 'react-modal';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

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
            {/* <div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Example Modal"
                >
                    <button onClick={closeModal}>x</button>
                    <div className="intro"></div>
                </Modal>
            </div> */}
            <div className="categories">
                {/* <Swiper
                    slidesPerView={3}
                    spaceBetween={3}
                    pagination={{
                        clickable: true,
                    }}
                    // modules={[Pagination]}
                    className="mySwiper"
                > */}
                        <button onClick={() => setCategory(false)}>
                            <span>all</span>
                            <div></div>
                        </button>
                        <button className={stateCategory === 'appliance' && 'activeCategory'} onClick={() => setCategory('appliance')}>
                            <span>appliance</span>
                            <div></div>
                        </button>
                        <button className={stateCategory === 'electronics' && 'activeCategory'} onClick={() => setCategory('electronics')}>
                            <span>electronics</span>
                            <div></div>
                        </button>
                        <button className={stateCategory === 'health' && 'activeCategory'} onClick={() => setCategory('health')}>
                            <span>health</span>
                            <div></div>
                        </button>
                        <button className={stateCategory === 'exercise' && 'activeCategory'} onClick={() => setCategory('exercise')}>
                            <span>exercise</span>
                            <div></div>
                        </button>
                        <button className={stateCategory === 'food' && 'activeCategory'} onClick={() => setCategory('food')}>
                            <span>food</span>
                            <div></div>
                        </button>
                        <button className={stateCategory === 'kitchenware' && 'activeCategory'} onClick={() => setCategory('kitchenware')}>
                            <span>kitchenware</span>
                            <div></div>
                        </button>
                        <button className={stateCategory === 'clothes' && 'activeCategory'} onClick={() => setCategory('clothes')}>
                            <span>clothes</span>
                            <div></div>
                        </button>
                        <button className={stateCategory === 'dental' && 'activeCategory'} onClick={() => setCategory('dental')}>
                            <span>dental</span>
                            <div></div>
                        </button>
                        <button className={stateCategory === 'music' && 'activeCategory'} onClick={() => setCategory('music')}>
                            <span>music</span>
                            <div></div>
                        </button>
                        <button className={stateCategory === 'books' && 'activeCategory'} onClick={() => setCategory('books')}>
                            <span>books</span>
                            <div></div>
                        </button>
                        <button className={stateCategory === 'medicine' && 'activeCategory'} onClick={() => setCategory('medicine')}>
                            <span>medicine</span>
                            <div></div>
                        </button>
                    {/* <SwiperSlide>
                        <button onClick={() => setCategory(false)}>
                            <span>all</span>
                            <div></div>
                        </button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <button className={stateCategory === 'appliance' && 'activeCategory'} onClick={() => setCategory('appliance')}>
                        <span>appliance</span>
                        <div></div>
                        </button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <button className={stateCategory === 'electronics' && 'activeCategory'} onClick={() => setCategory('electronics')}>
                            <span>electronics</span>
                            <div></div>
                        </button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <button className={stateCategory === 'health' && 'activeCategory'} onClick={() => setCategory('health')}>
                            <span>health</span>
                            <div></div>
                        </button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <button className={stateCategory === 'exercise' && 'activeCategory'} onClick={() => setCategory('exercise')}>
                            <span>exercise</span>
                            <div></div>
                        </button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <button className={stateCategory === 'food' && 'activeCategory'} onClick={() => setCategory('food')}>
                            <span>food</span>
                            <div></div>
                        </button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <button className={stateCategory === 'kitchenware' && 'activeCategory'} onClick={() => setCategory('kitchenware')}>
                            <span>kitchenware</span>
                            <div></div>
                        </button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <button className={stateCategory === 'clothes' && 'activeCategory'} onClick={() => setCategory('clothes')}>
                            <span>clothes</span>
                            <div></div>
                        </button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <button className={stateCategory === 'dental' && 'activeCategory'} onClick={() => setCategory('dental')}>
                            <span>dental</span>
                            <div></div>
                        </button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <button className={stateCategory === 'music' && 'activeCategory'} onClick={() => setCategory('music')}>
                            <span>music</span>
                            <div></div>
                        </button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <button className={stateCategory === 'books' && 'activeCategory'} onClick={() => setCategory('books')}>
                            <span>books</span>
                            <div></div>
                        </button>
                    </SwiperSlide>
                    <SwiperSlide>
                        <button className={stateCategory === 'medicine' && 'activeCategory'} onClick={() => setCategory('medicine')}>
                            <span>medicine</span>
                            <div></div>
                        </button>
                    </SwiperSlide> */}
                {/* </Swiper> */}
            </div>
            <div className="productContent">

                {
                    productData
                        .filter(item => {
                            if (stateCategory === false) {
                                return item;
                            }
                            return item.category.includes(stateCategory);
                        })
                        .map(item => (
                            <Product key={item.id} item={item} />
                        ))}
            </div>
        </div>
    )
}

export default Home;