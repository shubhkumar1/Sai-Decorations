'use client';

import React, { createContext, useContext, useState } from 'react';

interface AdminSidebarContextType {
  mobileOpen: boolean;
  toggleMobile: () => void;
  closeMobile: () => void;
}

const AdminSidebarContext = createContext<AdminSidebarContextType>({
  mobileOpen: false,
  toggleMobile: () => {},
  closeMobile: () => {}
});

export const AdminSidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <AdminSidebarContext.Provider
      value={{
        mobileOpen,
        toggleMobile: () => setMobileOpen((prev) => !prev),
        closeMobile: () => setMobileOpen(false)
      }}
    >
      {children}
    </AdminSidebarContext.Provider>
  );
};

export const useAdminSidebar = () => useContext(AdminSidebarContext);
