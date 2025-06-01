import { atom, selector } from "recoil";

export const cartItemsState = atom({
    key: 'cartItemsState',
    default: [],
});

export const cartCountState = selector({
    key: 'cartCountState',
    get: ({get}) => {
        const items = get(cartItemsState);
        return items.reduce((sum, item)=>sum+item.quantity, 0);
    }
});