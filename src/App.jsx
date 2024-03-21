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
import {Routes, Route, Navigate } from "react-router-dom";
import NewLoans from "./pages/NewLoans";
import ViewTransactions from "./pages/ViewTransactions";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NewTransactions from "./pages/NewTransactions";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import authActions from "./redux/actions/auth.actions";
import { useSelector } from "react-redux";

function App() {
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const token = localStorage.getItem('token');
  const user = useSelector((store) => store.authReducer.user);
  const dispatch = useDispatch();
  const { current } = authActions;
  
  useEffect(() => {
    axios.get("http://localhost:8080/api/clients/current", {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then(response => {
        dispatch(current(response.data));
      })
      .catch(error => console.log(error));
  }, []);

  return (
        <MainLayout>
            {user.loggedin ?
            <>
            <Header />
            <Routes>
              <Route path="/accounts" element={<Accounts />} />
              <Route path="/cards" element={<Cards />} />
              <Route path="/loans" element={<Loans />} />
              <Route path="/formcard" element={<NewCard />} />
              <Route path="/formloan" element={<NewLoans />} />
              <Route path='/transactions/:id' element={<ViewTransactions />} />
              <Route path="/transactions" element={<NewTransactions />} />
              <Route path="*" element={<Navigate to="/accounts" />} />
            </Routes>
            <Footer />
            </>
             : <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="*" element={<Navigate to="/login" />} />
              </Routes>}
        </MainLayout>
  );
}

export default App;
