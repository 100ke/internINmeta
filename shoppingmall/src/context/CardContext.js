import { createContext, useState, useContext } from "react";

const CardContext = createContext();

export const useCardContext = () => useContext(CardContext);

export const CardProvider = ({children}) => {
    const [card, setCard] = useState(null);

    return (
        <CardContext.Provider value={{card, setCard}}>
            {children}
        </CardContext.Provider>
    );
}