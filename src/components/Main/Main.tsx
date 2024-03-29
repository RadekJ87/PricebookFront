import React, {useState} from 'react';
import './Main.css';
import {ProductsList} from "./main/ProductsList/ProductsList";
import {OptionsList} from "./aside/OptionsList/OptionsList";
import {PricebookOptions} from "./aside/PricebookOptions/PricebookOptions";
import {OptionsView} from "./aside/OptionsView";


export const Main = () => {
    return (
        <div className="pricebook-container">
            <main className="pricebook-table-container">
                    <ProductsList/>
            </main>
            <aside className="pricebook-options-container">
                <OptionsList>
                    <PricebookOptions/>
                </OptionsList>
                <OptionsView/>
            </aside>
        </div>
    );
};