import axios from 'axios';
import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import CardAccount from '../components/CardAccount';
import clientsFetch from '../utils/clientsFetch';
import Transactions from '../components/Transactions';
import { useDispatch, useSelector } from 'react-redux';
import authActions from '../redux/actions/auth.actions';

const ViewTransactions = () => {
  const [account, setAccount] = useState({})
  const { id } = useParams()
  const user = useSelector((store) => store.authReducer.user);
  const dispatch = useDispatch();
  const { login, current } = authActions;
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios.get("http://localhost:8080/api/clients/current", {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then(response => {
        dispatch(current(response.data));
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    setAccount(user.accounts?.find(account => account.id == id))
  }, [user])

  if (!user.loggedin || !account) {
    return (<div>Loading...</div>);
  }

  return (
    <>
      <div className="bg-gray-500 flex flex-1 flex-col justify-center items-center gap-8 p-5">
        <div>
          <h1 className="text-white pl-2 font-bold text-3xl">Account transaction information: {account.number}</h1>
          <h2 className="text-white pl-2 font-semibold text-xl text-center">Your transactions:</h2>
        </div>
        <div className='flex flex-wrap justify-center gap-8'>
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
                {
                  account.transactions?.map(transacition => <tr key={account.id}> <td>{transacition.description}</td> <td>{transacition.type}</td> <td>{transacition.amount}</td> <td>{transacition.date}</td> </tr>)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewTransactions 