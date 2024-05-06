import React from 'react';
import AddToCart from "./addToCart";
interface CardProps {
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

function Card(props: CardProps) {
    const { card, setCartItems, cartItems } = props;
    const { name, set, rarity, cardmarket, images } = card;
    const { large } = images
    const cardAvailable = set.total > 0;
    const cardQuantity = () => {
        if (cardAvailable) {
            return `${set.total} Cards`
        } else {
            return 'Out of stocks';
        }
    }

    return (
        <div className='relative w-48'>
            <div className='hero container max-w-screen-lg mx-auto pb-10 flex justify-center '>
                <img className='absolute h-36' src={large} alt={name} />
            </div>
            <div className='content h-44 text-center bg-grayCard rounded-2xl mt-16'>
                <div className='pt-14 text-xs'>{name}</div>
                <div className='mt-3 mb-4 text-priceText'>$ {cardmarket.prices.averageSellPrice} {cardQuantity()}</div>
                <AddToCart
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                    card={card}
                />
            </div>
        </div>
    );
}

export default Card;
