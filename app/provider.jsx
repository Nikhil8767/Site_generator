"use client"
import React, { useEffect, useState } from 'react'
// import { ThemeProvider } from "@/components/theme-provider"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import Header from './components/custom/Header'
import { MessagesContext } from './context/MessagesContext'
import { UserDetailContext } from './context/UserDetailContext'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useConvex } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { Sidebar } from 'lucide-react'
import AppSideBar from './components/custom/AppSideBar'



function Provider  ({ children }) {
    const [messages,setMessages]=useState([]);
    const [userDetail,setUserDetail]=useState(null);
    const convex=useConvex();

    useEffect(()=>{
        isAuthenticated();
    },[])

    const isAuthenticated=async()=>{
        if(typeof window!=undefined)
        {
            const user=JSON.parse(localStorage.getItem('user'))
            const result=await convex.query(api.user.GetUser,{
                email:user?.email
            })
            setUserDetail(result);
            console.log(result);
            
        }
    }



    return (
        <div>
            <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID_KEY}>
            <UserDetailContext.Provider value={{userDetail,setUserDetail}}>
            <MessagesContext.Provider value={{messages,setMessages}}>
                <NextThemesProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Header />
                    <AppSideBar/>
                    <SidebarProvider>
                    {children}
                    </SidebarProvider>
                </NextThemesProvider>
            </MessagesContext.Provider>
            </UserDetailContext.Provider>
            </GoogleOAuthProvider>
        </div>
    )
}

export default Provider