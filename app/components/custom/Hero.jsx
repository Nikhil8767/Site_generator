"use client"
import { MessagesContext } from '@/app/context/MessagesContext';
import { UserDetailContext } from '@/app/context/UserDetailContext';
import Color from '@/app/data/Color';
import Lookup from '@/app/data/Lookup'
import { ArrowRight } from 'lucide-react'
import React, { useContext, useState } from 'react'
import { FaLink } from "react-icons/fa";
import SignInDialog from './SignInDialog';

const Hero = () => {
    const [userInput,setUserInput]=useState();
    const {messages,setMessages}=useContext(MessagesContext);
    const {userDetail,steUserDetail}=useContext(UserDetailContext);
    const [openDialog,setOpenDialog]=useState(false);
    const onGenerate=(input)=>{
        if(!userDetail?.name){
            setOpenDialog(true);
        }
        setMessages({
            role:'user',
            content:input
        })
    }
    return (
        <div className='flex flex-col items-center mt-36 xl:mt-52 gap-2'>
            <h2 className='font-bold text-4xl'>{Lookup.HERO_HEADING}</h2>
            <p className='text-gray-400 font-medium'>{Lookup.HERO_DESC}</p>
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
            <div className='flex flex-wrap max-w-2xl items-center justify-center gap-3'>
                {Lookup ?.SUGGSTIONS.map((suggestion,index)=>(
                    <h2 key={index} onClick={()=>onGenerate(suggestion)}
                     className='p-1 px-2 border rounded-full text-sm 
                    text-gray-400 hover:text-white cursor-pointer '>{suggestion}</h2>
                ))}
            </div>
            <SignInDialog openDialog={openDialog} closeDialog={(v)=>setOpenDialog(v)}/>
        </div>
    )
}

export default Hero