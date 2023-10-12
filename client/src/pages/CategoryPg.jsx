import React from "react";
import AddCategory from "../components/AddCategory";
import Navbar from "../components/Navbar";
function CategoryPg() {
  return (
    <>
      <div className="container">
        <div className="row">
          <Navbar />
          <AddCategory />
        </div>
      </div>
    </>
  );
}

export default CategoryPg;
