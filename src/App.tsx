import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './cardList';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <div className=''>
            asdf
        </div>
    </QueryClientProvider>
  );
}

export default App;
