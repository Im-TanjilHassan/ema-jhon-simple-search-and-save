import React from 'react';
import useProduct from '../../hooks/useProduct';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import OrderItem from "./orderItem/OrderItem";
import {removeFromDb, clearTheCart } from '../../utilities/fakedb'
import { useHistory } from 'react-router';

const OrderReview = () => {
    const [products] = useProduct()
    const [cart, setCart] = useCart(products)

    const handleRemovebtn = (key) => {
        const newCart = cart.filter(product => product.key !== key)
        setCart(newCart)
        removeFromDb(key)
    }

    const history = useHistory()
    const placeOrderBtn = () => {
        history.push('./orderOnShipping');
        setCart([])
        clearTheCart()
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    cart.map(product => <OrderItem
                        key = {product.key}
                        product = {product}
                        removeBtn = {handleRemovebtn} />)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <button className='btn-orange' onClick={placeOrderBtn}>Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;