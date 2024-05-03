import React from 'react';
import { FiShoppingBag } from "react-icons/fi";

function AddToCart() {
    return (
        <div className='m-2'>
            <div className='p-2 bg-gray-500 rounded-lg flex justify-evenly items-center'>
                {/*#3e3d47*/}
                <FiShoppingBag />
                <span>
                    Add to cart
                </span>
            </div>
        </div>
    );
}

export default AddToCart;
