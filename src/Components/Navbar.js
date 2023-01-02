import React from 'react'
import {FaGithub} from "react-icons/fa"
import logo from "../images/et.png"

const Navbar = () => {
  return (
    <div>
        <header class="text-gray-400 bg-gray-900 body-font mb-[3rem]">
  <div class="container mx-auto flex flex-wrap  flex-row md:flex-row items-center justify-between">
        <img src={logo} alt="logo" className="w-[8rem]"  />

    <div className=" flex flex-row items-center justfy-center space-x-1 mr-8  bg-[#f5f6fa] py-[0.3rem px-[0.5rem] rounded text-[#2f3640] " >
    <a href="https://github.com/anshulghogre4/expense-tracker-react"     target="_blank">Github</a>
        <FaGithub/>
    </div>
  </div>
</header>

    </div>
  )
}

export default Navbar