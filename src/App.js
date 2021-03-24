import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container } from 'react-bootstrap';
import Header from './components/Header';
import { list } from './data/words'

var selected;

function App() {
  const [current, setCurrent] = useState([])

  const handleClick = (e) => {
    selected = list[Math.floor(Math.random() * list.length)];
    setCurrent(selected);
    console.log(current);
  }

  return (
    <Container className='d-flex flex-column justify-content-center text-align-center p-0 m-0' style={{minWidth: "100vw", minHeight: "100vh", backgroundColor: "black"}}>
      <Header/>
      <h2 className="text-center" style={{fontSize: 60}}>{selected}</h2>
      <Button onClick={handleClick} style={{height: "50px", marginLeft: 600, marginRight: 600}}>Generate random word</Button>
    </Container>
  );
}

export default App;