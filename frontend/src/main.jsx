import {StrictMode} from "react";
import {createRoot} from "react-dom/client";

import FinancialDataForm from "./components/FinancialDataForm.jsx";
import Navbar from "./components/Navbar.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Navbar/>
        <FinancialDataForm/>
    </StrictMode>,
);
