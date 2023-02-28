import Card from '@/components/shared/Card'
import { Person } from '@/types';
import { BASE_URL } from '@/utils';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React,  { useEffect } from 'react'

interface IProps {
  personDetails: Person;
}

const Profile = ({ personDetails }: IProps) => {
  const { status, data } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === "unauthenticated") router.push("/auth/login");
  }, [status]);
  const personId = personDetails._id.slice(0,8)
  const breadcrumbs = [
    {
      _id: 1,
      title: 'Profiles',
      href: '/',
      className: 'ml-1 text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-300 dark:hover:text-white',
    },
    {
      _id: 2,
      title: personId,
      href: '',
      className: 'ml-1 text-gray-400 md:ml-2 dark:text-gray-500',
    },
  ];

  if (status === "authenticated") {
  return (
    <div>
      <Card 
      data={personDetails}
      heading={'Astronaut Profile'}
      breadcrumbs={breadcrumbs}
      />
    </div>
  )}
}

export default Profile

export const getServerSideProps = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const res = await axios.get(`${BASE_URL}/api/item/${slug}`);

  return {
    props: { personDetails: res.data },
  };
};