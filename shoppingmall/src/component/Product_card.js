import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';

function Product_card({setCartCount}) {
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    // if (!isAdded) {
    //   setIsAdded(true);
    //   setCartCount(prev => prev + 1);
    // } else {
    //   setIsAdded(false);
    //   setCartCount(prev => prev - 1);
    // }

    // 비동기 처리 흉내
    if (!isAdded) {
      setIsAdded(true);
      setTimeout(()=>{
        setCartCount(prev => prev + 1);
      },500);
    } else {
      setIsAdded(false);
      setTimeout(()=>{
        setCartCount(prev => prev + 1);
      },500);
    }
  };

  return (
    <Card className='card w-100' style={{ maxWidth: '18rem' }}>
      <Card.Img variant="top" src="/images/running_shoe_03.jpg" />
      <Card.Body>
        <Card.Title>브랜드 A</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">편안하고 착용감이 좋은 신발</Card.Subtitle>
        <Card.Text>
          35,000원
        </Card.Text>
        <Button 
          variant={isAdded ? 'secondary' : 'dark'} 
          className='rounded-pill add-btn'
          onClick={handleClick}
        >
          {isAdded?'담김!':'담기'}
        </Button>
      </Card.Body>
    </Card>
  )

}

export default Product_card;