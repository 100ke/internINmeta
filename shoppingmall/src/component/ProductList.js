import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { productListState } from "../recoil/products";
import Product_card from "./Product_card";
import { Col, Row } from "react-bootstrap";

const ProductList = ({ setCartCount }) => {
    const [products, setProducts] = useRecoilState(productListState);

    useEffect(()=>{
        const tempProducts = [
            { id: 1, name: 'nike', price: 15900 },
            { id: 2, name: 'adidas', price: 14900 },
            { id: 3, name: 'newbalance', price: 11900 }
        ];
        setProducts(tempProducts);
    }, [setProducts]);

    return (
        <Row>
            {products.map((product)=>(
                <Col xs={6} md={6} lg={4} key={product.id}>
                    <Product_card product={product} setCartCount={setCartCount} />
                </Col>
            ))}
        </Row>
    )
}

export default ProductList;