import React from 'react'

interface Props { params: { address: string }}
interface Transaction {
    txid: string
    date: string
    amount: number
    status: {
        confirmed: boolean
    }
}
const TransactionsByAddress = async ({ params: { address } }: Props) => {
    const response = await fetch(`http:localhost:3000/api/transactions/${address}`)
    const transactions: Transaction[] = await response.json();
    
    return <div>
        <h1>TransactionsByAddress {address}</h1>
        <ul>
            {transactions.map(transaction => 
                <li className="p-10" key={transaction.txid}>txid: {transaction.txid}</li>
            )}
        </ul>
    </div>;
}

export default TransactionsByAddress
