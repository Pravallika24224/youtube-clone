import React from 'react'
import youtubeIcon from '../assets/youtube.png'
import { HiOutlineStatusOnline } from "react-icons/hi";
import { HiOutlineStatusOffline } from "react-icons/hi";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import useOnline from '../customHooks/useOnline';
import useTheme from '../customHooks/useTheme';

const Header = () => {
  const isOnline = useOnline();
  const {theme, setTheme} = useTheme()
  return (
    <div className='flex flex-row shadow-md dark:bg-black p-2'>
      <div className='flex flex-row justify-center'>
        <img className='h-6 w-8 m-1' src={youtubeIcon} alt="youtube icon"/>
        <div className='text-2xl font-bold tracking-tighter dark:text-white'>YouTube</div>
      </div>
      <div className="group flex items-center">
        <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#404040] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0 ">
          <div className="w-10 justify-center items-center hidden group-focus-within:md:flex">
            <IoIosSearch className="text-black/[0.7] dark:text-white text-xl" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-44 px-5 bg-transparent outline-none text-black dark:text-white md:pl-0 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
          />
        </div>
        <button
          className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#404040] rounded-r-3xl bg-black/[0.1] dark:bg-white/[0.15]"
        >
          <IoIosSearch className="text-black/[0.9] dark:text-white text-xl" />
        </button>
      </div>
      <div className="flex items-center">
        <div className="hidden md:flex">
          <div
            className={`flex justify-center items-center h-10 w-10 rounded-full ${
              isOnline ? "hover:bg-[#34a0a4]/[0.7]" : "hover:bg-[#f2bad5]/[0.4]"
            }`}
          >
            {isOnline ? (
              <HiOutlineStatusOnline className="text-[#1795a8] dark:text-[#7cf6fd] text-xl" />
            ) : (
              <HiOutlineStatusOffline className="text-[#f74a8a] text-xl" />
            )}
          </div>
          <div
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="flex justify-center items-center ml-2 h-10 w-10 rounded-full hover:bg-black/[0.2] dark:hover:bg-[#303030]/[0.6]"
          >
            {theme === "dark" ? (
              <MdOutlineLightMode className="text-white text-xl cursor-pointer" />
            ) : (
              <MdDarkMode className="text-[#3a5171] text-xl cursor-pointer" />
            )}
          </div>
        </div>
        <div className='rounded-full bg-slate-200 w-10 h-10 flex justify-center mr-2'>
          <div className='flex flex-col justify-center font-medium text-xl'>
            P
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header