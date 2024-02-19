import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Accounts from "./pages/Accounts";
import Cards from "./pages/Cards";
import Loans from "./pages/Loans";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainLayout from "./layouts/MainLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <MainLayout>
            <Routes>
              <Route path="/accounts" element={<Accounts />} />
              <Route path="/cards" element={<Cards />} />
              {/* <Route path="/Transactions" element={<Transactions />} /> */}
              <Route path="/loans" element={<Loans />} />
              {/* <Route path="" element={<Error404 />} /> */}
            </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
