import React, { useContext, useEffect, useState } from 'react';
import Card  from '../card';
import { useQuery } from 'react-query';
import { fetchCards } from "../helpers/fetchCards";

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

type QueryOptions = {
    name: string | null,
    set: string,
    rarity: string,
    type: string,
}

type Props = {
    setQueryOptions: React.Dispatch<React.SetStateAction<any>>;
    queryOptions: QueryOptions;
};

function CardList(props: Props) {
    const { queryOptions, setQueryOptions } = props;
    const { data, status, refetch } = useQuery(['cardsData', queryOptions], () => fetchCards(queryOptions));
    useEffect(()  => {
        refetch()
    }, [queryOptions])

    if (status === "loading") return <div>Loading...</div>

    return (
        <div>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:sm:grid-cols-6 xl:sm:grid-cols-6 gap-x-0 gap-y-7 mt-8">
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
