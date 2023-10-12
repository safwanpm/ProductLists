import axios from "axios";
import React, { useEffect, useState } from "react";


function HomeBg() {
  const HandleCategory = () => {};

  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/save/view-category")
      .then((res) => {
        console.log(res);
        setCategory(res.data.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  return (
    <div className="container mb-5 justify-center align-center mt-5">
      <div className="row" id="">
        <div className="col-lg-6">
          <div className="dropdown">
            <a
              className="btn btn-primary card"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Product
            </a>
            <ul className="dropdown-menu ">
              <li>
                {category.map((cat, key) => (
                  <div className="card" style={{ width: "" }}>
                    <div className="card-body" onClick={HandleCategory}>
                      <h4 key={key}>{cat.category}</h4>
                    </div>
                  </div>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBg;
