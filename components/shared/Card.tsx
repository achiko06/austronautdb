import { NextPage } from 'next';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import Logo from '../../utils/logo.png';

interface IProps {
  data: any;
  heading: string;
  breadcrumbs: any
}

const Card: NextPage<IProps> = ({data, heading, breadcrumbs}) => {
  return (
    <>
        <div className="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
          {/* Breadcrumbs plus header */}
          <div className="mb-4 col-span-full xl:mb-2">
            <nav className="flex mb-5" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
                <li className="inline-flex items-center">
                  <Link href="#" className="inline-flex items-center text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white">
                    <svg className="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>
                    Home
                  </Link>
                </li>
                {breadcrumbs.map((item: any) => (
                  <li key={item._id}>
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                      <Link href={item.href} className={`${item.className}`}>{item.title}</Link>
                    </div>
                  </li>
                ))}
              </ol>
            </nav>
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">{heading}</h1>
          </div>
          {/* Card */}
          <div className="col-span-full xl:col-auto">
            <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
              <div className="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
                <Image
                width={112}
                height={112}
                className='mb-4 rounded-lg w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0'
                src={Logo}
                alt='image'
                />
                <div>
                  <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">{data.name} {data.surname}</h3>
                  <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                    {data.power || data.birthDate ? (
                      <>
                      <p><span className='font-bold'>Power: </span>{data.power || 'N/A'}</p>
                      <p><span className='font-bold'>Birth Date: </span>{data.birthDate || 'N/A'}</p>
                      </>
                    ) : (
                      <p><span className='font-bold'>User Type: </span>{data.usertype || 'N/A'}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}

export default Card