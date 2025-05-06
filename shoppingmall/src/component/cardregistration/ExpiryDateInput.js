import React from 'react';
import Form from 'react-bootstrap/Form';

const onlyNumbers = (value) => value.replace(/[^0-9]/g, '');

const ExpiryDateInput = ({ expiryMonth, expiryYear, onMonthChange, onYearChange }) => {
    return (
        <Form.Group className="mb-3" controlId="expiry">
            <Form.Label>만료일</Form.Label>
            <div className="d-flex gap-2">
                <Form.Control
                    type="text"
                    value={expiryMonth}
                    onChange={(e) => onMonthChange(onlyNumbers(e.target.value).slice(0, 2))}
                    maxLength={2}
                    placeholder="MM"
                />
                <Form.Control
                    type="text"
                    value={expiryYear}
                    onChange={(e) => onYearChange(onlyNumbers(e.target.value).slice(0, 2))}
                    maxLength={2}
                    placeholder="YY"
                />
            </div>
        </Form.Group>
    );
};

export default ExpiryDateInput;