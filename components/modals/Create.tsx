import { NextPage } from 'next'
import React, { useState } from 'react'
import { powers } from '@/utils/dummydata';
import axios from 'axios';
import { useRouter } from 'next/router';
import { BASE_URL } from '@/utils';


interface IProps {
  isActive: Boolean;
  onClose: () => void;
  heading: string;
}

const Create: NextPage<IProps> = ({isActive, onClose, heading}) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [birthDate, setBirthDate] = useState('2023-07-01T18:19:00.000Z')
  const [selectedPower, setSelectedPower] = useState<String>('superSpeed');
  const [savingPost, setSavingPost] = useState<Boolean>(false);

  const router = useRouter();

  const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  
  const userProfile = true

  const handlePost = async () => {
    if (name && surname) {
      setSavingPost(true);

      if (userProfile) {
        const doc = {
          _type: 'person',
          name,
          surname,
          birthDate,
          power: selectedPower,
          slug: { _type: 'slug', current: slugify(name+"-"+surname) }
        };
        await axios.post(`${BASE_URL}/api/item`, doc);
       // alert(doc.name + doc.surname + " " + doc.birthDate)
      } else {
        alert("Not authorized to create a database entry, please login as admin")
      }

      router.push('/');
      setSavingPost(false);
      setName('');
      setSurname('');
      onClose();
    }
  };
  
  return (
    <div className={`${isActive ? "" : "hidden"} fixed left-0 right-0 z-50 items-center justify-center  overflow-x-hidden overflow-y-auto top-4 md:left-1/4 md:top-24 xl:left-1/3 h-full`}>
      <div className="relative w-full h-full max-w-2xl px-4 md:h-auto">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-800">
            {/* Modal header */}
            <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-700">
                <h3 className="text-xl font-semibold dark:text-white">
                    {heading}
                </h3>
                <button
                onClick={onClose}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white" data-modal-toggle="edit-user-modal">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>  
                </button>
            </div>
            {/* Modal body */}
            <div className="p-6 space-y-6">
              <form action="#">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Name
                        </label>
                        <input 
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Surname
                        </label>
                        <input 
                          type="text"
                          value={surname}
                          onChange={(e) => setSurname(e.target.value)}
                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                        />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Date of Birth
                        </label>
                        <input 
                          type="date"
                          value={birthDate}
                          onChange={(e) => setBirthDate(e.target.value)} // + T18:19:00.000Z ?? test if be accepts without T
                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                        />
                    </div>

                    
                    <>
                    <div className="col-span-6 sm:col-span-3">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Select power
                        </label>
                        <select
                        onChange={(e) => {
                        setSelectedPower(e.target.value);
                        }}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                        >
                          {powers.map((item) => (
                            <option
                              key={item._id}
                              value={item.value}
                            >
                              {item.title}
                            </option>
                          ))}
                        </select>
                    </div>
                    </>
                    
                  </div> 
              </form>
            </div>
            {/* Modal footer */}
            <div className="items-center space-x-1 p-6 border-t border-gray-200 rounded-b dark:border-gray-700">
                
                <button
                disabled={name && surname ? false : true}
                onClick={handlePost}
                type='button' 
                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  {savingPost ? 'Creating...' : 'Create'}
                </button>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Create