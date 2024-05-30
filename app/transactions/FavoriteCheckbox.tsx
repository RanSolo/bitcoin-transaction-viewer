"use client";
import axios from "axios";
import { useEffect, useState } from "react";
interface User {
  id: string;
  favoriteTransactions: string[];
}
interface Props {
  user: User;
  transactionId: string;
}

const FavoriteCheckbox = ({ user, transactionId }: Props) => {
  console.log("userssfsf", user);

  const updateUserMutation = async (userToUpdate: any) => {
    let baseURL = "";
    if (process.env.NODE_ENV === "development") {
      baseURL = "http://localhost:3000";
    } else {
      baseURL = "https://bitcoin-transaction-viewer-rho.vercel.app/";
    }
    let response = { data: {} };
    try {
      response = await axios({
        method: "PUT",
        url: `/api/users/${userToUpdate?.id}`,
        headers: {
          "Content-Type": "application/json"
        },
        data: userToUpdate
      });
    } catch (error) {
      console.log("ERROR: ", error);
    }

    // const response = await fetch(`/api/users/${user.id}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(userToUpdate)
    // });

    if (!response) {
      throw new Error("Failed to update user");
    }

    return response.data;
  };
  // const mutation = useMutation({
  //   mutationFn: updateUserMutation,
  //   onMutate: async variables => {
  //     // A mutation is about to happen
  //     console.log("onMutate", variables);
  //   },
  //   onError: (error: any) => {
  //     // Handle errors
  //     console.log("onError", error);
  //   },
  //   onSettled: () => {
  //     console.log("settled");
  //     // Data updated, do something
  //   }
  // });

  const isFavorite = user?.favoriteTransactions.includes(transactionId);
  console.log("isFavorite", isFavorite);

  return (
    <input
      title="favorite"
      placeholder=""
      value={transactionId}
      type="checkbox"
      className="checkbox"
      onChange={async e => {
        const favsClone = [...user.favoriteTransactions, transactionId];
        // let mutatedFavsClone = !newFavs.includes(e.target.value)
        //   ? [...favsClone, e.target.value]
        //   : favsClone.filter(fav => fav === e.target.value);
        // const isChecked = e.target.checked;
        // setTxid(e.target.value);

        // !isChecked && newFavs.includes(e.target.value)
        //   ? setNewFavs(newFavs.filter(fav => fav !== e.target.value))
        //   : setNewFavs([...newFavs, e.target.value]);

        const updatedUser = await updateUserMutation({ ...user, favoriteTransactions: favsClone });
        console.log("updatedUser", updatedUser);
      }}
      defaultChecked={isFavorite || undefined}
    />
  );
};

export default FavoriteCheckbox;
