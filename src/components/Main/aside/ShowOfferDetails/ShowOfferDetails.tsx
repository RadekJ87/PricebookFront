import {Button} from "../../../common/Button/Button";
import {useContext, useState} from "react";
import {OfferContext} from "../../../../contexts/offer.context";
import './ShowOfferDetails.css';

export const ShowOfferDetails = () => {
    const {searchOffer, setSearchOffer} = useContext(OfferContext);
    const [offerInputValue, setOfferInputValue] = useState(searchOffer);
    const [loading, setLoading] = useState(false);

    const showOfferDetails = () => {

    };

    return (
        <div className='show-offer-details-container'>
            <h1>Wyświetl zawartość oferty handlowej</h1>
            <form onSubmit={showOfferDetails}>
                <label>
                    <p>Podaj number oferty</p>
                    <input
                        type="string"
                        name="offerNumber"
                        required
                        value={offerInputValue}
                        onChange={e => setOfferInputValue(e.target.value)}
                    />
                </label>
                <Button className={`standard-button-high-margin`} text={`Zastosuj`}/>
            </form>
        </div>);
}