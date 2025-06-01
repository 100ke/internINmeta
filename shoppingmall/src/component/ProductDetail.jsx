import { Container } from "react-bootstrap";
import Header from "./Header";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { productListState } from "../recoil/products";
import { cartItemsState  } from "../recoil/cart";
import { useState } from "react";

function ProductDetail() {
    const {id} = useParams();
    const products = useRecoilValue(productListState);
    const setCartItems = useSetRecoilState(cartItemsState);
    const [quantity, setQuantity] = useState(1);

    const product = products.find(p=>p.id===Number(id));

    if (!product) {
        return <p>해당 상품을 찾을 수 없습니다.</p>
    }
    const related = products.filter(p => p.brand === product.brand && p.id !== product.id);

    const handleAddToCart = () => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
                );
            }
            return [...prev, { ...product, quantity }];
        });
    };

    return (
        <>
        <Header/>
        <Container className="detail-page">
            <img src={product.image} alt={product.name} />
            <div className="datail-area">
                <div className="text">
                    <h1>{product.brand}</h1>
                    <p>{product.name}</p>
                    <p>{product.price.toLocaleString()}원</p>
                </div>
                <div className="btn-area">
                    <FaCircleMinus className="up-down" onClick={() => setQuantity(q => Math.max(1, q - 1))}/>
                    <span>{quantity}</span>
                    <FaCirclePlus className="up-down" onClick={() => setQuantity(q => q + 1)} />
                </div>
            </div>
            <button type="button" className="cartbtn-in-detail" onClick={handleAddToCart}>장바구니 담기</button>
            <h3>관련 상품</h3>
            <p>{product.brand}의 다른 신발은 어떠신가요?</p>
            <div className="relatedlist">
                {related.map(rp => (
                    <img key={rp.id} src={rp.image} alt={rp.name} style={{ width: "150px", marginRight: "10px" }} />
                ))}
            </div>
        </Container>
        </>
    )
}

export default ProductDetail;