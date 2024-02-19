import React from "react";

const NewCard = () => {
  return (
<>
      <div className="bg-gray-500 flex flex-1 flex-col justify-center items-center">
        <div className="max-w-md bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-4">
            Formulario de Tarjeta de Crédito
          </h2>
          <div className="mb-4">
            <label
              htmlFor="cardType"
              className="block text-sm font-medium text-gray-700"
            >
              Tipo de Tarjeta
            </label>
            <select
              id="cardType"
              name="cardType"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="credit">Crédito</option>
              <option value="debit">Débito</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="cardMembership"
              className="block text-sm font-medium text-gray-700"
            >
              Membresía de Tarjeta
            </label>
            <select
              id="cardMembership"
              name="cardMembership"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="gold">Oro</option>
              <option value="silver">Plata</option>
              <option value="titanium">Titanio</option>
            </select>
          </div>
          <div className="flex justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Aplicar
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
      </>
  );
};

export default NewCard;
