import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';

function Product_card({product, setCartCount}) {
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    if (!isAdded) {
      setIsAdded(true);
      setCartCount(prev => prev + 1);
    } else {
      setIsAdded(false);
      setCartCount(prev => prev - 1);
    }
  };

  return (
    <Card className='card w-100' style={{ maxWidth: '18rem' }}>
      <Card.Img variant="top" src="https://100ke.github.io/internINmeta/images/running_shoe_03.jpg" />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">편안하고 착용감이 좋은 신발</Card.Subtitle>
        <Card.Text>
          {product.price.toLocaleString()}원
        </Card.Text>
        <Button 
          variant={isAdded ? 'secondary' : 'dark'} 
          className='rounded-pill add-btn'
          onClick={handleClick}
        >
          {isAdded?'담김!':'담기'}
        </Button>
        <Button variant="warning" className='rounded-pill add-btn'>구매</Button>
      </Card.Body>
    </Card>
  )

}

export default Product_card;