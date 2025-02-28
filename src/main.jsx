import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import AdviceComponent from "./Components/AdviceComponent.jsx";
import ButtonComponent from "./Components/ButtonComponent.jsx";
import LoadingComponent from "./Components/LoadingComponent.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdviceComponent />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
