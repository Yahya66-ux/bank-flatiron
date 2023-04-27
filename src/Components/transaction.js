import React, { useState, useEffect } from 'react';
import Filter from './filter';
import Form from './form';
import { Watch } from 'react-loader-spinner'

function Trans() {
    const [transactions, setTransactions] = useState([]);
    
  
    useEffect(() => {
      fetch("http://localhost:3000/transactions")
        .then((res) => res.json())
        .then((data) => {
          setTransactions(data.transactions);
      
        });
    }, []);
  
    const handleNewTransaction = (newTransaction) => {
      setTransactions([...transactions, newTransaction]);
    };
  
    const handleDeleteTransaction = (id) => {
      const newTransactions = transactions.filter((transaction) => transaction.id !== id);
      setTransactions(newTransactions);
    };
  
    return (
      <div className="transactions-container">
      
            <Filter transactions={transactions} onDelete={handleDeleteTransaction} />
            <Form onSubmit={handleNewTransaction} />

      </div>
    );
  }

export default transaction;