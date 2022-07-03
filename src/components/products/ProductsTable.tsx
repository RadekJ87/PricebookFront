import React from "react";
import {ProductTableRow} from "./ProductTableRow";
import {ProductEntity} from 'types';

interface Props {
    productsList: ProductEntity[],
}

export const ProductsTable = (props: Props) => {

    return (
        <table>
            <thead>
            <tr>
                <th>Description</th>
                <th>Drawing number</th>
                <th>Revision</th>
                <th>Item number</th>
                <th>MOQ</th>
                <th>Price</th>
                <th>Offer number</th>
            </tr>
            </thead>
            <tbody>
            {
                props.productsList.map(product => <ProductTableRow product={product} key={product.id}/>)
            }
            </tbody>
        </table>);
};


