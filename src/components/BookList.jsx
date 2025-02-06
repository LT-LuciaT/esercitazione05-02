import { Alert, Container, Row } from "react-bootstrap";

import SingleBook from "./SingleBook";

const BookList = (props) => {
  //state = {
  ////books: history,
  //};

  return (
    <Container>
      <Row xs={1} s={2} md={4} xl={5} xxl={6}>
        {props.books.map((books) => (
          <SingleBook key={books.asin} book={books} />
        ))}
      </Row>

      {props.books.lenght === 0 && (
        <Alert variant="warning" className="mt-4">
          Premi un Bottone per vedere i libri!{" "}
        </Alert>
      )}
    </Container>
  );
};
export default BookList;
