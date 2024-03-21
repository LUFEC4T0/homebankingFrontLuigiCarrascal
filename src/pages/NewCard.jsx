import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewCard = () => {
  const [userData, setUserData] = useState({
    cardType: "",
    cardColor: ""
  });
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleCards = async (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/api/clients/current/cards", userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        alert(res.data);
        navigate("/cards");
      })
      .catch((err) => {
        alert(err.data);
        console.log(err)
      });
  };

  const handleInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    console.log(userData);
  };

  return (
    <>
      <div className="bg-gray-500 flex flex-1 flex-col justify-center items-center">
        <form onSubmit={handleCards} className="w-[25rem] bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">Apply for a card</h2>
          <div className="mb-4 pr-4">
            <label
              htmlFor="cardType"
              className="block text-sm font-medium text-gray-700"
            >
              Type of card:
            </label>
            <select
              id="cardType"
              name="cardType"
              onChange={handleInput}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="CREDIT">Credit</option>
              <option value="DEBIT">Debit</option>
            </select>
          </div>
          <div className="mb-4 pr-4">
            <label
              htmlFor="cardMembership"
              className="block text-sm font-medium text-gray-700"
            >
              Color of card:
            </label>
            <select
              id="cardMembership"
              name="cardColor"
              onChange={handleInput}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="GOLD">Gold</option>
              <option value="SILVER">Silver</option>
              <option value="TITANIUM">Titanium</option>
            </select>
          </div>
          <div className="flex justify-between">
            <input
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              value="Apply"
            >
            </input>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => navigate("/cards")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewCard;
