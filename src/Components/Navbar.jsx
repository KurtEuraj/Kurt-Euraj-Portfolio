import React, { useState } from 'react'
import { navLinks, navExternalLinks } from '../constants'
import { menu, close } from '../assets'
import {Link, animateScroll as scroll} from "react-scroll";

function Nabvar() {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <nav className="w-full flex py-[46px] justify-between items-center navbar" >
      <div className="flex gap-4 flex-row-reverse relative z-[1]">
        <p className="text-[20px] lg:text-[30px] text-white font-medium cursor-pointer" >Kurt Euraj</p>
        <div className="flex sm:hidden justify-center items-center gap-2" >
          {navExternalLinks.map((navLink, index) => (
            <a target="_blank" rel="noopener noreferrer" key={navLink.id} href={navLink.link} >
              <img className="w-[20px] h-[20px]" src={navLink.img} alt={navLink.title} />
            </a>
          ))}
      </div>
      </div>
      <div className="hidden sm:flex justify-center items-center gap-[70px] lg:gap-[98px]" >
        {navLinks.map((navLink, index) => (
          // <a className="text-[20px] text-white font-medium" key={navLink.id} href={`#${navLink.id}`} >{navLink.title}</a>
          <Link 
          key={navLink.id} 
          className="text-[20px] text-white font-medium cursor-pointer" 
          to={navLink.id} 
          spy={true}
          smooth={true}
          duration={750}>
          {navLink.title}
          </Link>
        ))}
      </div>
      <div className="hidden sm:flex justify-center items-center gap-[29px]" >
          {navExternalLinks.map((navLink, index) => (
            <a target="_blank" rel="noopener noreferrer" key={navLink.id} href={navLink.link} >
              <img src={navLink.img} alt={navLink.title} />
            </a>
          ))}
      </div>
      <div className="sm:hidden " >
            <img className="cursor-pointer" src={menu} alt="menu" onClick={() => setToggleNav((toggle) => !toggle)}/>
            <div className={`${toggleNav ? "flex" : "hidden"} fixed p-6 pt-[100px] bg-black h-[100vh] top-0 right-0 left-0 xs:left-[auto] rounded-l-lg sidebar transition-opacity`}>
              <div className="flex flex-col gap-3" >
                {navLinks.map((navLink, index) => (
                  <a onClick={() => setToggleNav((toggle) => !toggle)} className="text-[20px] lg:text-[30px] text-white font-medium" key={navLink.id} href={`#${navLink.id}`} >{navLink.title}</a>
                ))}
              </div>
              <img className="cursor-pointer w-[20px] h-[20px] absolute right-[20px] top-[50px]" src={toggleNav ? close : menu} alt="menu" onClick={() => setToggleNav((toggle) => !toggle)}/>
            </div>
      </div>
    </nav>
  )
}

export default Nabvar