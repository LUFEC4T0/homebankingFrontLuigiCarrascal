import axios from "axios";
import React, { useState, useEffect } from "react";
import CardAccount from "../components/CardAccount";
import clientsFetch from "../utils/clientsFetch";


const Accounts = () => {
  const [clients, setClients] = useState({});
  useEffect(() => {
      clientsFetch() 
        .then(data => setClients(data))
        .catch((error) => console.log("Error: ", error));
  }, []);

  // console.log(clients)

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
