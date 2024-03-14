import React from "react";
import { useState, useEffect } from "react";
import clientsFetch from "../utils/clientsFetch";
import CardCards from "../components/CardCards";
import authActions from "../redux/actions/auth.actions";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";


const Cards = () => {
  const [clients, setClients] = useState({});
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

  return (
    <div className="bg-gray-500 flex flex-1 flex-col justify-center items-center">
      <div className="pb-5">
        <h1 className="text-white pl-2 font-bold text-3xl">Welcome! {clients.firstName + " " + clients.lastName}</h1>
        <h2 className="text-white pl-2 font-semibold text-xl text-center">Your cards:</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-5">
      {
        clients.cards?.map(card => <CardCards key={card.id} card={card} />)
      }
      </div>
    </div>

  );
};

export default Cards;
