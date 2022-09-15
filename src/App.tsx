import React, {useState} from 'react';
import {Header} from "./components/layout/header/Header";
import { Main } from './components/layout/main/Main';
import { SearchContext } from './components/contexts/search.context';



export const App = () => {
    const [search, setSearch] = useState('');

    return (
        <SearchContext.Provider value={{search, setSearch}}>
        <>
            <Header/>
            <Main/>
        </>

        </SearchContext.Provider>
    );
}


