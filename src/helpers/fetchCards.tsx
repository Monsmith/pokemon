type QueryOptions = {
    q: string,
    set: string,
    rarity: string,
    type: string,
}

export const fetchCards = async (queryOptions: QueryOptions) => {
    const res = await fetch(`https://api.pokemontcg.io/v2/cards?page=1&pageSize=20&q=${queryOptions.q}&select=id,name,rarity,set,cardmarket`);
    return res.json();
};