import React from 'react';
import {ProductEntity} from 'types';

interface Props {
    product: ProductEntity,
}

export const ProductTableRow = (props: Props) => {
    return (
        <tr>
            <td>{props.product.description}</td>
            <td>{props.product.drawingNumber}</td>
            <td>{props.product.revision}</td>
            {props.product.itemNumber === '' ? <td>BRAK</td> : <td>{props.product.itemNumber}</td>}
            {/*{props.product.moq === 1 ? <td>{props.product.moq} pc</td>: <td>{props.product.moq} pcs</td>}*/}
            <td>{props.product.moq} szt</td>
            <td>{props.product.price}€</td>
            <td>{props.product.offerNumber}</td>
        </tr>
    );
}