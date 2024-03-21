import React from 'react'
import axios from 'axios';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import authActions from '../redux/actions/auth.actions';
import { useEffect } from 'react';

const NewLoans = () => {
    const [userData, setUserData] = useState({ amount: "", description: "", numberAccountOrigen: "", numberAccountDestiny: "" });
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const user = useSelector((store) => store.authReducer.user);
    const dispatch = useDispatch();
    const { login, current } = authActions;


    const handleTransactions = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/transactions', userData, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
            .then(res => {
                console.log(res.data)
                alert(res.data)
                navigate('/accounts')
            })
            .catch(err => {
                alert("An error has occurred")
                console.log(err)
            })
    }

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

    const handleInput = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
        console.log(userData);
    }


    return (
        <>
            <div className="bg-gray-500 flex flex-1 flex-col justify-center items-center ">
                <div className='w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl sm:w-[16rem]'>
                    <div className='max-w-md mx-auto space-y-6'>
                        <form id="formReset" action="" onSubmit={handleTransactions} >
                            <h2 className="text-2xl font-bold ">New Transaction</h2>
                            <hr className="my-6 sm:my-3"></hr>
                            <label className="uppercase text-sm font-bold opacity-70">Account origin</label>
                            <select className="p-3 mt-2 mb-4 w-full bg-slate-200 rounded uppercase text-sm font-bold opacity-70 sm:w-[90%] sm:p-2 sm:mb-3" defaultValue="1" name="numberAccountOrigen" onChange={handleInput}>
                                <option value="1" disabled>SELECT ACCOUNT</option>
                                {
                                    user.accounts?.map(account => <option className="uppercase text-sm font-bold opacity-70" key={account.number} value={account.number}>{account.number}</option>)
                                }
                            </select>
                            <label className="uppercase text-sm font-bold opacity-70">Account destiny</label>
                            <input type="text" name="numberAccountDestiny" onInput={handleInput} value={userData.numberAccountDestiny} className="p-3 mt-2 mb-4 w-full bg-slate-200 rounded sm:w-[90%] sm:p-2 sm:mb-3"></input>

                            <label className="uppercase text-sm font-bold opacity-70">Amount</label>
                            <input type="number" min={1} name="amount" onInput={handleInput} value={userData.amount} className="p-3 mt-2 mb-4 w-full bg-slate-200 rounded sm:w-[90%] sm:p-2 sm:mb-3"></input>

                            <label className="uppercase text-sm font-bold opacity-70">Description</label>
                            <input type="text" name="description" onInput={handleInput} value={userData.description} className="p-3 mt-2 mb-4 w-full bg-slate-200 rounded sm:w-[90%] sm:p-2 sm:mb-3"></input>

                            <input type="submit" className="sm:p-2 sm:mb-3 py-3 px-6 my-2  bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded cursor-pointer ease-in-out duration-300" value="Send"></input>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewLoans