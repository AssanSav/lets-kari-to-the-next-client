import React from 'react';
import { BrowserRouter as Router} from "react-router-dom"
import './styleSheet/app.css';
import Routes from './components/Routes';
import SessionStatus from './containers/SessionStatus';
import { Navbar, Container } from "react-bootstrap"


function App() {  
  return (
    <>
      <Router>
        <div className="wraper">
          <div className="main"> 
            < Routes /> 
          </div>
        </div> 
        <SessionStatus />
      </Router>
      <Navbar className="fixed-bottom">
          <Container  >
            <Navbar.Brand href="mailto:assane.savadogo81@.com/">
              © 2020 Copyright: <span style={{ fontStyle: "italic", color: "red" }}>Assane</span>
            </Navbar.Brand>
          </Container>
      </Navbar>
    </>
  );
}

export default App;
