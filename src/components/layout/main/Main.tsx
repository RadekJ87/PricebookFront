import React from 'react';
import './Main.css';
import {ProductsList} from "../../products/ProductsList";
import {MainAside} from "../main-aside/MainAside";



export const Main = () => {
    return (
        <div className="pricebook-container">
            <main className="pricebook-table-container">
                <ProductsList/>
            </main>
            <aside className="pricebook-options-container">
                <MainAside/>
            </aside>
        </div>
    );
}