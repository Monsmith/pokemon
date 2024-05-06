import React from 'react';
import { FiShoppingBag } from "react-icons/fi";

interface AddToCartProps {
    card: CardType
    cartItems: CardType[];
    setCartItems: React.Dispatch<React.SetStateAction<any>>;
}
interface CardType {
    id: number;
    name: string;
    rarity: string;
    cardmarket: CardMarket;
    images: Image;
    set: Set;
}

interface Image {
    small: string;
    large: string;
}

interface Set {
    total: number;
}

interface CardMarket {
    prices: Prices;
}

interface Prices {
    averageSellPrice: number;
}

function AddToCart(props: AddToCartProps) {
    const { setCartItems, card, cartItems } = props;

    const onAddToCart = () => {
        if (!available) return;

        const cardWithQuantity = {
            ...card,
            quantity: 1
        }

        setCartItems((prevItems: any) => [...prevItems, cardWithQuantity])
    }

    const available = card.set.total > 0;

    if (!available) {
        return (
            <div className='m-2 mx-4 cursor-pointer'>
                <div className='p-2 bg-grayCart rounded-lg flex justify-evenly items-center text-disabledText'>
                    <FiShoppingBag />
                    <span className='text-sm'>
                        Add to cart
                    </span>
                </div>
            </div>
        )
    }

    return (
        <div className='m-2 mx-4 cursor-pointer' onClick={onAddToCart}>
            <div className='p-2 bg-grayCart hover:bg-addToCartHoverText rounded-lg flex justify-evenly items-center'>
                <FiShoppingBag />
                <span className='text-sm'>
                    Add to cart
                </span>
            </div>
        </div>
    );
}

export default AddToCart;
