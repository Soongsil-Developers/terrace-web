import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import LoginPage from "./LoginPage";
import "./main.css";
import MainPage from "./MainPage";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="MainPage" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
