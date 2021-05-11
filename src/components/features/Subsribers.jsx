import React, { useState, useEffect } from "react";
import { apiBaseUrl } from "../../constants/env";

const  Subsribers = () => {

  const [subscribedUsers, setSubscribedUsers] = useState(null);

  const getSubscribedData = async (values, actions) => {
    const rawResponse = await fetch(`${apiBaseUrl}/users`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    const response = await rawResponse.json();
    if(response?.status === 200){
      setSubscribedUsers(response.data);
    }
  }

  useEffect(() => {
    getSubscribedData();
    setInterval(() => {
      getSubscribedData();
    }, 5000);
  }, []);

  return (
    <div className="box2 subscription">
      Registered Users Count : {subscribedUsers}
    </div>
  );
}
export default Subsribers;
