import axios from 'axios';
import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import CardAccount from '../components/CardAccount';
import clientsFetch from '../utils/clientsFetch';
const ViewTransactions = () => {
    const [transactions, setTransactions] = useState({})
    const {id} = useParams()
    useEffect (() => {
        clientsFetch()
        .then((data) => setTransactions(data.accounts[0].transactions.find(transaction => transaction.id == id)))
        .catch((error) => console.log("Error: ", error));

    }, [])

    console.log(transactions);

  return (  
    <>
        
    </>
  )
}

export default ViewTransactions