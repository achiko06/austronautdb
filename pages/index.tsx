import React, { useState } from 'react'
import Create from '@/components/modals/Create';
import { austronauts } from '@/utils/dummydata';
import { MdCreate } from 'react-icons/md';
import Wrapper from '@/components/shared/Wrapper';
import Counter from '@/components/shared/Counter';

export default function Home() {
  const [activeCreateModal, setActiveCreateModal] = useState<Number>(0);

  
  const austronautCount = austronauts.length
  const powerCount = 1
  const total = austronautCount + powerCount

  const counterData = [
    {
      title: 'Austronauts',
      id: 1,
      count: austronautCount,
      color: 'bg-gradient-to-br from-green-200 to-green-600',
    },
    {
      title: 'Powers',
      id: 2,
      count: powerCount,
      color: 'bg-gradient-to-br from-blue-200 to-blue-600',
    },
    {
      title: 'Total',
      id: 3,
      count: total,
      color: 'bg-gradient-to-br from-yellow-200 to-yellow-600',
    },
    
  ]

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
        <Counter data={counterData}/>
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
