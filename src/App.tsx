import React, {useState} from 'react';
import {Header} from "./components/layout/header/Header";
import { Main } from './components/layout/main/Main';
import { SearchContext } from './components/contexts/search.context';
import {Route, Routes } from 'react-router-dom';
import {AddNewProductForm} from "./components/AddNewProductForm/AddNewProductForm";



export const App = () => {
    const [search, setSearch] = useState('');

    return (
        <SearchContext.Provider value={{search, setSearch}}>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/add" element={<AddNewProductForm/>}/>
            </Routes>
            {/*<Main/>*/}
        </SearchContext.Provider>
    );
}


