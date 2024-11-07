// src/components/Layout.js
import React from "react";
import Sidebar from "./Sidebar";
import NavbarComponent from "./NavbarComponents";

const Layout = ({ children }) => {
  return (
    <div>
      <NavbarComponent />
      <div className="flex">
        <Sidebar />
        <main className="ml-60 p-8 flex-1">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
