import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./styleSheet/app.css";
import Routes from "./components/Routes";
import SessionStatus from "./containers/SessionStatus";

function App() {
  return (
    <>
      <Router>
        <SessionStatus />
        <div className="wraper">
          <div className="main">
            <Routes />
          </div>
        </div>
      </Router>
      <div className="footer">
        © 2020 Copyright:{" "}
        <a
          href="mailto:assane.savadogo81@gmail.com/"
          style={{ fontStyle: "italic", color: "red" }}
        >
          Assane
        </a>
      </div>
    </>
  );
}

export default App;
