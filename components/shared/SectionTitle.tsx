import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
  pretitle: string
  title: string
}

const SectionTitle = (props:Props) => {
  return (
    <div className={`container p-1 mx-auto flex w-full flex-col mt-4 items-center justify-center text-center`}>
      {props.pretitle && (
        <div className="text-sm font-bold tracking-wider text-orange-500 uppercase">
          {props.pretitle}
        </div>
      )}

      {props.title && (
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="max-w-2xl py-1 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          {props.children}
        </p>
      )}
    </div>
    
  );
}

export default SectionTitle