import { Link } from "react-router-dom";

export const PricebookOptions = () => {
    return (
        <div>
            <h1>Opcje</h1>
            <Link to="/change-prices"><button>Zmień ceny</button></Link>
            <Link to="/show-offer"><button>Wyswietl zawartość oferty</button></Link>
            <Link to="/add-new-product"><button>Dodaj produkt do cennika</button></Link>
        </div>
    );
}


