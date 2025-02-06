import "./App.css";
import BookList from "./components/BookList";
import Footer from "./components/Footer";
import MyNav from "./components/myNav";
import Welcome from "./components/Welcome";

import fantasy from "./books/fantasy.json";
import history from "./books/history.json";
import horror from "./books/horror.json";
import romance from "./books/romance.json";
import scifi from "./books/scifi.json";

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      {/* <div className="d-flex gap-1">
          <Button variant="primary" onClick={() => this.setState({ books: fantasy })}>
            {" "}
            fantasy
          </Button>
          <Button variant="info" onClick={() => this.setState({ books: horror })}>
            {" "}
            horror
          </Button>
          <Button variant="warning" onClick={() => this.setState({ books: history })}>
            {" "}
            history
          </Button>
          <Button variant="danger" onClick={() => this.setState({ books: romance })}>
            {" "}
            romance
          </Button>
          <Button variant="succes" onClick={() => this.setState({ books: scifi })}>
            {" "}
            scifi
          </Button>
        </div>*/}
      <BookList books={fantasy} />
      <Footer />
    </>
  );
}

export default App;
