import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-[#2A2A2A] transition duration-500 px-5">
      <div className='mx-auto max-w-4xl min-h-screen '>
        <Header />
        <main className="animate-fade-in-up">{ children }</main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
