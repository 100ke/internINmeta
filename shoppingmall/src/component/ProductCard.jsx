import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useRecoilState } from 'recoil';
import { cartItemsState } from '../recoil/cart';
import { useNavigate } from 'react-router-dom';

function ProductCard({product, setCartCount}) {
  const [isAdded, setIsAdded] = useState(false);
  const [cartItems, setCartItems] = useRecoilState(cartItemsState);
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation();

    if (!isAdded) {
      // setIsAdded(true);
      setCartItems([...cartItems, {...product, quantity:1}]);
      setCartCount(prev => prev + 1);
    } else {
      // setIsAdded(false);
      setCartItems(cartItems.filter(item=>item.id !== product.id));
      setCartCount(prev => prev - 1);
    }
    setIsAdded(!isAdded);
  };

  const goToDetail = () => {
    navigate(`/internINmeta/product/${product.id}`);
  };

  return (
    <Card className='card w-100' style={{ maxWidth: '18rem' }} onClick={goToDetail}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.brand}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{product.name}</Card.Subtitle>
        <Card.Text>
          {product.price.toLocaleString()}원
        </Card.Text>
        <Button 
          variant={isAdded ? 'secondary' : 'dark'} 
          className='rounded-pill add-btn'
          onClick={(e)=>{
            e.stopPropagation();
            handleAddToCart(e);
          }}
        >
          {isAdded?'담김!':'담기'}
        </Button>
        <Button variant="warning" className='rounded-pill add-btn'>구매</Button>
      </Card.Body>
    </Card>
  )

}

export default ProductCard;