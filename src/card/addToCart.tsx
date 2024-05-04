import React from 'react';
import { FiShoppingBag } from "react-icons/fi";

function AddToCart() {
    return (
        <div className='m-2 mx-4'>
            <div className='p-2 bg-grayCart rounded-lg flex justify-evenly items-center'>
                <FiShoppingBag />
                <span className='text-sm'>
                    Add to cart
                </span>
            </div>
        </div>
    );
}

export default AddToCart;
