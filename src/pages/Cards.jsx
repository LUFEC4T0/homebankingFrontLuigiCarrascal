import React from "react";
import { useState, useEffect } from "react";
import clientsFetch from "../utils/clientsFetch";
import CardCards from "../components/CardCards";

const Cards = () => {
  const [clients, setClients] = useState({});

  useEffect(() => {
    clientsFetch()
      .then((data) => setClients(data))
      .catch((error) => console.log("Error: ", error));
  }, []);

  return (
    <div className="bg-gray-500 flex flex-1 flex-col justify-center items-center">
      <div className="pb-5">
        <h1 className="text-white pl-2 font-bold text-3xl">Welcome! {clients.firstName + " " + clients.lastName}</h1>
        <h2 className="text-white pl-2 font-semibold text-xl text-center">Your cards:</h2>
      </div>
      <div className="flex flex-wrap justify-center">
      {
        clients.cards?.map(card => <CardCards key={card.id} card={card} />)
      }
      </div>
    </div>

  );
};

export default Cards;
