import "./home.scss";
import Product from "../product/Product";
import { useSelector, useDispatch } from 'react-redux';
import { getProducts, selectProducts } from "../../features/shop/shopSlice";
import { useEffect } from "react";
import Modal from 'react-modal';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
import { useMemo } from "react";


const Home = () => {
    const dispatch = useDispatch();
    const productData = useSelector(selectProducts);
    const [selectedCategory, setSelectedCategory] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const countToShow = 12;
    const [modalIsOpen, setIsOpen] = useState(true);


    // Filter products based on selected category
    const filteredProducts = useMemo(() => {
        return productData.filter(item => {
            if (!selectedCategory) return true;
            return item.category.includes(selectedCategory);
        });
    }, [productData, selectedCategory]);

    // Calculate total pages based on filtered products
    const totalPages = useMemo(() => {
        return Math.ceil(filteredProducts.length / countToShow);
    }, [filteredProducts.length, countToShow]);

    function closeModal() {
        setIsOpen(false);
    }

    // Fetch products on component mount
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    // Reset to the first page when the selected category changes
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory]);

    // Get current page products
    const currentProducts = useMemo(() => {
        const startIndex = (currentPage - 1) * countToShow;
        return filteredProducts.slice(startIndex, startIndex + countToShow);
    }, [filteredProducts, currentPage, countToShow]);


    const useWindowWidth = () => {
        const [windowWidth, setWindowWidth] = useState(window.innerWidth);

        useEffect(() => {
            const handleResize = () => {
                setWindowWidth(window.innerWidth);
            };

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, []);

        return windowWidth;
    };

    const windowWidth = useWindowWidth();

    const getItemsToShow = () => {
        if (windowWidth >= 1200) {
            return 8;
        } else if (windowWidth >= 992) {
            return 6;
        } else if (windowWidth >= 768) {
            return 4;
        } else {
            return 2;
        }
    };

    const itemsToShow = getItemsToShow();
    return (
        <div className="home">
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
                <button onClick={closeModal}>x</button>
                <div className="intro"></div>
            </Modal>
            <div className="categories">
                <Swiper
                    slidesPerView={itemsToShow}
                    spaceBetween={10}
                    pagination={{ clickable: true }}
                    cssMode={true}
                    navigation={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    {['all', 'appliance', 'electronics', 'health', 'exercise', 'food', 'kitchenware', 'clothes', 'dental', 'music', 'books', 'medicine'].map(category => (
                        <SwiperSlide key={category}>
                            <button
                                className={selectedCategory === category && 'activeCategory'}
                                onClick={() => setSelectedCategory(category === 'all' ? false : category)}
                            >
                                <span>{category}</span>
                                <div></div>
                            </button>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="productContent">
                {currentProducts.map(item => (
                    <Product key={item.id} item={item} />
                ))}
            </div>

            <div className="pagination">
                {filteredProducts.length > countToShow && (
                    <ResponsivePagination
                        current={currentPage}
                        total={totalPages}
                        onPageChange={setCurrentPage}
                    />
                )}
            </div>
        </div>
    );
};

export default Home;
