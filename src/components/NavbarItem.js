import React from 'react'

const NavbarItem = ({name, icon, onClick}) => {
  return (
    <div
      className={
        "flex items-center h-10 px-3 text-white md:text-black dark:text-white text-sm cursor-pointer mb-[1px] rounded-lg hover:bg-white/[0.15] md:hover:bg-black/[0.15] dark:hover:bg-white/[0.15] " 
        // + className
      }
      onClick={onClick}
    >
      <span className="text-xl mr-5">{icon}</span>
      {name}
    </div>
  )
}

export default NavbarItem