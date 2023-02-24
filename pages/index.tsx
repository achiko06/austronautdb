import React, { useState } from 'react'
import Create from '@/components/modals/Create';
import { austronauts } from '@/utils/dummydata';
import { MdCreate } from 'react-icons/md';
import Wrapper from '@/components/shared/Wrapper';
import Counter from '@/components/shared/Counter';
import SectionTitle from '@/components/shared/SectionTitle';
import DeleteModal from '@/components/modals/Delete';
import Delete from '@/components/modals/Delete';

export default function Home() {
  
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

        <SectionTitle
          pretitle="EEA Database"
          title="Austronauts">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptate maiores et impedit aliquam porro ratione temporibus neque recusandae eum 
        </SectionTitle>

        {/**MAIN TABLE */}
        <Wrapper 
        data={austronauts} 
        headers={titles}
        wrapperTitles={wrapperTitles}
        />
        {/**MAIN TABLE END*/}
      </div>
    </>
  )
}
