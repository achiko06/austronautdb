import Head from 'next/head'
import React, { ReactNode } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

interface Props {
    children: ReactNode
}

const Layout = (props:Props) => {

  return (
    <>
    <Head>
      <title>EEA</title>
      <meta name="description" content="DEMO: Electronic records of Astronauts" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar/>
    <main className={`p-1 md:p-4 min-h-screen z-50`}>
      <div className="md:p-4 border-2 border-gray-200 border-solid rounded-lg dark:border-gray-700 mt-14 min-h-[88vh]">
      {props.children}
      </div>
    </main>
    <Footer/>
    </>
  )
}

export default Layout