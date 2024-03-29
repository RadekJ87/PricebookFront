import React from "react";
import {ProductEntity} from "types";
import {OfferTableRow} from "../OfferTableRow/OfferTableRow";
import './OfferTable.css';

interface Props {
    offerList: ProductEntity[],
}

export const OfferTable = ({offerList}: Props) => {
    return (
        <table className={`offer-table`}>
            <thead>
            <tr>
                {/*EN*/}
                {/*<th>Description</th>*/}
                {/*<th>Drawing number</th>*/}
                {/*/!*<th>Item number</th>*!/*/}
                {/*<th>MOQ</th>*/}
                {/*<th>Price</th>*/}
                {/*PL*/}
                <th>Opis</th>
                <th>Numer rysunku</th>
                {/*<th>Item number</th>*/}
                <th>MOQ</th>
                <th>Cena</th>
            </tr>
            </thead>
            <tbody>
            {
                offerList.map(product => <OfferTableRow product={product} key={product.id}/>)
            }
            </tbody>
        </table>);

}