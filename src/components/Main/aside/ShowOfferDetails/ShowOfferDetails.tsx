import {Button} from "../../../common/Button/Button";
import React, {SyntheticEvent, useContext, useEffect, useState} from "react";
import {OfferContext} from "../../../../contexts/offer.context";
import './ShowOfferDetails.css';
import {OfferTable} from "./OfferTable/OfferTable";


export const ShowOfferDetails = () => {
    const {searchOffer, setSearchOffer} = useContext(OfferContext);

    const [data, setData] = useState([]);
    const [offerInputValue, setOfferInputValue] = useState(searchOffer);
    const [loading, setLoading] = useState(false);


    const refreshOfferList = async () => {
        setLoading(true);
        console.log(data.length);

        try{
            setData([]);
            const res = await fetch(`http://localhost:3001/price/offer/${searchOffer}`);
            const {productsList} = await res.json();
            console.log('po fetchu',productsList);
            setData(productsList);
            setOfferInputValue(searchOffer);
        } finally {
           setLoading(false);
        }
    };


    useEffect(() => {
        refreshOfferList();
    }, [searchOffer]);

    const setInputFromLocalState = (e: SyntheticEvent) => {
        e.preventDefault();
        setSearchOffer(offerInputValue);
    }


    return (
        <div className='show-offer-details-container'>
            <h1>Wyświetl zawartość oferty handlowej</h1>
            <form onSubmit={setInputFromLocalState}>
                <label>
                    <p>Podaj number oferty</p>
                    <input
                        type="string"
                        name="offerNumber"
                        value={offerInputValue}
                        onChange={e => setOfferInputValue(e.target.value)}
                    />
                </label>
                <Button className={`standard-button-high-margin`} text={`Zastosuj`}/>
            </form>

            {data.length === 0 ? <h1>Offer does not exist or search field is empty</h1> :
                <OfferTable offerList={data}/>
            }
        </div>);
}