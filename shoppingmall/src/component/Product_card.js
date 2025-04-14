import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Product_card() {
    return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/running_shoe_03.jpg" />
      <Card.Body>
        <Card.Title>브랜드 A</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">편안하고 착용감이 좋은 신발</Card.Subtitle>
        <Card.Text>
          35,000원
        </Card.Text>
        <Button variant="dark" className='rounded-pill'>담기</Button>
      </Card.Body>
    </Card>
    )

}

export default Product_card;