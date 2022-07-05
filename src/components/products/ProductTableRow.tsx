import React from 'react';
import { ProductEntity } from 'types';

interface Props {
    product: ProductEntity,
}

export const ProductTableRow = (props: Props) => {
    return (
        <tr>
            {/*nie wszytko musi byc wysietlane, omin numer oferty <Omit>*/}
            {/*<td>{props.item.description}</td>*/}
            {/*<td>{props.item.drawingNo}</td>*/}
            {/*<td>{props.item.MOQ}</td>*/}
            <td>{props.product.description}</td>
            <td>{props.product.drawingNumber}</td>
            <td>{props.product.revision}</td>
            {props.product.itemNumber === '' ? <td>BRAK</td> : <td>{props.product.itemNumber}</td>}
            {props.product.moq === 1 ? <td>{props.product.moq} pc</td>: <td>{props.product.moq} pcs</td>}
            <td>{props.product.price}</td>
            <td>{props.product.offerNumber}€</td>
        </tr>
    );
}