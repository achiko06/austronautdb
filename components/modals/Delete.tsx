import { BASE_URL } from '@/utils';
import axios from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

interface IProps {
    isActive: Boolean;
    onClose: () => void;
    heading: string;
    itemId: string;
  }

const Delete: NextPage<IProps> = ({isActive, onClose, heading, itemId}) => {
  const [deletingPost, setDeletingPost] = useState<Boolean>(false);


  const router = useRouter();

  const handleDelete = async () => {
    if (itemId) {
      setDeletingPost(true);
      alert(`${itemId} was deleted`)
      //await axios.delete(`${BASE_URL}/api/item/${itemId}`)
        
      router.push('/');
    }
  };


  return (
    <div className={`${isActive ? "" : "hidden"} fixed left-0 right-0 z-50 items-center justify-center overflow-x-hidden overflow-y-auto top-1/3 xl:top-36 md:left-1/4 md:top-24 xl:left-1/3 h-modal sm:h-full`}>
        <div className="relative w-full h-full max-w-md px-4 md:h-auto">
              {/* Modal content */}
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-800">
                  
                  {/* Modal body */}
                  <div className="p-6 pt-0 text-center">
                  <svg className="w-16 h-16 mx-auto text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <h3 className="mt-5 mb-6 text-lg text-gray-500 dark:text-gray-400">
                    {heading}
                  </h3>
                  <button
                  disabled={itemId ? false : true}
                  onClick={handleDelete}
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2 dark:focus:ring-red-800">
                    {deletingPost ? 'Deleting...' : 'Yes, Delete'}
                  </button>
                  <button 
                  onClick={onClose} 
                  className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700" data-modal-toggle="delete-user-modal">
                      No, go back
                  </button>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default Delete