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
            <td>{props.product.itemNumber}</td>
            <td>{props.product.moq}</td>
            <td>{props.product.price}</td>
            <td>{props.product.offerNumber}</td>
        </tr>
    );
}