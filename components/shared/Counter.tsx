import { NextPage } from 'next'
import React from 'react'

interface IProps {
    data: any;
  }

const Counter: NextPage<IProps> = ({data}) => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-4">
        {data.map((item: any) => (
            <div key={item.id} className={`flex flex-col items-center justify-center h-24 rounded ${item.color} dark:bg-gray-800`}>
                <p className="text-base md:text-2xl text-gray-800 dark:text-gray-500">{item.title}</p>
                <p className="text-sm md:text-base text-gray-800 dark:text-gray-500 inline-flex items-center justify-center w-3 h-3 p-3 font-medium bg-blue-100 rounded-full dark:bg-blue-900">{item.count}</p>
            </div>
        ))}
    </div>
  )
}

export default Counter