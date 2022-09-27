import React, {useState} from 'react';
import {Header} from "./components/Header/Header";
import {Main} from './components/Main/Main';
import {GlobalContext} from './contexts/global.context';
import {SearchContext} from './contexts/search.context';
import {OfferContext} from "./contexts/offer.context";


export const App = () => {
    const [search, setSearch] = useState('');
    const [searchOffer, setSearchOffer] = useState('');
    const [randomNumber, setRandomNumber] = useState(0);

    return (
        <OfferContext.Provider value={{searchOffer, setSearchOffer}}>
            <GlobalContext.Provider value={{randomNumber, setRandomNumber}}>
                <SearchContext.Provider value={{search, setSearch}}>
                    <>
                        <Header/>
                        <Main/>
                    </>
                </SearchContext.Provider>
            </GlobalContext.Provider>
        </OfferContext.Provider>
    )
        ;
}


