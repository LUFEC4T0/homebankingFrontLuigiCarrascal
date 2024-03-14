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
    const {id} = useParams()
    const user = useSelector((store) => store.authReducer.user);
    const dispatch = useDispatch();
    const { login, current } = authActions;
  
    useEffect(() => {
      const token = localStorage.getItem("token");
  
      if (!user.loggedin && !!token) {
        axios.get("http://localhost:8080/api/clients/current", {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        })
          .then(response => {
            dispatch(current(response.data));
            setAccount(response.data.accounts.find(account => account.id == id));
          })
          .catch(error => console.log(error));
      }
  
    }, []);

    // useEffect (() => {
    //     clientsFetch()
    //     .then((data) => setAccount(data.accounts.find(account => account.id == id)))
    //     .catch((error) => console.log("Error: ", error));

    // }, [])
  return (  
    <>
    <div className="bg-gray-500 flex flex-1 flex-col justify-center items-center gap-8">
    <div>
        <h1 className="text-white pl-2 font-bold text-3xl">Account transaction information: {account.number}</h1>
        <h2 className="text-white pl-2 font-semibold text-xl text-center">Your transactions:</h2>
      </div>
      <div className='flex flex-wrap justify-center gap-8'>
      {
        account.transactions?.map(transactions => <Transactions key={account.id} account={account} transaction={transactions} />)
      }
      </div>
    </div>
    </>
  )
}

export default ViewTransactions 