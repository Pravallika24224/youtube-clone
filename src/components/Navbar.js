import React from 'react'
import { navbarItems } from '../utils/navbarItems'
import NavbarItem from './NavbarItem'

const Navbar = ({selectedCategory, setSelectedCategory}) => {

  const handleClick = (name, type) => {
    switch (type) {
      case "category":
        return setSelectedCategory(name);
      case "home":
        return setSelectedCategory(name);
      case "menu":
        return false;
      default:
        break;
    }
  };

  return (
    <div
      className={`w-[240px] md:block overflow-y-auto h-full py-4 bg-black md:bg-white dark:bg-black absolute md:relative z-10  md:translate-x-0 transition-all}`}
    >
      {navbarItems.map(item => {
        return (
          <div key={item.name}>
            <NavbarItem
              name={item.name}
              icon={item.icon}
              onClick={() => handleClick(item.name, item.type)}
            />
            {item.divider && (
              <hr className="my-5 border-white/[0.2] md:border-black/[0.2] border dark:border dark:border-white/[0.2]" />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Navbar