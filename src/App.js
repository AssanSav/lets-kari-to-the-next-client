import React from 'react';
import { BrowserRouter as Router} from "react-router-dom"
import './styleSheet/app.css';
import Routes from './components/Routes';
import SessionStatus from './containers/SessionStatus';

function App() {
    
    return (
        <Router>
            <div className="App">
                <SessionStatus />
                <Routes />
            </div>
        </Router>
        
    );
}

export default App;
