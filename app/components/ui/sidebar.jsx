import React, { createContext, useContext, useState } from "react";

// Create Sidebar Context
const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen }}>
      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        {children}
      </div>
    </SidebarContext.Provider>
  );
};

// Hook for Sidebar Context
export const useSidebar = () => useContext(SidebarContext);

// Sidebar Components
export const Sidebar = ({ children }) => <aside className="sidebar">{children}</aside>;

export const SidebarHeader = () => <div className="sidebar-header">Header</div>;

export const SidebarContent = ({ children }) => <div className="sidebar-content">{children}</div>;

export const SidebarGroup = ({ children }) => <div className="sidebar-group">{children}</div>;

export const SidebarFooter = () => <div className="sidebar-footer">Footer</div>;
