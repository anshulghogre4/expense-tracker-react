import React from 'react'
import {FaGithub} from "react-icons/fa"
import logo from "../images/et.png"

const Navbar = () => {
  return (
    <div>
        <header className="text-gray-400 bg-slate-900 body-font mb-[3rem]">

        <div className="container px-[1rem] md:px-[10rem]  flex flex-wrap flex-row items-center justify-between">
        {/* Logo Image */}
        <img src={logo} alt="logo" className=" w-[6rem] md:w-[8rem]"  />
          {/* Github Link Tab */}
        <div className=" flex flex-row items-center justfy-center space-x-1 md:mr-[0rem] xl:mr-[-6rem] 2xl:mr-[-20rem]  bg-[#f5f6fa] py-[0.3rem] px-[0.5rem] rounded realtive text-[#2f3640] " >
        <a href="https://github.com/anshulghogre4/expense-tracker-react" target="_blank">Github</a>
        <FaGithub/>
        </div>


  </div>


</header>
    </div>
  )
}

export default Navbar