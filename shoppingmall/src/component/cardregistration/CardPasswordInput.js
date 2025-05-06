import React from 'react';
import Form from 'react-bootstrap/Form';

const onlyNumbers = (value) => value.replace(/[^0-9]/g, '');

const CardPasswordInput = ({ cardPassword, onChange }) => {
    const handleFirstDigitChange = (e) => {
        const value = onlyNumbers(e.target.value).slice(0, 1);
        onChange(value + (cardPassword[1] || ''));
    };

    const handleSecondDigitChange = (e) => {
        const value = onlyNumbers(e.target.value).slice(0, 1);
        onChange((cardPassword[0] || '') + value);
    }

    return (
        <Form.Group className="mb-3" controlId="cardPassword">
            <Form.Label>카드 비밀번호</Form.Label>
            <div className="d-flex gap-2">
                <Form.Control
                    type="password"
                    maxLength={1}
                    value={cardPassword[0] || ''}
                    onChange={handleFirstDigitChange}
                    className="text-center password-box"
                />
                <Form.Control
                    type="password"
                    maxLength={1}
                    value={cardPassword[1] || ''}
                    onChange={handleSecondDigitChange}
                    className="text-center password-box"
                />
                <div className="d-flex gap-2 ms-2 text-muted fs-4">
                    <span>●</span>
                    <span>●</span>
                </div>
            </div>
        </Form.Group>
    );
};

export default CardPasswordInput;