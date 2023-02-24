import { NextPage } from 'next';
import React, { useState } from 'react'
import { MdCreate } from 'react-icons/md';
import Create from '../modals/Create';
import Table from './Table'

interface IProps {
    data: any;
    headers: any;
    wrapperTitles: any;
  }

const Wrapper: NextPage<IProps> = ({data, headers, wrapperTitles}) => {
  const [activeModal, setActiveModal] = useState<Number>(0);
  
  const handleClose = () => {
    setActiveModal(0)
  };

  const handleOpenEdit = () => {
    activeModal !== 2 ? setActiveModal(2) : setActiveModal(0)
  };

  const handleOpenDelete = () => {
    activeModal !== 3 ? setActiveModal(3) : setActiveModal(0)
  };

  const openModalNumber = activeModal === 2 ? 2 : activeModal === 3 ? 3 : 0
  

  return (
    <div className="p-4 mt-2 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800"> 
        <div className="items-center justify-between lg:flex">
            <div className="mb-4 lg:mb-0">
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{wrapperTitles.h3}</h3>
                <span className="text-base font-normal text-gray-500 dark:text-gray-400">{wrapperTitles.span}</span>
            </div>
            <button 
              type="button"
              onClick={() => {activeModal !== 1 ? setActiveModal(1) : setActiveModal(0)}}  
              className="flex flex-row px-4 py-2 text-sm font-medium text-white bg-gradient-to-br from-blue-200 to-blue-600 hover:from-blue-400 hover:to-blue-800  border border-gray-900 rounded-r-lg rounded-l-lg">
              <MdCreate className='h-6 w-6'/> <span className='ml-1 text-base'>Create</span> 
            </button>
        </div>
        <Table 
          data={data} 
          headers={headers}
          onClose={handleClose}
          open={openModalNumber}
          openEdit={handleOpenEdit}
          openDelete={handleOpenDelete}
        />

        {/**MODALS */}
        <Create
          onClose={handleClose}
          isActive={activeModal === 1}
          heading={"create profile"}
        />

        
        {/**MODALS END */}
    </div>
  )
}

export default Wrapper