import React, {ChangeEvent, SyntheticEvent, useContext, useEffect, useState} from "react";
import {ListProductsRes} from "types";
import {ProductsTable} from "./ProductsTable";
import {TextInput} from "../common/Input/TextInput";
import {SearchContext} from "../contexts/search.context";
import {NoFoundProductsList} from "./NoFoundProductsList";

export const ProductsList = () => {
    const {search, setSearch} = useContext(SearchContext);

    const [data, setData] = useState<ListProductsRes | null>(null);
    const [inputValue, setInputValue] = useState(search);


    const refresh = async () => {
        setData(null);
        const res = await fetch(`http://localhost:3001/price/${search}`);
        setData(await res.json());
        setInputValue(search);
    };


    useEffect(() => {
        refresh();
     }, [search]); // zrob dodawanie poroduktow w tym samym widoku, dodaj do use efect -> data, zobacz czy przeładowuję. Mozna dodatkowy context zronic?

    const setFromLocalState = (e: SyntheticEvent) => {
        e.preventDefault();
        setSearch(inputValue);
    }

    if (data === null) {
        return <p>Trwa wczytywanie danych...</p>
    }

    const showAllProducts = async (e: SyntheticEvent) => {
        e.preventDefault();
        setSearch('');
    };

    return (<>

        <h1>Lista produktów {search}</h1>
        <form onSubmit={setFromLocalState}>
            <TextInput onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)} value={inputValue}
                       description={'Podaj numer rysunku'}
                       minLength={1} maxLength={15} name={'searchProduct'}/>
            <button type='submit'>Wyszukaj</button>
        </form>
        <form onSubmit={showAllProducts}><button type='submit'>Pokaż wszystkie produkty</button></form>
        {data.productsList.length === 0 ? <NoFoundProductsList dwgNo={search}/> : <ProductsTable productsList={data.productsList}/> }
    </>);
};