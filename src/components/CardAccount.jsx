import React from 'react'
import { Link } from 'react-router-dom'

const CardAccount = ({account}) => {
  return (
    <div className="flex flex-wrap justify-center">
        <div className="bg-white w-[25rem] h-[10rem] m-5 flex flex-col justify-around rounded-xl items-center p-3 sm:w-[19rem] sm:m-2">
          <p className='pl-2'>Account number: <span className='font-bold text-lg text-gray-600'>{account.number}</span></p>
          <p className='pl-2'>Balance: <span className='font-bold text-lg text-gray-600'>${account.balance}</span></p>
          <p className='pl-2'>Creation Date: <span className='font-bold text-lg text-gray-600'>{account.creationDate}</span></p>
          <p className='pl-2'>number of transactions: <span className='font-bold text-lg text-gray-600'>{account.transactions.length}</span></p>
          <Link to={`/transactions/${account.id}`} className='bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white py-2 w-40 rounded-lg text-center '>view transactions</Link>
        </div>
    </div>
  )
}

export default CardAccount