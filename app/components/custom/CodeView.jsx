"use client"
import React, { useState } from 'react'
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackFileExplorer,
} from "@codesandbox/sandpack-react";

const CodeView = () => {
  const [activeTab,setActiveTab]=useState("code");
  return (
    <div>
      <div className='bg-[#181818] w-full p-2 border'>
        <div className='flex items-center flex-wrap shrink-0 bg-black p-1 w-[140px] gap-3 justify-center'>
          <h2  onClick={() => setActiveTab("code")}
          className={`text-sm cursor-pointer ${
            activeTab === "code" &&
            "text-blue-500 bg-blue-500 bg-opacity-25 p-1 px-2 rounded-full"
          }`}>Code</h2>
          <h2 onClick={() => setActiveTab("preview")}
          className={`text-sm cursor-pointer ${
            activeTab === "preview" &&
            "text-blue-500 bg-blue-500 bg-opacity-25 p-1 px-2 rounded-full"
          }`}>Preview</h2>
        </div>
      </div>
      <SandpackProvider template="react" theme={'dark'}>
        <SandpackLayout>
          {activeTab=='code'?<>
          <SandpackFileExplorer style={{ height: '80vh' }} />
          <SandpackCodeEditor style={{ height: '80vh' }} />
          </>:
          <>
          <SandpackPreview style={{ height: '80vh' }} />
          </>}
          
        </SandpackLayout>
      </SandpackProvider>
    </div>
  )
}

export default CodeView