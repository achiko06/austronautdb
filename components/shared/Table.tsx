import { NextPage } from 'next'
import Link from 'next/link';
import React, { useState } from 'react'
import Delete from '../modals/Delete';
import Update from '../modals/Update';

interface IProps {
    data: any;
    headers: any;
    onClose: () => void;
    open: Number;
    openEdit: () => void;
    openDelete: () => void;
  }

const Table: NextPage<IProps> = ({data, headers, onClose, open, openEdit, openDelete}) => {
    const [selectedItem, setSelectedItem] = useState<string>("0");

    return (
        <div className="flex flex-col mt-6">
            <div className="overflow-x-auto rounded-lg">
                <div className="inline-block min-w-full align-middle">
                    <div className="overflow-hidden shadow sm:rounded-lg">
                        <Update
                            onClose={onClose}
                            isActive={open === 2}
                            heading={`Update item #${selectedItem.slice(0,8)}`}
                            itemId={selectedItem}
                        />
                        <Delete
                            onClose={onClose}
                            isActive={open === 3}
                            heading={`Are you sure you want to delete item #${selectedItem.slice(0,8)}?`}
                            itemId={selectedItem}
                        />
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                            <thead className="bg-gray-50 dark:bg-gray-700">
                                <tr>
                                {headers.map((header: any) => (
                                    <th key={header._id} scope="col" className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                                    {header.label}
                                    </th>
                                ))}
                                <th scope="col" className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white">
                                    Actions
                                </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white dark:bg-gray-800">

                                {data?.map((item: any) => (
                                <tr key={item._id}>
                                    <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.name}
                                    </td>
                                    <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                        {item.surname}
                                    </td>
                                    <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                        {item.birthDate.slice(0,10)}
                                    </td>
                                    <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                        {item.power}
                                    </td>
                                    
                                    <td className="p-0 whitespace-nowrap">
                                        <Link href={`/profile/${item.slug.current}`}>
                                            <button 
                                                type="button" 
                                                className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-br from-green-200 to-green-600 hover:from-green-400 hover:to-green-800  border border-gray-900 rounded-l-lg">
                                                View
                                            </button>
                                        </Link>
                                        
                                        <button 
                                            type="button"
                                            onClick={(e) => {
                                                setSelectedItem(item._id);
                                                openEdit()
                                            }}
                                            className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-br from-yellow-200 to-yellow-600  border-t border-b border-gray-900 hover:bg-orange-500 hover:from-yellow-400 hover:to-yellow-800 ">
                                            Edit
                                        </button>
                                        <button 
                                            type="button"
                                            value={item._id}
                                            onClick={(e) => {
                                                setSelectedItem(item._id);
                                                openDelete()
                                            }}
                                            className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-br from-red-200 to-red-600 border border-gray-900 rounded-r-md hover:bg-red-500 hover:from-red-400 hover:to-red-800">
                                            Delete
                                        </button> 
                                    </td>
                                </tr>
                                ))}

                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table