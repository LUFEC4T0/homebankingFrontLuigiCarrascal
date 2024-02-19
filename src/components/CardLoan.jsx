import React from 'react'

const CardLoan = ({ loan }) => {
  return (
    <div className="flex flex-wrap justify-center">
        <div className="bg-white w-[25rem] h-[10rem] m-5 flex flex-col justify-around rounded-xl items-center p-3">
          <p className='pl-2'>Loan name: <span className='font-bold text-lg'>{loan.loan_name}</span></p>
          <p className='pl-2'>Amount: <span className='font-bold text-lg'>${loan.amount}.00</span></p>
          <p className='pl-2'>payments: <span className='font-bold text-lg'>{loan.payments}</span></p>
          <button className='bg-slate-900 text-white py-2 w-40 rounded-lg'>Apply for a loan</button>
        </div>
    </div>
  )
}

export default CardLoan