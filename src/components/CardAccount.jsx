import React from 'react'

const CardAccount = ({account}) => {
  return (
    <div className="flex flex-wrap justify-center">
        <div className="bg-white w-[25rem] h-[10rem] m-5 flex flex-col justify-around rounded-xl items-center p-3">
          <p className='pl-2'>Account number: <span className='font-bold text-lg'>{account.number}</span></p>
          <p className='pl-2'>Balance: <span className='font-bold text-lg'>${account.balance}</span></p>
          <p className='pl-2'>Creation Date: <span className='font-bold text-lg'>{account.creationDate}</span></p>
          <p className='pl-2'>number of transactions: <span className='font-bold text-lg'>{account.transactions.length}</span></p>
          <button className='bg-slate-900 text-white py-2 w-40 rounded-lg'>view transactions</button>
        </div>
    </div>
  )
}

export default CardAccount