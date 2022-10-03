import React, {ChangeEvent, SyntheticEvent, useContext, useEffect, useState} from "react";
import {ListProductsRes} from "types";
import {ProductsTable} from "../ProductsTable/ProductsTable";
import {TextInput} from "../../../common/Input/TextInput";
import {SearchContext} from "../../../../contexts/search.context";
import {NoFoundProductsList} from "../NoFoundProductsList";
import "./ProductsList.css";
import {Button} from "../../../common/Button/Button";
import {GlobalContext} from "../../../../contexts/global.context";

export const ProductsList = () => {
    const {search, setSearch} = useContext(SearchContext);
    const {randomNumber, setRandomNumber} = useContext(GlobalContext);

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
    }, [search, randomNumber]); // zrob dodawanie poroduktow w tym samym widoku, dodaj do use efect -> data, zobacz czy przeładowuję. Mozna dodatkowy context zronic?

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
        <div>
            <p>Podaj numer rysunku</p>
            <form className="search-form" onSubmit={setFromLocalState}>
                <TextInput className={'standard-input'} onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
                           value={inputValue}
                           minLength={1} maxLength={15} name={'searchProduct'}/>
                <Button className={'standard-button'} type={'submit'} text={`Wyszukaj`}/>
            </form>
            <form className="show-all-form" onSubmit={showAllProducts}>
                <Button className={'standard-button'} type={'submit'} text={`Pokaż wszystkie produkty`}/>
            </form>
        </div>

        {data.productsList.length === 0 ? <NoFoundProductsList dwgNo={search}/> :
            <ProductsTable isActive={true} productsList={data.productsList}/>}
    </>);
};