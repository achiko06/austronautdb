import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Logo from '../../utils/logo.png';
import { GoSignIn } from 'react-icons/go';
import { BiSearch } from 'react-icons/bi';
import { signOut, useSession } from 'next-auth/react';


const Navbar = () => {
    const [showMenu, setShowMenu] = useState<Boolean>(false);
    const [showUserDropdown, setShowUserDropdown] = useState<Boolean>(false);
    const [searchValue, setSearchValue] = useState('');
    const { status, data } = useSession();
    console.log(data?.user)
    const user = data?.user || false

    const handleSearch = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        
        if(searchValue) {
      //  router.push(`/search/${searchValue}`);
        alert("Search functionality is not available for this demo.")
        }
    };

    return (
      <>
      <nav className="fixed top-0 z-50 w-full bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
          <div className="container flex flex-wrap items-center justify-between mx-auto max-w-[2165px]">
              <div className='flex flex-row space-x-1 mt-0'>
                <Link href={'/'}>
                    <div className='flex items-center mt-2 sm:mt-1'>
                    <Image
                    className='cursor-pointer h-6 w-6 mr-3 sm:h-9 sm:w-9'
                    src={Logo}
                    alt='logo'
                    />
                    <span className="self-center text-xs sm:text-xl font-semibold whitespace-nowrap dark:text-white">EEA</span>
                    </div>
                </Link>
              </div>
              <div className="flex md:order-2">
              {/**open search button for small screens */}
              <>
                <button
                    onClick={() => {setShowMenu(!showMenu); setShowUserDropdown(false)}}
                    type="button"
                    className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
                >
                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                    <span className="sr-only">Search</span>
                </button>
                {/**Search bar for large screens */}
                <div className="relative hidden md:block pr-4">
                    <form onSubmit={handleSearch}>
                        <button onClick={handleSearch} className="cursor-pointer absolute inset-y-0 left-0 flex items-center pl-3">
                        <BiSearch className="w-5 h-5 text-gray-500"/>
                        <span className="sr-only">Search icon</span>
                        </button>
                        <input 
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="accounts, tickets, tasks..." 
                        />
                    </form>
                </div>
              </>
              {/**user menu */}
              {user ? (
                <button
                    onClick={() => {setShowUserDropdown(!showUserDropdown); setShowMenu(false)}}
                    type="button" 
                    className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                >
                <span className="sr-only">Open user menu</span>
           {/*     {user?.image && (*/}
                    <>
                    <Image
                        className="rounded-full"
                        src={Logo}
                        alt='user'
                        width={32}
                        height={32}
                    />
                    </>
              {/*  )}*/}
                </button>
              )
              : (
              <div className='pt-1 mr-1'>
                  <Link href={`/auth/login`} 
                      className="flex w-8 h-8 mr-3 text-sm justify-items-center bg-green-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  >
                      <GoSignIn className='rounded-full pl-1 pt-1 w-7 h-7 text-white'/>
                  </Link>
              </div>
              )}
              {/**end user menu */}
              {/**open menu button for small screens */}
              <button
                onClick={() => {setShowMenu(!showMenu); setShowUserDropdown(false)}} 
                type="button" 
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                  <span className="sr-only">Open menu</span>
                  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
              </button>
              </div>
              {/**remove hidden control for small screens */}
              <div className={`${showMenu ? '' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1`}>
              {/**visible on small only SEARCH */}
              <div className="relative mt-3 md:hidden">
                <form onSubmit={handleSearch}>
                    <button onClick={handleSearch} className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <BiSearch className="w-5 h-5 text-gray-500"/>
                    </button>
                    <input 
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)} 
                      className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      placeholder="accounts, tickets, tasks..." 
                    />
                </form>
              </div>
              {/**changes flex type based on screen size */}
              <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link 
                  href={'/'}
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-600 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" 
                  aria-current="page">
                      Home
                  </Link>
                </li>
                <li>
                  <Link 
                  href={'/about'}
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-600 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                      About
                  </Link>
                </li>
              </ul>
              </div>
          </div>
      </nav>
      {/* User Dropdown menu */}
        {user ? ( 
          <div className={`${showUserDropdown ? '' : 'hidden'} z-50 border mx-1 border-gray-200 mt-16 w-full sm:w-1/2 md:w-1/3 xl:w-1/6 fixed right-0 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow`}>
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">{user.name}</span>           
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                    <Link 
                        href={`/settings/user/${1}`}
                        onClick={() => {setShowUserDropdown(false); setShowMenu(false)}} // make this global behavior
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                        Settings
                    </Link>
                </li>
                <li>
                    <button
                        onClick={() => {
                            signOut({ redirect: false })
                            setShowUserDropdown(false);
                            }} 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                            Sign out
                    </button>
                </li>
              </ul>
          </div>
          ) : (
            ""
        )}
      </>
      
    )
}

export default Navbar