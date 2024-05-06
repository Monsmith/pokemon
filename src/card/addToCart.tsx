import React from 'react';
import { FiShoppingBag } from "react-icons/fi";

interface AddToCartProps {
    card: CardType
    cartItems: CardType[];
    setCartItems: React.Dispatch<React.SetStateAction<any>>;
    openModal: () => void;
}
interface CardType {
    id: number;
    name: string;
    rarity: string;
    cardmarket: CardMarket;
    images: Image;
    set: Set;
    quantity?: number | undefined;
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
    const { setCartItems, card, cartItems, openModal } = props;

    const onAddToCart = () => {
        if (!available) return;

        if (cartItems.find((item: CardType) => item.id === card.id)) {
            const newCartItems = cartItems.map((item: CardType) => {
                if (item.id === card.id) {
                    return {
                        ...item,
                        quantity: item.quantity && item.quantity + 1
                    }
                }

                return item;
            })
            setCartItems(newCartItems);
            openModal()
            return;
        }

        const cardWithQuantity = {
            ...card,
            quantity: 1
        }

        setCartItems((prevItems: any) => [...prevItems, cardWithQuantity])
        openModal()
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
