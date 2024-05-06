import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './cardList';
import { QueryClient, QueryClientProvider } from 'react-query'
import CartModal from "./cartModal";
const queryClient = new QueryClient()

const CARD_TYPES = [
    "Colorless",
    "Darkness",
    "Dragon",
    "Fairy",
    "Fighting",
    "Fire",
    "Grass",
    "Lightning",
    "Metal",
    "Psychic",
    "Water"
]

const RARIRY_TYPES = [
    "Amazing Rare",
    "Common",
    "LEGEND",
    "Promo",
    "Rare",
    "Rare ACE",
    "Rare BREAK",
    "Rare Holo",
    "Rare Holo EX",
    "Rare Holo GX",
    "Rare Holo LV.X",
    "Rare Holo Star",
    "Rare Holo V",
    "Rare Holo VMAX",
    "Rare Prime",
    "Rare Prism Star",
    "Rare Rainbow",
    "Rare Secret",
    "Rare Shining",
    "Rare Shiny",
    "Rare Shiny GX",
    "Rare Ultra",
    "Uncommon"
]

function App() {
    const searchRef = useRef<HTMLInputElement>(null)
    const [queryOptions, setQueryOptions] = useState({
        name: '',
        set: '',
        rarity: '',
        type: '',
    });

    const [cartItems, setCartItems] = useState([]);
    const [cartModalIsOpen, setCartModalIsOpen] = useState(false);

    const openModal = () => {
        setCartModalIsOpen(true);
    };

    const onCloseModal = () => {
        setCartModalIsOpen(false);
    };

    const onSubmitSearch = (e: any) => {
        e.preventDefault()
        const searchValue = searchRef.current && searchRef.current.value
        setQueryOptions(prevState => ({
            ...prevState,
            name: `${searchValue}`
        }));
    };
    console.log(cartItems, 'cartItems')

    return (
    <QueryClientProvider client={queryClient}>
        <div className='px-36 font-poppins'>
            <div className='header flex justify-between mt-12'>
                <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight" onClick={openModal}>
                    Pokemon market
                </h1>
                <div>
                    <form onSubmit={e => onSubmitSearch(e)}>
                        <input type="text"
                               ref={searchRef}
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="Search by Name"/>
                    </form>

                </div>
            </div>

            <hr className="my-5 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10"/>
            <div className='text-xl font-semibold flex justify-between'>
                <div className='title'>Choose Card</div>
                <div className='selects'>
                    <select onChange={(e) => setQueryOptions({...queryOptions, rarity: e.target.value})}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value='1' selected disabled>Rarity</option>
                        {
                            RARIRY_TYPES.map((type) => {
                                return <option key={type} value={type}>{type}</option>
                            })
                        }
                    </select>
                    <select onChange={(e) => setQueryOptions({...queryOptions, type: e.target.value})}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value='1' selected disabled>Type</option>
                        {
                            CARD_TYPES.map((type) => {
                                return <option key={type} value={type}>{type}</option>
                            })
                        }
                    </select>
                </div>
            </div>
            <CardList
                setQueryOptions={setQueryOptions}
                queryOptions={queryOptions}
                setCartItems={setCartItems}
                cartItems={cartItems}
            />
            <CartModal
                cartModalIsOpen={cartModalIsOpen}
                onCloseModal={onCloseModal}
                cartItems={cartItems}
                setCartItems={setCartItems}
            />

        </div>
    </QueryClientProvider>
  );
}

export default App;
