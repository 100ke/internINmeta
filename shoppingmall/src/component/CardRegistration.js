import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useCardContext} from '../context/CardContext'
import CloseButton from 'react-bootstrap/CloseButton';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { IoIosArrowBack } from "react-icons/io";
import CardNumberInput from './cardregistration/CardNumberInput';
import ExpiryDateInput from './cardregistration/ExpiryDateInput';
import OwnerNameInput from './cardregistration/OwnerNameInput';
import CVCInput from './cardregistration/CVCInput';
import CardPasswordInput from './cardregistration/CardPasswordInput';

function CardRegistration() {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryMonth, setExpiryMonth] = useState('');
    const [expiryYear, setExpiryYear] = useState('');
    const [ownerName, setOwnerName] = useState('');
    const [cvc, setCvc] = useState('');
    const [cardPassword, setCardPassword] = useState('');

    // 추가
    const {addCard} = useCardContext();
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!isFormComplete) return;

        addCard({
            cardNumber,
            expiry: `${expiryMonth}/${expiryYear}`,
            ownerName,
            cvc,
            cardPassword,
        });

        navigate('/cardlist')
    }

    const isFormComplete =
        cardNumber.length === 16 &&
        expiryMonth.length === 2 &&
        expiryYear.length === 2 &&
        ownerName.trim().length > 0 &&
        cvc.length === 3 &&
        cardPassword.length === 2;

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <div className='bundle'>
            <IoIosArrowBack className='back-btn'/>
            <Navbar.Brand>카드 추가</Navbar.Brand>
        </div>
          <CloseButton/>
      </Container>
    </Navbar>
    <Container className='pt-5'>
        <div className="cardImage rounded mx-auto">
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
            <OwnerNameInput ownerName={ownerName} onChange={setOwnerName}/>
            <CVCInput cvc={cvc} onChange={setCvc}/>
            <CardPasswordInput cardPassword={cardPassword} onChange={setCardPassword}/>

            {isFormComplete && (
                <div className="text-center mt-4">
                    <button 
                        className="btn btn-dark card-reg-btn rounded-pill"
                        onClick={handleSubmit}
                    >작성 완료</button>
                </div>
            )}
        </Form>
    </Container>
    
    </>
  )

}

export default CardRegistration;