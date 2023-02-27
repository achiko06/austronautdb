import SectionTitle from '@/components/shared/SectionTitle'
import React from 'react'

const About = () => {
  return (
    <main>
      <article>
        <SectionTitle
          pretitle="About"
          title="DEMO: Electronic records of Astronauts">
        </SectionTitle>
        <div className="container p-1 mx-auto flex w-full flex-col mt-4 items-left justify-center text-left">
          <p className="max-w-2xl py-1 text-sm leading-normal text-gray-500 dark:text-gray-300">December 10, 2022 / 8min read </p>
          <p className="max-w-2xl py-1 text-base leading-normal text-gray-500 dark:text-gray-300">text</p>
        </div> 
      </article>

      <article className="container p-1 mx-auto flex w-full flex-col mt-4 items-left justify-center text-left" >
        <h2>title</h2>
        <p>link to blog post?</p> 
       
        
        <ul>
          <li>item 1</li>
          <li>item 2</li>
        </ul>
      
      </article>
    </main>
  )
}

export default About