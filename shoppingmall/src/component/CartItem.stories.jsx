import { RecoilRoot } from "recoil";
import CartItem from "./CartItem";

export default {
    title: "Components/CartItem",
    component: CartItem,
    decorators: [
        (Story) => (
            <RecoilRoot>
                <Story/>
            </RecoilRoot>
        ),
    ],
};

const mockItem = {
    id: 1,
    name: "샘플 상품",
    brand: "샘플 브랜드",
    price: 12000,
    quantity: 3,
    image: "https://via.placeholder.com/100", // 대체 이미지
};

const Template = (args) => <CartItem {...args}/>

export const Default = Template.bind({});
Default.args = {
    item: mockItem,
};