import React, {useEffect, useState} from "react";
import {ListProductsRes} from "types";
import {ProductsTable} from "./ProductsTable";

export const ProductsList = () => {
    const [data, setData] = useState< ListProductsRes | null>(null)


    const refresh = async () => {
        setData(null);
        const res = await fetch('http://localhost:3001/price');
        setData(await res.json());
    };

    useEffect(() => {
        refresh();
    }, []);

    if (data === null) {
        return <p>Trwa wczytywanie danych...</p>
    }

    return <>
            <h1>Gifts</h1>
        <ProductsTable productsList={data.productsList}/>
    </>;
};