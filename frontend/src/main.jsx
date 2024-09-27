import {StrictMode} from "react";
import {createRoot} from "react-dom/client";

import './style/index.css'

import FinancialDataForm from "./components/FinancialDataForm.jsx";
import Navbar from "./components/Navbar.jsx";
import {ResultsWidget} from "./components/ResultsWidget.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Navbar/>
        <FinancialDataForm/>
        <ResultsWidget/>
    </StrictMode>,
);
