import React from "react";
import {ProductTableRow} from "../ProductTableRow/ProductTableRow";
import {ProductEntity} from 'types';
import "./ProductsTable.css";

interface Props {
    productsList: ProductEntity[],
    isActive: boolean;
}

export const ProductsTable = (props: Props) => {

    return (
        <table className={`products-table ${props.isActive ? "active" : ""}`}>
            <thead>
            <tr>
                {/*EN*/}
                {/*<th>Description</th>*/}
                {/*<th>Drawing number</th>*/}
                {/*<th>Revision</th>*/}
                {/*<th>Item number</th>*/}
                {/*<th>MOQ</th>*/}
                {/*<th>Price</th>*/}
                {/*<th>Offer number</th>*/}

                {/*PL*/}
                <th>Opis</th>
                <th>Numer rysunku</th>
                <th>Rewizja</th>
                <th>Numer materiału</th>
                <th>MOQ</th>
                <th>Cena</th>
                <th>Numer oferty</th>
                <th>Akcja</th>
            </tr>
            </thead>
            <tbody>
            {
                props.productsList.map(product => <ProductTableRow product={product} key={product.id}/>)
            }
            </tbody>
        </table>);
};


