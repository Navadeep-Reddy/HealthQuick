import React from 'react'
import {Link} from 'react-scroll'
import { useState, useEffect } from 'react'
const Navigation = () => {
  const [sticky, setSticky] = useState(false);
  
  useEffect(()=>{
    window.addEventListener('scroll', () => {
      (window.scrollY > 100)? setSticky(true) : setSticky(false); 
    })
  });


  return (
    <div className = {`${sticky? 'bg-LGreen' : 'bg-transparent'}  w-[100%] mx-auto h-[60px] flex justify-between items-center px-[10%] fixed top-2 left-0 duration-700`} >
      <h1 className={`text-[40px] font-semibold ${sticky? 'text-BWhite': 'text-DGreen'} duration-700`}>HealthQuick</h1>  
      <ul className={`flex space-x-8 text-[20px] ${sticky? 'text-BWhite': 'text-DGreen'} duration-700 cursor-pointer`}>
        <li ><Link to = "Home" smooth = {true} duration = {500} offset = {0}>Home</Link></li>
        <li><Link to = "Available" smooth={true} duration={500} offset={-100}>Leaderboard</Link></li>
      </ul>
    </div>
  )
}

export default Navigation