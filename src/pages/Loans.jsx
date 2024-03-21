import React from 'react'
import CardLoan from '../components/CardLoan';
import clientsFetch from '../utils/clientsFetch';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import authActions from '../redux/actions/auth.actions';
import axios from 'axios';

const Loans = () => {

  // const [clients, setClients] = useState({});
  const user = useSelector((store) => store.authReducer.user);
  const dispatch = useDispatch();
  const { login, current } = authActions;

  useEffect(() => {
    const token = localStorage.getItem("token");
    
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
    <div className="bg-gray-500 flex flex-1 flex-col justify-center items-center">
      <div>
        <h1 className="text-white pl-2 font-bold text-3xl">Welcome! {user.firstName + " " + user.lastName}</h1>
        <h2 className="text-white pl-2 font-semibold text-xl text-center">Your loans:</h2>
      </div>
      <div className="flex flex-wrap justify-center">
      {
        user.loans?.map(loan => <CardLoan key={loan.id} loan={loan} />)
      }
      </div>
    </div>
  )
}

export default Loans