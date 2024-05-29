'use-client'
import React from 'react'
import TransactionTable from './TransactionTable';
import { Tx } from '@mempool/mempool.js/lib/interfaces/bitcoin/transactions';
import AddressSearch from './AddressSearch';

interface Props { params: { address: string }, searchParams: {address: string}}

const TransactionsByAddress = async ({ params: { address }, searchParams: { address: searchAddress} }: Props) => {
    const response = await fetch(`http:localhost:3000/api/transactions/${searchAddress}`)

    if (response.status !== 200) {
        return <div>
        <AddressSearch />    
            <span>No transactions found with the provided address.</span>
            
            </div>
    }

    const transactions: Tx[] = await response.json();
    console.log('transactions', transactions);
    
    return <div>
        <AddressSearch />
        <h1 className="header w-full">Transactions</h1>
        
        <TransactionTable address={address} transactions={transactions} filter="all" />
    </div>;
}

export default TransactionsByAddress
