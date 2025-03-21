"use client"
import { MessagesContext } from '@/app/context/MessagesContext';
import { UserDetailContext } from '@/app/context/UserDetailContext';
import Color from '@/app/data/Color';
import { api } from '@/convex/_generated/api';
import { useConvex } from 'convex/react';
import { useQuery } from 'convex/react';
import { useParams } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image';
import { FaLink } from 'react-icons/fa';
import { ArrowRight } from 'lucide-react';
import Lookup from '@/app/data/Lookup';

const Chatview = () => {
     const {id}=useParams();
     const convex=useConvex();
     const {userDetail,setUserDetail}=useContext(UserDetailContext)
     const {messages,setMessages}=useContext(MessagesContext)
     const [userInput,setUserInput]=useState();

    


     const GetWorkspaceData=async()=>{
        const result=await convex.query(api.workSpace.GetWorkspace,{
            workSpaceId:id
        })
        setMessages(result?.messages)
        console.log(result);
        
     }

     useEffect(()=>{
        id&&GetWorkspaceData();
      },[id])

  return (
    <div className='relative h-[85vh] flex flex-col'>
        <div className='flex-1 overflow-y-scroll'>
            {(messages || [])?.map((msg,index)=>(
                <div key={index} className='p-3 rounded-lg mb-2 flex gap-2 items-start'
                style={{
                    backgroundColor:Color.CHAT_BACKGROUND
                }}>
                    {msg?.role==='user'&& (<Image src={userDetail?.picture} alt='userImage' width={35} height={35}
                        className='rounded-full'/>)}
                    <h2>{msg.content}</h2>
                </div>
            ))}
        </div>

        {/* input section  */}
        <div className='p-5 border rounded-xl max-w-xl w-full mt-3
             ' style={{backgroundColor:Color.BACKGROUND}}>
                <div className='flex gap-2'>
                    <textarea placeholder={Lookup.INPUT_PLACEHOLDER}
                    onChange={(e)=>setUserInput(e.target.value)} className='outline-none bg-transparent w-full h-32 m-h-56 resize' />
                    {userInput&& <ArrowRight onClick={()=>onGenerate(userInput)}
                    className='bg-blue-500 p-2 h-8 w-8 rounded-md cursor-pointer'/>}
                </div>
                <div>
                <FaLink />
                </div>
            </div>
    </div>
  )
}

export default Chatview