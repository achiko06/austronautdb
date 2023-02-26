import React, { useState } from 'react'
import { austronauts, powers } from '@/utils/dummydata';
import Wrapper from '@/components/shared/Wrapper';
import Counter from '@/components/shared/Counter';
import SectionTitle from '@/components/shared/SectionTitle';
import axios from 'axios';
import { BASE_URL } from '@/utils';
import { Person } from '@/types';

interface IProps {
  persons: Person[];
}

export default function Home({ persons }: IProps) {
  const astronautCount = persons.length
  const powerCount = powers.length
  const total = astronautCount + powerCount

  const counterData = [
    {
      title: 'Astronauts',
      id: 1,
      count: astronautCount,
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

  const tableTitles = 
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
          title="Test">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptate maiores et impedit aliquam porro ratione temporibus neque recusandae eum 
        </SectionTitle>

        {/**MAIN TABLE */}
        <Wrapper 
        data={persons} 
        headers={titles}
        wrapperTitles={tableTitles}
        />
        {/**MAIN TABLE END*/}
      </div>
    </>
  )
}

export const getServerSideProps = async () => {

  let personRes = await axios.get(`${BASE_URL}/api/item`);

  return {
    props: { 
      persons: personRes.data,
    },
  };
};
