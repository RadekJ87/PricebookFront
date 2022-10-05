import {Route, Routes} from "react-router-dom";
import React from "react";
import {ChangePrices} from "./ChangePrices/ChangePrices";
import {ShowOfferDetails} from "./ShowOfferDetails/ShowOfferDetails";
import {AddNewProduct} from "./AddNewProduct/AddNewProduct";
import { EditProduct } from "./EditProduct/EditProduct";

export const OptionsView = () => {
    return (
        <Routes>
            <Route path="/change-prices" element={<ChangePrices/>}/>
            <Route path="/show-offer" element={<ShowOfferDetails/>}/>
            <Route path="/add-new-product" element={<AddNewProduct/>}/>
            <Route path="/edit-product" element={<EditProduct/>}/>
        </Routes>
    )
};