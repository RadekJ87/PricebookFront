import React from "react";
import { OfferEntity } from "types";

interface Props {
    product: OfferEntity,
}

export const OfferTableRow = ({product}: Props) => {
    return (
        <tr>
            <td>{product.description}</td>
            <td>{product.drawingNumber}</td>
            {product.itemNumber === '' ? <td>BRAK</td> : <td>{product.itemNumber}</td>}
            <td>{product.price}€</td>
        </tr>
    );
}
