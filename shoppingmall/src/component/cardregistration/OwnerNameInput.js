import React from 'react';
import Form from 'react-bootstrap/Form';

const OwnerNameInput = ({ ownerName, onChange }) => {
  return (
    <Form.Group className="mb-3" controlId="ownerName">
      <Form.Label>소유자명</Form.Label>
      <Form.Control
        type="text"
        value={ownerName}
        onChange={(e) => onChange(e.target.value)}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
      />
    </Form.Group>
  );
};

export default OwnerNameInput;