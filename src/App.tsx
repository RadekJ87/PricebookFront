import React, {useState} from 'react';
import {Header} from "./components/Header/Header";
import {Main} from './components/Main/Main';
import {GlobalContext} from './contexts/global.context';
import {SearchContext} from './contexts/search.context';


export const App = () => {
    const [search, setSearch] = useState('');
    const [randomNumber, setRandomNumber] = useState(0);

    return (
        <GlobalContext.Provider value={{randomNumber, setRandomNumber}}>
            <SearchContext.Provider value={{search, setSearch}}>
                <>
                    <Header/>
                    <Main/>
                </>
            </SearchContext.Provider>
        </GlobalContext.Provider>
    )
        ;
}


