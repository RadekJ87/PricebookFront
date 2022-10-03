import {createContext} from "react";

export const OfferContext = createContext({
    searchOffer: '',
    setSearchOffer: (s : string) => {},
});