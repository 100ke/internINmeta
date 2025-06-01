import { useState } from "react";
import { useRecoilValue } from "recoil";
import { productCountState } from "../recoil/products";
import Header from "./Header";
import { Container } from "react-bootstrap";
import ProductList from "./ProductList";

function MainPage() {
    const [cartCount, setCartCount] = useState(0);
    const productCount = useRecoilValue(productCountState);

    return (
        <>
            <Header cartCount={cartCount}/>
            <div className="list">
                <Container>
                    <h2>신발 상품 목록</h2>
                    <span>현재 {productCount}개의 상품이 있습니다.</span>
                    <ProductList setCartCount={setCartCount}/>
                </Container>
            </div>
        </>
    )
    
}

export default MainPage;