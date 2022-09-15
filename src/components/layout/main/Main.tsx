import React, {useState} from 'react';
import './Main.css';
import {ProductsList} from "../../products/ProductsList";
import {OptionsList} from "../main-aside/OptionsList";
import {PricebookOptions} from "../../PricebookOptions/PricebookOptions";
import {OptionsView} from "../main-aside/OptionsView";
import {SearchContext} from '../../contexts/search.context';


export const Main = () => {
    // const [search, setSearch] = useState('');

    return (
        <div className="pricebook-container">
            <main className="pricebook-table-container">
                {/*<SearchContext.Provider value={{search, setSearch}}>*/}
                    <ProductsList/>
                {/*</SearchContext.Provider>*/}
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