import Card from '@/components/shared/Card'
import React from 'react'

const User = () => {
  const data = 
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
      title: 'test',
      href: '',
      className: 'ml-1 text-gray-400 md:ml-2 dark:text-gray-500',
    },
  ];

  return (
    <div>
     <Card 
      data={data}
      heading={'User Profile'}
      breadcrumbs={breadcrumbs}
      />
    </div>
  )
}

export default User