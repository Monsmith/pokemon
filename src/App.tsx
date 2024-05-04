import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './cardList';
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()

function App() {
    const searchRef = useRef<HTMLInputElement>(null)
    const [queryOptions, setQueryOptions] = useState({
        q: '',
        set: '',
        rarity: '',
        type: '',
    });

    const onSubmitSearch = (e: any) => {
        e.preventDefault()
        const searchValue = searchRef.current && searchRef.current.value
        setQueryOptions(prevState => ({
            ...prevState,
            q: `name:${searchValue}`
        }));
    };

    return (
    <QueryClientProvider client={queryClient}>
        <div className='px-36 font-poppins'>
            <div className='header flex justify-between mt-12'>
                <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight">
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

            <CardList
                setQueryOptions={setQueryOptions}
                queryOptions={queryOptions}
            />
        </div>
    </QueryClientProvider>
  );
}

export default App;
