import React, {useContext, useState} from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import {ProductEntity} from 'types';
import {GlobalContext} from "../../../../contexts/global.context";
import './ProductTableRow.css'

interface Props {
    product: ProductEntity,
}

export const ProductTableRow = (props: Props) => {
    const [loading, setLoading] = useState(false);
    const {randomNumber, setRandomNumber} = useContext(GlobalContext);


    const removeProduct = async (e: React.MouseEvent<HTMLElement>) => {
        const selectedProductId = props.product.id;
        setLoading(true);

        try {
            const res = await fetch(`http://localhost:3001/price/`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    selectedProductId,
                }),
            });

            const data = await res.json();

            console.log(data);
        } finally {
            setLoading(false);
            setRandomNumber(Math.random())
        }
    };

    return (
        <tr>
            <td>{props.product.description}</td>
            <td>{props.product.drawingNumber}</td>
            <td>{props.product.revision}</td>
            {props.product.itemNumber === '' ? <td style={{color: 'red', fontWeight: 'bold'}}>BRAK</td> : <td>{props.product.itemNumber}</td>}
            {/*{props.product.moq === 1 ? <td>{props.product.moq} pc</td>: <td>{props.product.moq} pcs</td>}*/}
            <td>{props.product.moq} szt</td>
            <td>{props.product.price}€</td>
            <td>{props.product.offerNumber}</td>
            {/*<td>*/}
            {/*    <button onClick={removeProduct}>Usuń</button>*/}
            {/*</td>*/}
            <td>
                <IconButton aria-label="delete" size="small" color="warning" onClick={removeProduct}><DeleteIcon fontSize="small"/></IconButton>
            </td>
        </tr>
    );
}