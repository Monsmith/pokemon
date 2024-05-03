export const fetchCards = async () => {
    const res = await fetch("https://api.pokemontcg.io/v2/cards?page=1&pageSize=20&select=id,name,rarity,set,cardmarket");
    return res.json();
};