import React from "react";
import { useTranslation } from "react-i18next";

import logo from "./logo.svg";
import "./App.css";

function App() {
    const { t } = useTranslation();
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    {t("Welcome to React")}<br />
                    {t("Please help translate")}
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
