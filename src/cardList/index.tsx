import React from 'react';
import Card  from '../card';
import { useQuery } from 'react-query';
import {fetchCards} from "../helpers/fetchCards";

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
            CardList
            <div className="">
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
