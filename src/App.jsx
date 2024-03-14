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
import NewCard from "./pages/NewCard";
import {Routes, Route } from "react-router-dom";
import NewLoans from "./pages/NewLoans";
import ViewTransactions from "./pages/ViewTransactions";
import Register from "./pages/Register";
import Login from "./pages/Login";
function App() {
  return (
    <>
        <MainLayout>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/accounts" element={<Accounts />} />
              <Route path="/cards" element={<Cards />} />
              {/* <Route path="/Transactions" element={<Transactions />} /> */}
              <Route path="/loans" element={<Loans />} />
              {/* <Route path="" element={<Error404 />} /> */}
              <Route path="/formcard" element={<NewCard />} />
              <Route path="/formloan" element={<NewLoans />} />
              <Route path='/transactions/:id' element={<ViewTransactions />} />
            </Routes>
        </MainLayout>
    </>
  );
}

export default App;
