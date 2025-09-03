import React, { useState } from 'react'
import { Link } from "react-scroll"

const Header = () => {
  const NavItems = [
    { id: "Home", label: "Home" },
    { id: "Projects", label: "Projects" },
    { id: "About", label: "About" },
    { id: "Contact", label: "Contact" },
  ]

  const [Active, setActive] = useState('Home');
  return (
    <div className='flex justify-center items-center fixed top-3 w-full z-10'>
      <nav className='flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur'>
        {
          NavItems.map(Option => (
            <Link 
              key={Option.label}
              smooth={true}
              duration={600}
              offset={-80}
              to={Option.id} className={`nav-item cursor-pointer ${Active === Option.label ? "bg-white text-gray-950" : ""}`}
              onClick={()=>setActive(Option.label)}
            >{Option.label}</Link>
          ))
        }
      </nav>
    </div>
  )
}

export default Header