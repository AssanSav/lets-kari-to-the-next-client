import React from 'react';
import { BrowserRouter as Router} from "react-router-dom"
import './styleSheet/app.css';
import Routes from './components/Routes';
import SessionStatus from './containers/SessionStatus';

function App() {
    
    return (
        <Router>
            <>
            <SessionStatus />
                <div className="wraper">
                    <div className="main"> 
                        <Routes /> 
                    </div>
                </div> 
            </>
        </Router>
        
    );
}

export default App;
