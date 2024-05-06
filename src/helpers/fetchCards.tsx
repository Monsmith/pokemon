type QueryOptions = {
    name: string | null,
    set: string,
    rarity: string,
    type: string,
}

export const fetchCards = async (queryOptions: QueryOptions) => {
    let queryString = '';
    for (const key in queryOptions) {
        if (queryOptions[key as keyof QueryOptions]) {
            queryString += `${key}:"${queryOptions[key as keyof QueryOptions]}" `;
        }
    }
    const res = await fetch(`https://api.pokemontcg.io/v2/cards?page=1&pageSize=20&q=${queryString}&select=id,name,rarity,set,images,cardmarket`);
    return res.json();
};