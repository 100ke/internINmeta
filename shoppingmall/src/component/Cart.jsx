import { IoArrowBack } from "react-icons/io5";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { cartItemsState } from "../recoil/cart";
import { cartCountState } from '../recoil/cart';
import { useCallback, useMemo, useState } from "react";
import CardListModal from "./paymodal/CardListModal";
import AddCardModal from "./paymodal/AddCardModal";
import CartPayButton from "./CartPayButton";

function Cart() {
    const navigate = useNavigate();
    const cartItems = useRecoilValue(cartItemsState);
    const cartCount = useRecoilValue(cartCountState);
    // 결제 모듈 모달 관리
    const [showCardListModal, setShowCardListModal] = useState(false);
    const [showAddCardModal, setShowAddCardModal] = useState(false);

    const totalPrice = useMemo(()=>{
        return cartItems.reduce(
            (acc, item)=>acc+item.price*item.quantity
            , 0);
    }, [cartItems]);
    const deliveryFee = useMemo(()=>{
        // cartItems.length === 0 ? 0 : (totalPrice >= 100000 ? 0 : 3000);
        if (cartItems.length === 0) return 0;
        return totalPrice >= 100000 ? 0 : 3000;
    }, [cartItems, totalPrice]);
    
    const handlePaymentClick = useCallback(() => {
        if (cartItems.length === 0) {
            alert("장바구니가 비어 있습니다.");
            return;
        }
        setShowCardListModal(true);
    }, [cartItems]);

    return (
        <>
            <div className="cart-header">
                <button onClick={()=>navigate(-1)}>
                    <IoArrowBack />
                </button>
            </div>
            <div className="cart-container">
                <h1>장바구니</h1>
                <p>현재 {cartCount}개의 상품이 담겨있습니다.</p>
                {
                    cartItems.map(item=>(
                        <CartItem key={item.id} item={item}/>
                    ))
                }
                <div className="price-area">
                    <div className="items-price">
                        <p>상품 금액</p>
                        <span>{totalPrice.toLocaleString()}원</span>
                    </div>
                    <div className="delivery-fee">
                        <p>배송비</p>
                        <span>{deliveryFee.toLocaleString()}원</span>
                    </div>
                    <p className="text-muted">※ 100,000원 이상 구매 시 배송비 무료</p>
                </div>
                <div className="total-price">
                    <p>총 금액</p>
                    <span>{(totalPrice + deliveryFee).toLocaleString()}원</span>
                </div>
                <CartPayButton onClick={handlePaymentClick} />
                {/* <button type="button" onClick={handlePaymentClick}>결제하기</button> */}
            </div>

            <CardListModal show={showCardListModal} handleClose={()=>setShowCardListModal(false)}
                onRequestAddCard={()=>setShowAddCardModal(true)}
            />
            <AddCardModal show={showAddCardModal} handleClose={()=>setShowAddCardModal(false)}
                handleSuccess={()=>{
                    setShowAddCardModal(false);
                    setShowCardListModal(true); // 카드 등록 완료 후 카드 목록 모달을 다시 보여줌
                }}
            />
        </>
    )
}

export default Cart;