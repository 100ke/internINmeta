import CardNumberInput from "./CardNumberInput";
import React, { useState } from "react";

export default {
    title: 'Components/CardNumberInput', // Storybook 내에 보일 이름
    component: CardNumberInput,
};

export const Default = () => {
    const [cardNumber, setCardNumber] = useState('');

    return (
        <CardNumberInput
            value={cardNumber}
            onChange={setCardNumber}
        />
    );
};