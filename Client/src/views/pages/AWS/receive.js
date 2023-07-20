import React from 'react'
import {useEffect,useState } from "react";
const receive = () => {
    const callAboutPage = async () => {
        try {
          const res = await fetch("/awsdata", {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            credentials: "include",
          });
          const user = await res.json();
        //  setData(user); 
        //  console.log(usersData);
    
       
        // if (!res.status === 200) {
        //   const error = new Error(res.error);
        //   throw error;
        // }
      } catch (err) {
        console.log(err);
      //   navigate("/login");
      }
      
    };
    useEffect(() => {
     callAboutPage();
    }, [])
  return (
    <h1>Page Under Construction !!!</h1>
  )
}

export default receive