import React, { useEffect } from 'react'
import { powers } from '@/utils/dummydata';
import Wrapper from '@/components/shared/Wrapper';
import Counter from '@/components/shared/Counter';
import SectionTitle from '@/components/shared/SectionTitle';
import axios from 'axios';
import { BASE_URL } from '@/utils';
import { Person } from '@/types';
import { useSession, signOut } from "next-auth/react";
import { useRouter } from 'next/router';

interface IProps {
  persons: Person[];
}

export default function Home({ persons }: IProps) {
  const { status, data } = useSession();
  const router = useRouter();
  
  useEffect(() => {
    if (status === "unauthenticated") router.push("/auth/login");
  }, [status, router])
  const astronautCount = persons.length
  const powerCount = powers.length
  const uniquePowers = Array.from(new Set(persons.map((item: any) => item.power))).length
  
  const counterData = [
    {
      title: 'Astronauts',
      id: 1,
      count: astronautCount,
      color: 'bg-gradient-to-br from-green-200 to-green-600',
    },
    {
      title: 'All Powers',
      id: 2,
      count: powerCount,
      color: 'bg-gradient-to-br from-blue-200 to-blue-600',
    },
    {
      title: 'Unique Powers',
      id: 3,
      count: uniquePowers,
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
      h3: "Astronauts",
      span: "Table view",
      _id: 1,
    }
  
  if (data) {
  return (
    <>
      <div>
        <Counter data={counterData}/>

        <SectionTitle
          pretitle="EEA Database"
          title="Electronic records of Astronauts">
          Welcome to the Demo, this website was developed only for demo purposes. Some astronaut names might be made up.
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
  )}
}

export const getServerSideProps = async () => {

  let personRes = await axios.get(`${BASE_URL}/api/item`);

  return {
    props: { 
      persons: personRes.data,
    },
  };
};
