import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import CardAccount from "../components/CardAccount";
import clientsFetch from "../utils/clientsFetch";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import authActions from "../redux/actions/auth.actions";
import { current } from "@reduxjs/toolkit";



const Accounts = () => {
  const [clients, setClients] = useState();
  const user = useSelector((store) => store.authReducer.user);
  const dispatch = useDispatch();
  const { login, current } = authActions;

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!user.loggedin && !!token) {
      axios.get("http://localhost:8080/api/clients/current", {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
        .then(response => {
          dispatch(current(response.data));
          setClients(response.data);
        })
        .catch(error => console.log(error));
    }

  }, []);

  console.log(clients)

  return (
    <div className="bg-gray-500 flex flex-1 flex-col justify-center items-center">
      <div>
        <h1 className="text-white pl-2 font-bold text-3xl">Welcome! {clients.firstName + " " + clients.lastName}</h1>
        <h2 className="text-white pl-2 font-semibold text-xl text-center">Your accounts:</h2>
      </div>
      <div className="flex flex-wrap justify-center">
      {
        clients.accounts?.map(account => <CardAccount key={account.id} account={account} />)
      }
      </div>
    </div>
  );
};

export default Accounts;
