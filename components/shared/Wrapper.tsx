import { NextPage } from 'next';
import React from 'react'
import Table from './Table'

interface IProps {
    data: any;
    headers: any;
    wrapperTitles: any;
  }

const Wrapper: NextPage<IProps> = ({data, headers, wrapperTitles}) => {
  return (
    <div className="p-4 mt-2 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800"> 
        <div className="items-center justify-between lg:flex">
            <div className="mb-4 lg:mb-0">
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{wrapperTitles.h3}</h3>
                <span className="text-base font-normal text-gray-500 dark:text-gray-400">{wrapperTitles.span}</span>
            </div>
        </div>
        <Table 
            data={data} 
            headers={headers}
        />
    </div>
  )
}

export default Wrapper