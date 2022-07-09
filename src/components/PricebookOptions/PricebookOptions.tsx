import { Link } from "react-router-dom";

export const PricebookOptions = () => {
    return (
        <div>
            <h1>Opcje</h1>
            <button>Zmień ceny</button>
            <button>Wyswietl zawartość oferty</button>
            <Link to="/add"><button>Dodaj produkt do cennika</button></Link>
        </div>
    );
}