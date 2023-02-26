import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

const Footer = () => {
  const { pathname } = useRouter();
  const navigation = [
    "Product",
    "Features",
    "Pricing",
  ];
  const legal = ["Terms", "Privacy", "Cookies"];

  return (
    <footer className={`p-4 mx-1 md:mx-4 border-2 bg-white border-gray-200 border-solid rounded-lg dark:border-gray-700 my-1 min-h-[12vh]`}>
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-0 mx-auto mt-0 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="max-w-md mt-4 text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur rerum nobis aspernatur, vitaeestiae dignissimos doloremque esse officia, eaque hic.
            </div>
          </div>

          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {navigation.map((item, index) => (
                <Link key={index} href="#" className="w-full px-4 py-2 text-gray-600 rounded-md dark:text-gray-300 hover:text-green-600 focus:text-green-600 focus:outline-none dark:focus:bg-trueGray-700">
                    {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              {legal.map((item, index) => (
                <Link key={index} href="#" className="w-full px-4 py-2 text-gray-600 rounded-md dark:text-gray-300 hover:text-green-600 focus:text-green-600 focus:outline-none dark:focus:bg-trueGray-700">
                    {item}
                  
                </Link>
              ))}
            </div>
          </div>
          
        </div>
        <div className="my-5 text-sm text-center text-gray-600 dark:text-gray-400">
           © {new Date().getFullYear()}{" "}
           Made for demo only by{" "}
          <Link
            href="https://ravenholmdev.com/author/archie"
            target="_blank"
            className='font-semibold hover:text-green-600'
            rel="noopener">
            Archie_
          </Link>
        </div>
    </footer>
  )
}

export default Footer