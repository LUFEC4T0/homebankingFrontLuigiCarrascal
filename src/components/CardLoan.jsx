import React from 'react'
import { Link } from 'react-router-dom'

const CardLoan = ({ loan }) => {
  return (
    <div className="flex flex-wrap justify-center">
        <div className="bg-white w-[25rem] h-[10rem] m-5 flex flex-col justify-around rounded-xl items-center p-3 sm:w-[19rem] sm:m-2">
          <p className='pl-2'>Loan name: <span className='font-bold text-lg text-gray-600'>{loan.loan_name}</span></p>
          <p className='pl-2'>Amount: <span className='font-bold text-lg text-gray-600'>${loan.amount}.00</span></p>
          <p className='pl-2'>payments: <span className='font-bold text-lg text-gray-600'>{loan.payments}</span></p>
          <Link to={`/formloan/`} className='bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white py-2 w-40 rounded-lg text-center '>Apply for a loan</Link>
        </div>
    </div>
  )
}

export default CardLoan