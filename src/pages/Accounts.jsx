import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import CardAccount from "../components/CardAccount";
import clientsFetch from "../utils/clientsFetch";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import authActions from "../redux/actions/auth.actions";
import { current } from "@reduxjs/toolkit";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const Accounts = () => {
  const user = useSelector((store) => store.authReducer.user);
  const dispatch = useDispatch();
  const { login, current } = authActions;
  const token = localStorage.getItem("token");
  const navigator = useNavigate();

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

;

  const handleAccounts = () => {
    axios.post('http://localhost:8080/api/clients/current/accounts', {},{
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })
        .then(res => {
            console.log(res.data)
            navigate('/accounts')
        })
        .catch(err => console.log(token))
}


  return (
    <div className="bg-gray-500 flex flex-1 flex-col justify-center items-center">
      <div>
        <h1 className="text-white pl-2 font-bold text-3xl">Welcome! {user.firstName + " " + user.lastName}</h1>
        <h2 className="text-white pl-2 font-semibold text-xl text-center">Your accounts:</h2>
      </div>
      <div className="flex flex-wrap justify-center">
      {
        user.accounts?.map(account => <CardAccount key={account.id} account={account} />)
      }
      </div>
      <div className="sm:py-3 ">
        <input className="bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white py-2 px-4 rounded-lg" type="submit" value="Create new account" onClick={handleAccounts} />
      </div>
    </div>
  );
};

export default Accounts;
