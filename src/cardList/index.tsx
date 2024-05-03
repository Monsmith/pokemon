import React from 'react';
import Card  from '../card';
import { useQuery } from 'react-query';
import { fetchCards } from "../helpers/fetchCards";

interface CardType {
    id: number;
    name: string;
    rarity: string;
    set: string;
    cardmarket: string;
}


function CardList() {
    const { data, status } = useQuery("cardsData", fetchCards);
    if (status === "loading") return <div>Loading...</div>

    return (
        <div>
            <div className='text-xl font-semibold'>
                Choose Card
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:sm:grid-cols-6 xl:sm:grid-cols-6 gap-4 mt-8">
                {
                    data.data?.map((card: CardType) => {
                        return <Card key={card.id} card={card} />
                    })
                }
            </div>
        </div>
    );
}

export default CardList;
