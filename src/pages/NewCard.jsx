import React from "react";

const NewCard = () => {
  return (
<>
      <div className="bg-gray-500 flex flex-1 flex-col justify-center items-center">
        <div className="w-[25rem] bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">
            Apply for a card
          </h2>
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
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="credit">Credit</option>
              <option value="debit">Debit</option>
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
              name="cardMembership"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="gold">Gold</option>
              <option value="silver">Silver</option>
              <option value="titanium">Titanium</option>
            </select>
          </div>
          <div className="flex justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Apply
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      </>
  );
};

export default NewCard;
