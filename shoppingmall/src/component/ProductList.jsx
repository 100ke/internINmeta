import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { productListState } from "../recoil/products";
import ProductCard from "./ProductCard";
import { Col, Row } from "react-bootstrap";

const ProductList = ({ setCartCount }) => {
    const [products, setProducts] = useRecoilState(productListState);

    useEffect(()=>{
        const tempProducts = [
            { id: 1, name: '런닝화 blue', brand: '브랜드A', price: 65900, image: 'https://100ke.github.io/internINmeta/images/running_shoe_01.jpg' },
            { id: 2, name: '런닝화 pink', brand: '브랜드A', price: 65900, image: 'https://100ke.github.io/internINmeta/images/running_shoe_02.jpg' },
            { id: 3, name: 'High-Neck shoes', brand: '브랜드N', price: 119000, image: 'https://100ke.github.io/internINmeta/images/running_shoe_03.jpg' },
            { id: 4, name: '운동화 brown', brand: '브랜드N', price: 99000, image: 'https://100ke.github.io/internINmeta/images/running_shoe_04.jpg' },
            { id: 5, name: 'white shoes', brand: '브랜드C', price: 89000, image: 'https://100ke.github.io/internINmeta/images/running_shoe_05.jpg' },
            { id: 6, name: 'white running shoes', brand: '브랜드D', price: 59000, image: 'https://100ke.github.io/internINmeta/images/running_shoe_06.jpg' },
            { id: 7, name: '나이키 러닝화 blue', brand: '브랜드N', price: 49000, image: 'https://100ke.github.io/internINmeta/images/running_shoe_07.jpg' },
            { id: 8, name: '편안한 가죽 신발', brand: '브랜드E', price: 35000, image: 'https://100ke.github.io/internINmeta/images/running_shoe_08.jpg' },
        ];
        setProducts(tempProducts);
    }, [setProducts]);

    return (
        <Row>
            {products.map((product)=>(
                <Col xs={6} md={6} lg={4} key={product.id}>
                    <ProductCard product={product} setCartCount={setCartCount} />
                </Col>
            ))}
        </Row>
    )
}

export default ProductList;