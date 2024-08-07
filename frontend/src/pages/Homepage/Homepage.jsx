import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import SigninForm from "../../components/Signin/SigninForm";

import React from 'react'
import SignupForm from "../../components/Signup/SignupForm";

const Homepage = () => {
  return (
    <div><div className="w-full  flex flex-col">
    <Navbar />
    <div className="flex flex-col p-7"><Hero /><Footer /></div>
</div></div>
  )
}

export default Homepage