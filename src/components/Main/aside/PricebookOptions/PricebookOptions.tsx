import { Link } from "react-router-dom";
import "./PricebookOptions.css";
import {Button} from "../../../common/Button/Button";

export const PricebookOptions = () => {
    return (
        <div className="pricebook-options">
            <h1>Opcje</h1>
            <div>
                <Link to="/change-prices"><Button className="options-button" text="Zmień ceny" /></Link>
                <Link to="/show-offer"><Button className="options-button" text="Wyswietl zawartość oferty" /></Link>
                <Link to="/add-new-product"><Button className="options-button" text="Dodaj produkt do cennika" /></Link>
            </div>
        </div>
    );
}


