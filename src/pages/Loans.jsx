import React from 'react'
import CardLoan from '../components/CardLoan';
import clientsFetch from '../utils/clientsFetch';
import { useState, useEffect } from "react";

const Loans = () => {

  const [clients, setClients] = useState({});
  useEffect(() => {
      clientsFetch() 
        .then(data => setClients(data))
        .catch((error) => console.log("Error: ", error));
  }, []);

 console.log(clients)

  return (
    <div className="bg-gray-500 flex flex-1 flex-col justify-center items-center">
      <div>
        <h1 className="text-white pl-2 font-bold text-3xl">Welcome! {clients.firstName + " " + clients.lastName}</h1>
        <h2 className="text-white pl-2 font-semibold text-xl text-center">Your loans:</h2>
      </div>
      <div className="flex flex-wrap justify-center">
      {
        clients.loans?.map(loan => <CardLoan key={loan.id} loan={loan} />)
      }
      </div>
    </div>
  )
}

export default Loans