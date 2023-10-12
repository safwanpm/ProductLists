import React from "react";
import AddSubCategory from "../components/AddSubCategory";
import Navbar from "../components/Navbar";

function SubCatPg() {
  return (
    <>
      <div className="container">
        <div className="row">
          <Navbar />
          <AddSubCategory />
        </div>
      </div>
    </>
  );
}

export default SubCatPg;
