import React from 'react';
import './Main.css';
import {ProductsList} from "../../products/ProductsList";



export const Main = () => {
    return (
        <div className="pricebook-container">
            <main className="pricebook-table-container">
                <ProductsList/>
            </main>
            <aside className="pricebook-options-container">
                <h1>Opcje</h1>
            </aside>
        </div>
    );
}