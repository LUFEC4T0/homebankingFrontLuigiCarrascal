import React from 'react'

const Transactions = ({ transaction }) => {
  return (
    <div className='flex flex-wrap justify-center shadow overflow-hidden rounded border-b '>
      <table className="min-w-full bg-white">
      <thead className="bg-indigo-500 text-white">
        <tr>
          <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Description</th>
          <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Type</th>
          <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Amount</th>
          <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Date</th>
        </tr>
      </thead>
    <tbody className="text-gray-700">
      <tr>
        <td className="w-1/3 text-left py-3 px-4">{transaction.description}</td>
        <td className="w-1/3 text-left py-3 px-4">{transaction.type}</td>
        <td className="text-left py-3 px-4">{transaction.amount}</td>
        <td className="text-left py-3 px-4">{transaction.date}</td>
      </tr>
      </tbody>
      </table>
    </div>
  )
}

export default Transactions