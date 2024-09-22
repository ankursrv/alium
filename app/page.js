import Login from "./login";
import CreateAccount from "./CreateAccount";

import React from 'react'
import ForgotPassword from "./forgotPasswrod";
import LoginSuccess from "./loginSuccess";
import ResetPassword from "./resetPassword";

const Home = () => {
  return (
    <main>
      <Login />
      <CreateAccount />
      <ForgotPassword />
      <LoginSuccess />
      <ResetPassword />
    </main>
  )
}

export default Home
