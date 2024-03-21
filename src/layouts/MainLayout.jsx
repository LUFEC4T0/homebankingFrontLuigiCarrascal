import React from "react";
import Header from "../components/Header"; 
import Footer from "../components/Footer";
import Accounts from "../pages/Accounts";

const MainLayout = (props) => {
  return (
    <>
      <div className="flex flex-col justify-between w-screen h-screen">
          {
            props.children
          }
      </div>
    </>
  );
};

export default MainLayout;
