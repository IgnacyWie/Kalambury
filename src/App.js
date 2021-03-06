import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import Header from "./components/Header";
import { list } from "./data/words";
import AdSense from "react-adsense";

export var selected;

function App() {
  const [current, setCurrent] = useState([]);

  const handleClick = () => {
    selected = list[Math.floor(Math.random() * list.length)];
    setCurrent(
      selected.toLowerCase().charAt(0).toUpperCase() +
        selected.toLowerCase().slice(1)
    );
  };

  return (
    <Container
      className="d-flex flex-column align-center align-items-center justify-content-center"
      style={{
        minWidth: "100vw",
        minHeight: "100vh",
        backgroundColor: "black",
      }}
    >
      <AdSense.Google client="ca-pub-3327194393186354" slot="7806394673" />
      <Header />
      <h2
        className="text-center w-100"
        style={{ fontSize: 60, color: "white", padding: 50 }}
      >
        {current}
      </h2>
      <Button
        onClick={handleClick}
        style={{ height: "50px", maxWidth: "350px" }}
      >
        Generuj Słowo
      </Button>
    </Container>
  );
}

export default App;
