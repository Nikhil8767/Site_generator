import Chatview from '@/app/components/custom/ChatView'
import CodeView from '@/app/components/custom/CodeView'
import AppSideBar from '@/app/components/custom/AppSideBar';

import React from 'react'

const workSpace = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <AppSideBar />

      {/* Main Content */}
      <div className="flex-1 p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Chatview />
          <div className="col-span-2">
            <CodeView />
          </div>
        </div>
      </div>
    </div>
    // <div className='p-10'>
    //     <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
    //         <Chatview/>
    //         <div className='col-span-2'>
    //         <CodeView/>
    //         </div>
            
    //     </div>
    // </div>
  )
}

export default workSpace