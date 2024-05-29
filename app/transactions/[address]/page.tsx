import React from 'react'

interface Props { params: { address: string }}
const TransactionsByAddress = ({ params: { address } }: Props) => (
    <div>
        <h1>TransactionsByAddress {address}</h1>
    </div>
)

export default TransactionsByAddress
