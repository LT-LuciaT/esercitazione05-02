import { Card, Col, Badge, Button } from "react-bootstrap";

const SingleBook = (props) => (
  <Col onClick={() => console.log(props.book)}>
    <Card>
      <Card.Img variant="top" src={props.book.img} />
      <Card.Body>
        <Card.Title>{props.book.title}</Card.Title>
        <Card.Text>{props.book.category}</Card.Text>
        <Card.Text>
          <Badge bg="info"> {props.book.price}</Badge>
        </Card.Text>
        <Button variant="primary">Aggiungi al carello</Button>
      </Card.Body>
    </Card>
  </Col>
);
export default SingleBook;
