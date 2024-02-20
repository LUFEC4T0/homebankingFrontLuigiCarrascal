import React from 'react'

const NewLoans = () => {
    return (
        <div className="bg-gray-500 flex flex-1 flex-col justify-center items-center">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[25rem]">
             <div className="mb-4"> <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="destination"> Tipo de destino </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="destination" type="text"></input>
             </div>
            <div className="mb-4"> <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="accountOrigin"> Cuenta de origen </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="accountOrigin" type="text"></input>
            </div>
            <div className="mb-4"> 
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount"> $ Amount </label> 
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="amount" type="number"></input>
            </div>
            <div className="mb-6"> 
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description"> Description </label>
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text"></textarea> 
            </div> 
            <div className="flex items-center justify-center"> 
            <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Submit"></input>
            </div> 
            </form>
        </div>
    )
}

export default NewLoans