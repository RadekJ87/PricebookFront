import React from "react";
import { ProductEntity } from "types";

interface Props {
    product: ProductEntity,
}

export const OfferTableRow = ({product}: Props) => {
    return (
        <tr>
            <td>{product.description}</td>
            <td>{product.drawingNumber}</td>
            {/*{product.itemNumber === '' ? <td>BRAK</td> : <td>{product.itemNumber}</td>}*/}
            <td>{product.moq}</td>
            <td>{product.price}€</td>
        </tr>
    );
}
