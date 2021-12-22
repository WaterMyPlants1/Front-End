import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import axiosWithAuth from "../utils/axiosWithAuth";

const Logout = () => {
  const { push } = useHistory();

  useEffect(() => {
    axiosWithAuth()
      .post("./logout")
      .then(() => {
        localStorage.removeItem("token");
        push("/login");
      });
  }, []);

  return <div></div>;
};

export default Logout;