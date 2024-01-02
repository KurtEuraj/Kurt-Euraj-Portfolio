import React from 'react'
import { footerInfo } from '../constants'
import { navExternalLinks } from '../constants'
import { reactIcon } from '../assets'

function Footer() {
  return (
    <div id="footer" className="flex flex-col gap-2 sm:gap-0 sm:flex-row justify-center py-[46px] text-[18px] border-t border-[#333]">
      <div className="flex gap-5 items-center" >
        <a href={`mailto:${footerInfo.email}`} className="text-white text-[20px]">{footerInfo.email}</a>
        {navExternalLinks.map((navLink, index) => (
            <a target="_blank" rel="noopener noreferrer" key={navLink.id} href={navLink.link} >
              <img src={navLink.img} alt={navLink.title} />
            </a>
          ))}
      </div>
    </div>
  )
}

export default Footer