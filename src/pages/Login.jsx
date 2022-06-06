// eslint-disable-next-line
import React, { useState, useContext } from "react";
// eslint-disable-next-line
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  return (
    <div>
      <input data-cy="login-email" />
      <input data-cy="login-password" />
      <button data-cy="login-submit"></button>
    </div>
  );
};

export default Login;
