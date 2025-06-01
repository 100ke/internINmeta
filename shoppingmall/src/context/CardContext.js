import { createContext, useState, useContext, useEffect } from "react";

const CardContext = createContext();

export const useCardContext = () => useContext(CardContext);

export const CardProvider = ({children}) => {
    const [cards, setCards] = useState(() => {
        const storedCards = localStorage.getItem('cards');
        return storedCards ? JSON.parse(storedCards) : [];
    });

    useEffect(()=>{
        localStorage.setItem('cards', JSON.stringify(cards));
    }, [cards]);

    const addCard = (newCard) => {
        setCards((prev)=>[...prev, newCard])
    };

    return (
        <CardContext.Provider value={{cards, addCard}}>
            {children}
        </CardContext.Provider>
    );
}