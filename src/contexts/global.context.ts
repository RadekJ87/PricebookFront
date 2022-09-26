import {createContext} from "react";

export const GlobalContext = createContext({
    randomNumber: 0,
    setRandomNumber: (n : number) => {},
});