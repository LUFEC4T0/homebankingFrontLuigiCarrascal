import React from 'react'

const Transactions = ({ transaction }) => {
  return (
    <div className='flex flex-wrap justify-center shadow overflow-hidden rounded border-b sm:w-full'>
      <table className="min-w-full bg-white">
      <thead className="bg-indigo-500 text-white">
        <tr>
          <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm sm:py-1 sm:px-2">Description</th>
          <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm sm:py-1 sm:px-2">Type</th>
          <th className="text-left py-3 px-4 uppercase font-semibold text-sm sm:py-1 sm:px-2">Amount</th>
          <th className="text-left py-3 px-4 uppercase font-semibold text-sm sm:py-1 sm:px-2">Date</th>
        </tr>
      </thead>
    <tbody className="text-gray-700">
      <tr>
        <td className="w-1/3 text-left py-3 px-4 sm:py-1 sm:px-2">{transaction.description}</td>
        <td className="w-1/3 text-left py-3 px-4 sm:py-1 sm:px-2">{transaction.type}</td>
        <td className="text-left py-3 px-4 sm:py-1 sm:px-2">{transaction.amount}</td>
        <td className="text-left py-3 px-4 sm:py-1 sm:px-2">{transaction.date}</td>
      </tr>
      </tbody>
      </table>
    </div>
  )
}

export default Transactions