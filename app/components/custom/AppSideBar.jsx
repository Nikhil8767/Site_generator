import React from 'react'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
  } from "@/app/components/ui/sidebar"

const AppSideBar = () => {
  return (
    <Sidebar>
    <SidebarHeader>
      <Image src={'./logo.png'} alt='site logo'/>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup />
      <SidebarGroup />
    </SidebarContent>
    <SidebarFooter />
  </Sidebar>
  )
}

export default AppSideBar