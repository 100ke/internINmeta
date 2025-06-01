import React from 'react';
import Form from 'react-bootstrap/Form';

function CardNumberInput({ value, onChange }) {
    const handleInputChange = (e) => {
        const rawValue = e.target.value.replace(/[^0-9]/g, '');
        onChange(rawValue.slice(0,16));
    };

    const formatForDisplay = (number) => {
        const formatted = number.replace(/\D/g, '').slice(0, 16);
        return formatted.replace(/(\d{4})(?=\d)/g, '$1-');
    }

    return(
        <Form.Group className="mb-3" controlId="cardNumber">
            <Form.Label>카드 번호</Form.Label>
            <Form.Control
                type="text"
                inputMode="numeric"
                maxLength={19} // 16자리까지 입력 받기
                value={formatForDisplay(value)} // 입력된 카드 번호 그대로 표시
                onChange={handleInputChange} // 숫자만 입력 받도록 처리
                onFocus={(e) => e.target.setSelectionRange(19, 19)}
            />
        </Form.Group>
    );
}

export default CardNumberInput;