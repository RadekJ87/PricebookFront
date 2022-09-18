import React, {useState} from 'react';
import {Header} from "./components/Header/Header";
import {Main} from './components/Main/Main';
import {SearchContext} from './contexts/search.context';


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


