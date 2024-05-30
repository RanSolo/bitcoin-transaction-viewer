import React from "react";
import TransactionTable from "./TransactionTable";
import { Tx } from "@mempool/mempool.js/lib/interfaces/bitcoin/transactions";
import AddressSearch from "./AddressSearch";
import axios from "axios";

interface Props {
  params: { address: string };
  searchParams: { address: string };
}
let baseURL = "";

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3000";
} else {
  baseURL = "https://bitcoin-transaction-viewer-rho.vercel.app/";
}

const TransactionsByAddress = async ({ params, searchParams: { address: searchAddress } }: Props) => {
  let response = { status: 404, data: [] };
  if (searchAddress)
    response = await axios({
      method: "GET",
      url: `${baseURL}/api/transactions/${searchAddress}`,
      headers: {
        "Content-Type": "application/json"
      }
    });

  if (response.status !== 200) {
    return (
      <div>
        <AddressSearch defaultAddress={searchAddress} />
        <span>No transactions found with the provided address.</span>
      </div>
    );
  }

  const transactions: Tx[] = response.data;

  return (
    <div>
      <AddressSearch defaultAddress={searchAddress} />
      <h1 className="header w-full">Transactions</h1>

      <TransactionTable address={searchAddress} transactions={transactions} filter="all" />
    </div>
  );
};

export default TransactionsByAddress;
