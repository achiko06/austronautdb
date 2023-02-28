import Card from '@/components/shared/Card'
import { IUser } from '@/types';
import { BASE_URL } from '@/utils';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

interface IProps {
  userDetails: IUser;
}

const User = ({ userDetails }: IProps) => {
  const { status, data } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === "unauthenticated") router.push("/auth/login");
  }, [status, router]);

  const data1 = 
    {
      _id: 1,
      title: 'nameuser',
      name: 'test',
      surname: 'testtt',
      type: 'test'
    }
   

  const breadcrumbs = [
    {
      _id: 1,
      title: 'Settings',
      href: '/',
      className: 'ml-1 text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-300 dark:hover:text-white',
    },
    {
      _id: 2,
      title: userDetails.name,
      href: '',
      className: 'ml-1 text-gray-400 md:ml-2 dark:text-gray-500',
    },
  ];

  if (status === "authenticated") {
  return (
    <div>
     <Card 
      data={userDetails}
      heading={'User Profile'}
      breadcrumbs={breadcrumbs}
      />
    </div>
  )}
}

export const getServerSideProps = async ({
  params: { email },
}: {
  params: { email: string };
}) => {
  const res = await axios.get(`${BASE_URL}/api/user/${email}`);

  return {
    props: { userDetails: res.data.user },
  };
};

export default User