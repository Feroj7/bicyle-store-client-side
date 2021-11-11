import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import OrderDetail from '../OrderDetail/OrderDetail';

const Order = () => {

    return (
        <div>
            <Header></Header>
            <OrderDetail></OrderDetail>
            <Footer></Footer>
        </div>
    );
};

export default Order;