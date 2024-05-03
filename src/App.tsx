import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './cardList';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <div className='px-36'>
            <div className='header flex justify-between mt-12'>
                <h1 className="mb-4 text-3xl font-extrabold leading-none tracking-tight">
                    Pokemon market
                </h1>
                <div>
                    <input type="text"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Search by Name" required/>
                </div>
            </div>

            <hr className="my-5 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10"/>

            <CardList />
        </div>
    </QueryClientProvider>
  );
}

export default App;
