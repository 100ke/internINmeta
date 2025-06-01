import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { useRecoilState } from "recoil";
import { cartItemsState } from "../recoil/cart";
import { useCallback, useMemo } from "react";

function CartItem({item}) {
     const [cartItems, setCartItems] = useRecoilState(cartItemsState);

     const updateQuantity = useCallback((num) => {
        const newQuantity = item.quantity + num;

        // 수량이 0이 되려는 경우에 삭제 여부 확인
        if (newQuantity === 0) {
            const confirmDelete = window.confirm("해당 상품을 장바구니에서 삭제하시겠습니까?");
            if (!confirmDelete) {
                return;
            }
        }
        
        const updatedCart = cartItems.map(cartItem =>
            cartItem.id === item.id
            ? {...cartItem, quantity: newQuantity}
            : cartItem
        ).filter(cartItem=>cartItem.quantity>0);
        setCartItems(updatedCart);
    }, [item, cartItems, setCartItems]);

    const totalPrice = useMemo(()=>{
        return item.price * item.quantity;
    }, [item.price, item.quantity]);
    
    return (
        <div className="cart-item">
            <img src={item.image} alt={`${item.name} 사진`} />
            <div className="item-content">
                <p className="brand-name">{item.brand}</p>
                <h3 className="price">{totalPrice.toLocaleString()}원</h3>
                <div className="btn-area">
                    <FaCircleMinus className="up-down" onClick={()=>updateQuantity(-1)}/>
                    <span>{item.quantity}</span>
                    <FaCirclePlus className="up-down" onClick={()=>updateQuantity(1)}/>
                </div>
            </div>
        </div>
    )
}

export default CartItem;