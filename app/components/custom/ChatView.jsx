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
import { ArrowRight, Loader2Icon } from 'lucide-react';
import Lookup from '@/app/data/Lookup';
import axios from 'axios';
import Promt from '@/app/data/Promt';
// import { run } from '.../configs/AiModel.jsx'; 
import Prompt from '@/app/data/Prompt';

const Chatview = () => {
     const {id}=useParams();
     const convex=useConvex();
     const {userDetail,setUserDetail}=useContext(UserDetailContext)
     const {messages,setMessages}=useContext(MessagesContext)
     const [userInput,setUserInput]=useState();
     const [loading,setLoading]=useState(false);

    
     useEffect(()=>{
        id&&GetWorkspaceData();
      },[id])

     const GetWorkspaceData=async()=>{
        const result=await convex.query(api.workSpace.GetWorkspace,{
            workSpaceId:id
        })
        setMessages(result?.messages)
        console.log(result);
        
     }

     useEffect(()=>{
        if(messages?.length>0){
            const role=messages[messages?.length-1].role;

            if(role=='user'){
                GetAiResponse();
            }
        }
     },[messages])


     const GetAiResponse=async()=>{
        setLoading(true)
        const PROMPT=JSON.stringify(messages)+Prompt.CHAT_PROMPT;
        const result=await axios.post('/api/ai-chat',{
            prompt:PROMPT
        },{
            headers: { 'Content-Type': 'application/json' }
        });
        console.log(result.data.result);

        setMessages(prev=>[...prev,{
            role:'ai',
            content:result.data.result
        }])
        setLoading(false)
     }

     const onGenerate=(input)=>{
        setMessages(prev=>[...prev,{
            role:'user',
            content:input
        }])
     }

    

  return (
    <div className='relative h-[85vh] flex flex-col'>
        <div className='flex-1 overflow-y-scroll scrollbar-hide'>
            {(messages || [])?.map((msg,index)=>(
                <div key={index} className='p-3 rounded-lg mb-2 flex gap-2 items-start leading-7'
                style={{
                    backgroundColor:Color.CHAT_BACKGROUND
                }}>
                    {msg?.role==='user'&& (<Image src={userDetail?.picture} alt='userImage' width={35} height={35}
                        className='rounded-full'/>)}
                    <h2>{msg.content}</h2>
                   
                </div>
            ))}
            {loading&& <div className='p-3 rounded-lg mb-2 flex gap-2 items-start'
            style={{
                backgroundColor:Color.CHAT_BACKGROUND
            }}>
                        <Loader2Icon className='animate-spin'/>
                        <h2>generating response...</h2>
                    </div>}
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