import SectionTitle from '@/components/shared/SectionTitle'
import Head from 'next/head'
import React from 'react'

const About = () => {
  return (
    <>
    <Head>
      <title>About | EEA</title>
      <meta name="description" content="About: Electronic records of Astronauts" />
    </Head>
    <main>
      <article>
        <SectionTitle
          pretitle="About"
          title="DEMO: Electronic records of Astronauts">
            February 2020: Demo project
        </SectionTitle>
        
      </article>

      <article>
        
        <SectionTitle
          pretitle="Use Case"
          title="">
            Simple web application to store astronaut data
        </SectionTitle>
        <div className='container p-1 mx-auto flex w-full flex-col mt-4 items-center justify-start text-start'>
          <ul className='max-w-2xl py-1 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl list-disc list-inside' >
            <li>Name</li>
            <li>Surname</li>
            <li>Birth Date</li>
            <li>Super Power</li>
          </ul>
        </div>
        <SectionTitle
          pretitle="Tech stack"
          title="Frontend">
            Next.js, React, Tailwind CSS
        </SectionTitle>
        <SectionTitle
          pretitle=""
          title="Backend">
            Next.js APIs, REST (GET, POST, PUT, DELETE), Sanity.io for Database, NextAuth.js and next-auth-sanity library for authentication(this needs still some adjustments to make app more secure, but sufficient for demo purposes).
        </SectionTitle>
        
      
      </article>
    </main>
    </>
  )
}

export default About