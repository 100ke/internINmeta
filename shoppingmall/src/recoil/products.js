import { atom, selector } from 'recoil';

export const productListState = atom({
    key: 'productListState',
    default: [],
});

export const productCountState = selector({
    key: 'productCountState',
    get: ({get}) => {
        const list = get(productListState);
        return list.length;
    }
});