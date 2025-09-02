// src/components/Layout.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      {/* Common components */}
      <Navbar />

      {/* Yahan har page ka content render hoga */}
      <Outlet />

      {/* Common footer */}
      <Footer />
    </>
  );
}

export default Layout;
