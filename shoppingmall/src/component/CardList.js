import CloseButton from 'react-bootstrap/CloseButton';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FaPlus } from "react-icons/fa6";
import React, { useState } from 'react';
import {useCardContext} from '../context/CardContext'

function CardList() {
    const { cards } = useCardContext();

    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>보유카드</Navbar.Brand>
                <CloseButton/>
            </Container>
        </Navbar>
        <Container className='pt-5 text-center'>
            {!cards || cards.length === 0 ? (
                <>
                    <p>새로운 카드를 등록해주세요.</p>
                    <div className="rounded addcard mx-auto">
                        <FaPlus />
                    </div>
                </>
            ):(
                <>
                    {cards.map((card, idx)=>(
                        <div key={idx} className="cardImage rounded mx-auto mb-4">
                            <div className='chip rounded'></div>
                            <div className='cardInfo d-flex justify-content-between'>
                                <p>{card.ownerName}</p>
                                <p>{card.expiry}</p>
                            </div>
                            <button className="btn btn-outline-dark mt-2">이 카드로 결제하기</button>
                        </div>
                    ))}
                </>
            )}
        </Container>
    </>
    );

}

export default CardList;