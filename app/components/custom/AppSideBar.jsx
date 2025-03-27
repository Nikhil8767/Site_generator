"use client"
import React from 'react'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
  } from "@/app/components/ui/sidebar.jsx"

const AppSideBar = () => {
  return (
    <Sidebar>
      <SidebarHeader classname="p-5">
        Image
      </SidebarHeader>
      <SidebarContent >
        <SidebarGroup></SidebarGroup>
        <SidebarGroup></SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSideBar