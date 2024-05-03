import React from 'react';
interface CardProps {
    card: CardType
}

interface CardType {
    id: number;
    name: string;
    rarity: string;
    set: string;
    cardmarket: string;
}

function Card(props: CardProps) {
    const { card } = props;
    const { name, set, rarity, cardmarket } = card;
    return (
        <div className='relative w-44'>
            <div className='hero container max-w-screen-lg mx-auto pb-10 flex justify-center '>
                <img className='absolute w-auto h-36' src='https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_65.png' alt={name} />
            </div>
            <div className='content h-40 text-center bg-purple-500 rounded-3xl mt-16'>
                <div className='pt-10'>{name}</div>
                <div className='mt-3'>$ 2.29 20 Cards</div>
            </div>
        </div>
    );
}

export default Card;
