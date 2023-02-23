import React, { useState } from 'react'
import Create from '@/components/modals/Create';
import { austronauts } from '@/utils/dummydata';
import { MdCreate } from 'react-icons/md';
import Wrapper from '@/components/shared/Wrapper';

export default function Home() {
  const [activeCreateModal, setActiveCreateModal] = useState<Number>(0);

  const titles = [
    {
      label: "Name",
      _id: 1,
    },
    {
      label: "Surname",
      _id: 2,
    },
    {
      label: "Date of Birth",
      _id: 3,
    },
    {
      label: "Super Power",
      _id: 4,
    },
  ];

  const wrapperTitles = 
    {
      h3: "Austronauts",
      span: "Some title",
      _id: 1,
    }
  
  
  return (
    <>
      <div>
        <h1 className="bg-gray-900 text-white">Heading</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptate maiores et impedit aliquam porro ratione temporibus neque recusandae eum repellat non nostrum, voluptas nihil labore dolores maxime sint assumenda.</p>
        
        <li className='flex flex-row space-x-5 py-1 pl-3 pr-4'>
          <button
            onClick={() => {activeCreateModal !== 1 ? setActiveCreateModal(1) : setActiveCreateModal(0)}} 
            className="text-green-600 font-bold hover:scale-125 hover:text-green-800 flex flex-row" 
          >
            <MdCreate/> Create 
          </button>
        </li>
        <Create
          onClose={() => setActiveCreateModal(0)}
          isActive={activeCreateModal === 1}
          heading={"create profile"}
        />
        <Wrapper 
        data={austronauts} 
        headers={titles}
        wrapperTitles={wrapperTitles}
        />
      </div>
    </>
  )
}
