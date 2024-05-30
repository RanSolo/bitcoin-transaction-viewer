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
  const [updatedUser, setUpdatedUser] = useState<User>();
  
  const updateUserMutation =  (userToUpdate: any) => {
    let baseURL = "";
    if (process.env.NODE_ENV === "development") {
      baseURL = "http://localhost:3000";
    } else {
      baseURL = "https://bitcoin-transaction-viewer-rho.vercel.app/";
    }
    let response;
    try {
      response = axios({
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
  return (
    <input
      title="favorite"
      placeholder=""
      value={transactionId}
      type="checkbox"
      className="checkbox"
      onChange={ e => {

        let favsClone = [...user.favoriteTransactions];
        if
         (user.favoriteTransactions.includes(transactionId)){
        favsClone = favsClone.filter((fav) => fav !== transactionId);
          [...user.favoriteTransactions, transactionId];  
          } else{
            favsClone = [...user.favoriteTransactions, transactionId];
          }
        let updatedUser;
        try {
         updatedUser = updateUserMutation({ ...user, favoriteTransactions: favsClone });
        } catch (error) {
          console.log("error", error);
        }
      }}
      defaultChecked={isFavorite || undefined}
    />
  );
};

export default FavoriteCheckbox;
