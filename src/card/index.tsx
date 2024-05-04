import React from 'react';
import AddToCart from "./addToCart";
interface CardProps {
    card: CardType
}

interface CardType {
    id: number;
    name: string;
    rarity: string;
    cardmarket: CardMarket;
    set: Set;
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
    const { card } = props;
    const { name, set, rarity, cardmarket } = card;
    const cardAvailable = set.total > 0 ? true : false;
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
                <img className='absolute h-36' src='https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_65.png' alt={name} />
            </div>
            <div className='content h-44 text-center bg-grayCard rounded-2xl mt-16'>
                <div className='pt-14 text-xs'>{name}</div>
                <div className='mt-3 mb-4 text-priceText'>$ {cardmarket.prices.averageSellPrice} {cardQuantity()}</div>
                <AddToCart />
            </div>
        </div>
    );
}

export default Card;
