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
                        <footer>
                            <div className="footer-copyright text-center py-3" style={{ color: "black" }}>© 2020 Copyright:
                            <a href="mailto:assane.savadogo81@.com/" style={{ fontStyle: "italic" }}> Assane</a>
                            </div>
                        </footer>
                    </div>
                </div> 
            </>
        </Router>
        
    );
}

export default App;
