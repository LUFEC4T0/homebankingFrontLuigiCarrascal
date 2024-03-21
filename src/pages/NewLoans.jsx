import React from 'react'
import axios from 'axios';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import authActions from '../redux/actions/auth.actions';
import { useEffect } from 'react';

    const NewLoans = () => {
        const [userData, setUserData] = useState({ name: "", maxAmount: "", payments: "", numberAccount: "" });
        const token = localStorage.getItem("token");
        const navigate = useNavigate();
        const user = useSelector((store) => store.authReducer.user);
        const dispatch = useDispatch();
        const { current } = authActions;
        const [loans, setLoans] = useState([]);
        const [maxAmount, setMaxAmount] = useState(0);
        const [payments, setPayments] = useState([]);
        const [amount, setAmount] = useState(0);
    
        useEffect(() => {
                axios.get("http://localhost:8080/api/loans/", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                .then(response => {
                    setLoans(response.data);
                })
                .catch(error => console.log(error));
            }, []);
    
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
    
        const handleLoans = async (e) => {
            e.preventDefault();
            axios.post('http://localhost:8080/api/loans/', userData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            .then(res => {
                console.log(res.data);
                alert(res.data);
                navigate('/loans');
            })
            .catch(err => {
                alert(err.data);
                console.log(err)
            });
        }
    
        const handleInput = (e) => {
            const { name, value } = e.target;
            setUserData(prevUserData => ({ ...prevUserData, [name]: value }));
            
            const loanSelected = loans.find(loan => loan.name === value);
            if (loanSelected) {
                setMaxAmount(loanSelected.maxAmount);
                setPayments(loanSelected.payments);
            }
        }
    
        return (
            <div className="bg-gray-500 flex flex-1 flex-col justify-center items-center">
                <div className='w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl sm:w-[16rem]'>
                    <div className='max-w-md mx-auto space-y-6'>
                        <form action="" onSubmit={handleLoans}>
                            <h2 className="text-2xl font-bold ">Apply for a loan</h2>
                            <hr className="my-6 sm:my-3"></hr>
                            <label className="uppercase text-sm font-bold opacity-70">Select loan</label>
                            <select className="p-3 mt-2 mb-4 w-full bg-slate-200 rounded uppercase text-sm font-bold opacity-70 sm:w-[90%] sm:p-2 sm:mb-3" defaultValue="1" name="name" onChange={handleInput}>
                                <option value="1" disabled className="uppercase text-sm font-bold opacity-70">SELECT ACCOUNT</option>
                                {
                                    loans?.map(loan => <option className="uppercase text-sm font-bold opacity-70" key={loan.name} value={loan.name}>{loan.name}</option>)
                                }
                            </select>
                            <label className="uppercase text-sm font-bold opacity-70">Amount</label>
                            <input type="number" name="maxAmount" min={1} max={maxAmount} placeholder={maxAmount === 0 ? "Select a loan" : "Amount maximum " + maxAmount} onChange={handleInput} value={userData.maxAmount} className="p-3 mt-2 mb-4 w-full bg-slate-200 rounded sm:w-[90%] sm:p-2 sm:mb-3"></input>
    
                            <label className="uppercase text-sm font-bold opacity-70">Select payments</label>
                            <select className="p-3 mt-2 mb-4 w-full bg-slate-200 rounded uppercase text-sm font-bold opacity-70 sm:w-[90%] sm:p-2 sm:mb-3" defaultValue="1" name="payments" onChange={handleInput}>
                                <option value="1" disabled className="uppercase text-sm font-bold opacity-70">SELECT PAYMENTS</option>
                                {
                                    payments?.map(payment => <option className="uppercase text-sm font-bold opacity-70" key={payment} value={payment}>{payment}</option>)
                                }
                            </select>
    
                            <label className="uppercase text-sm font-bold opacity-70">Select account</label>
                            <select className="p-3 mt-2 mb-4 w-full bg-slate-200 rounded uppercase text-sm font-bold opacity-70 sm:w-[90%] sm:p-2 sm:mb-3" defaultValue="1" name="numberAccount" onChange={handleInput}>
                                <option value="1" disabled className="uppercase text-sm font-bold opacity-70">SELECT ACCOUNT</option>
                                {
                                    user.accounts?.map(account => <option className="uppercase text-sm font-bold opacity-70" key={account.number} value={account.number}>{account.number}</option>)
                                }
                            </select>
    
                            <input type="submit" className="py-3 px-6 my-2  bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded cursor-pointer ease-in-out duration-300 sm:py-1 sm:px-4" value="Send"></input>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
    
    export default NewLoans;
    