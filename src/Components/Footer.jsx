import React from 'react'
import { footerInfo } from '../constants'
import { navExternalLinks } from '../constants'
import { reactIcon } from '../assets'

function Footer() {
  return (
    <div id="footer" className="flex flex-col gap-2 sm:gap-0 sm:flex-row justify-between py-[46px] text-[18px] border-t border-[#333]">
      <p className="text-white" tel={footerInfo.phone} >{footerInfo.phone}</p>
      <div className="flex gap-2" >
        <p className="text-white whitespace-nowrap" >Built with React.js</p>
        <img src={reactIcon} alt="react icon" />
      </div>
      <div className="flex gap-2 items-center" >
        <a href={`mailto:${footerInfo.email}`} className="text-white">{footerInfo.email}</a>
        {navExternalLinks.map((navLink, index) => (
            <a target="_blank" rel="noopener noreferrer" key={navLink.id} href={navLink.link} >
              <img className="w-[20px] h-[20px]" src={navLink.img} alt={navLink.title} />
            </a>
          ))}
      </div>
    </div>
  )
}

export default Footer