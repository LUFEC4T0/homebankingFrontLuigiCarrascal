import React from "react";
import Header from "../components/Header"; 
import Footer from "../components/Footer";
import Accounts from "../pages/Accounts";

const MainLayout = (props) => {
  return (
    <>
      <div className="flex flex-col justify-between w-screen h-screen">
        <Header />
          {
            props.children
          }
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
