import React, {useState} from 'react';
import './Main.css';
import {ProductsList} from "./main/ProductsList/ProductsList";
import {OptionsList} from "./aside/OptionsList";
import {PricebookOptions} from "../PricebookOptions/PricebookOptions";
import {OptionsView} from "./aside/OptionsView";
import {SearchContext} from '../../contexts/search.context';


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