import React from 'react'
import {Link, animateScroll as scroll} from "react-scroll";

function Button({ children, size, link, samePage, ...props }) {
    const sizes = {
        med: "py-[15px] px-[30px] rounded-full text-[20px] font-semibold",
        sm: "py-[15px] px-[30px] rounded-full text-[16px] font-semibold"
    }
    const styles = sizes[size] || sizes.med;
  return (
    <>
    {!samePage ? 
    <a className={`${styles} main-btn`} href={link} {...props} >{children}</a> 
    :
    <Link 
    className={`${styles} main-btn`}
    to={link} 
    spy={true}
    smooth={true}
    duration={750}
    {...props}>
    {children}
    </Link> }
    </>
  )
}

export default Button