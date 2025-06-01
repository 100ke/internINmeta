import Modal from 'react-bootstrap/Modal';
import { useCardContext } from "../../context/CardContext";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

function CardListModal({show, handleClose, onRequestAddCard}) {
    const { cards } = useCardContext();
    const navigate = useNavigate();

    const handleAddCardClick = () => {
        handleClose();
        // navigate('/internINmeta/addcard');
        // setShowAddCardModal(true);
        onRequestAddCard();
    };

    const handlePayClick = () => {
        handleClose();
        navigate('/internINmeta/paycomplete')
    }

    return (
        <>
        <Modal show={show} onHide={handleClose} centered size='md'>
            <Modal.Header closeButton>
                <Modal.Title>보유카드</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {(!cards || cards.length === 0) && (
                    <>
                        <p>새로운 카드를 등록해주세요.</p>
                    </>
                )}
                { cards && cards.length > 0 && (
                    <>
                        {cards.map((card, idx)=>(
                            <div key={idx}>
                                <div className="cardImage rounded mx-auto mb-4">
                                    <div className='chip rounded'></div>
                                    <div className='cardInfo d-flex justify-content-between'>
                                        <p>{card.ownerName}</p>
                                        <p>{card.expiry}</p>
                                    </div>
                                </div>
                                <button className="select-card" onClick={handlePayClick}>이 카드로 결제하기</button>
                            </div>
                        ))}
                    </>
                )}
                <div className="rounded addcard mx-auto"
                    onClick={handleAddCardClick}
                >
                    <FaPlus />
                </div>
            </Modal.Body>
        </Modal>
        </>
    )
}

export default CardListModal;