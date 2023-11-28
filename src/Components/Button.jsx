import React from 'react'

function Button({ children, size, link, ...props }) {
    const sizes = {
        med: "py-[15px] px-[30px] rounded-full text-[20px] font-semibold",
        sm: "py-[15px] px-[30px] rounded-full text-[16px] font-semibold"
    }
    const styles = sizes[size] || sizes.med;
  return (
   <a className={`${styles} main-btn`} href={link} {...props} >{children}</a>
  )
}

export default Button