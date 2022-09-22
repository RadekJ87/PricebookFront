import {Route, Routes} from "react-router-dom";
import React from "react";
import {ChangePrices} from "./ChangePrices/ChangePrices";
import {ShowOfferDetails} from "./ShowOfferDetails";
import {AddNewProduct} from "./AddNewProduct/AddNewProduct";

export const OptionsView = () => {
    return (
        <Routes>
            <Route path="/change-prices" element={<ChangePrices/>}/>
            <Route path="/show-offer" element={<ShowOfferDetails/>}/>
            <Route path="/add-new-product" element={<AddNewProduct/>}/>
        </Routes>
    )
};