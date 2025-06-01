import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CardNumberInput from '../cardregistration/CardNumberInput';
import ExpiryDateInput from '../cardregistration/ExpiryDateInput';
import OwnerNameInput from '../cardregistration/OwnerNameInput';
import CVCInput from '../cardregistration/CVCInput';
import CardPasswordInput from '../cardregistration/CardPasswordInput';
import { useCardContext } from '../../context/CardContext';

function AddCardModal({ show, handleClose, handleSuccess }) {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [cvc, setCvc] = useState('');
  const [cardPassword, setCardPassword] = useState('');

  const { addCard } = useCardContext();

  const isFormComplete =
    cardNumber.length === 16 &&
    expiryMonth.length === 2 &&
    expiryYear.length === 2 &&
    ownerName.trim().length > 0 &&
    cvc.length === 3 &&
    cardPassword.length === 2;

  const handleSubmit = () => {
    if (!isFormComplete) return;

    addCard({
      cardNumber,
      expiry: `${expiryMonth}/${expiryYear}`,
      ownerName,
      cvc,
      cardPassword,
    });

    handleSuccess();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>카드 추가</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="cardImage rounded mx-auto mb-4">
          <div className='chip rounded'></div>
          <div className='cardInfo d-flex justify-content-between'>
            <p>NAME</p>
            <p>MM/YY</p>
          </div>
        </div>
        <Form>
          <CardNumberInput value={cardNumber} onChange={setCardNumber} />
          <ExpiryDateInput 
            expiryMonth={expiryMonth}
            expiryYear={expiryYear}
            onMonthChange={setExpiryMonth}
            onYearChange={setExpiryYear}
          />
          <OwnerNameInput ownerName={ownerName} onChange={setOwnerName} />
          <CVCInput cvc={cvc} onChange={setCvc} />
          <CardPasswordInput cardPassword={cardPassword} onChange={setCardPassword} />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          취소
        </Button>
        <Button 
          variant="dark" 
          onClick={handleSubmit} 
          disabled={!isFormComplete}
        >
          작성 완료
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddCardModal;