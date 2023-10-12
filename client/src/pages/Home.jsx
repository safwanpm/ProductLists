import React from "react";
import HomeBg from "../components/HomeBg";
import AddProduct from "../components/AddProduct";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
        <Navbar />
      <HomeBg />
        </div>
      </div>
    
      {/* <AddProduct/> */}
    </>
  );
}

export default Home;
