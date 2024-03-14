"use client";
import React, { useState, ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Header2 from "../Header/header";

export default function Layout2({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
          <Header2/>
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
        <footer className="footer footer-center p-4 bg-white shadow-10 text-base-content">
  <aside>
    <p>Copyright © 2024 <a href="/landingpage" className="text-[#f15a23]">IdeaBox BNI</a> - All right reserved by PT Bank Negara Indonesia (Persero) Tbk</p>
  </aside>
</footer>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </>
  );
}
