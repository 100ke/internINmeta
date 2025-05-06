import React from 'react';
import Form from 'react-bootstrap/Form';

const onlyNumbers = (value) => value.replace(/[^0-9]/g, '');

const CVCInput = ({ cvc, onChange }) => {
    return (
        <Form.Group className="mb-3" controlId="cvc">
            <Form.Label>보안 코드 (CVC/CVV)</Form.Label>
            <Form.Control 
                type="password"
                value={cvc}
                onChange={(e) => onChange(onlyNumbers(e.target.value).slice(0, 3))}
                maxLength={3}
                placeholder="***"
            />
        </Form.Group>
    );
};

export default CVCInput;