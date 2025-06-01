import { useRecoilValue, useResetRecoilState } from "recoil";
import { cartItemsState } from "../recoil/cart";
import { useNavigate } from "react-router-dom";

function PayComplete() {
    const cartItems = useRecoilValue(cartItemsState);
    const resetCart = useResetRecoilState(cartItemsState);
    const navigate = useNavigate();

    const totalCount = cartItems.reduce((sum, item)=>sum+item.quantity, 0);
    const totalPrice = cartItems.reduce((sum, item)=>sum + item.price * item.quantity, 0);

    const handleBackToList = () => {
        resetCart();
        navigate('/internINmeta')
    }
    return (
        <>
        <div className="cart-header"></div>
        <div className="complete-page">
            <h1>결제 완료!</h1>
            <p>총 {totalCount}개의 상품을 구매하셨습니다.</p>
            <p>총 결제 금액</p>
            <h2>{totalPrice.toLocaleString()}원</h2>
            <button className="select-card" onClick={handleBackToList}>상품 목록 보기</button>
        </div>
        </>
    )
}

export default PayComplete;