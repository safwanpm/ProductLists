import React, { useState } from "react";
import axios from "axios";
import swal from 'sweetalert'
import { useParams } from "react-router-dom";

function AddCategory() {
  const [data, setdata] = useState();

  const SetDetails = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setdata({ ...data, [name]: value });
  };
  console.log(data);
  const validate = (e) => {
    e.preventDefault()
    console.log("datas", data);
    axios.post("http://localhost:4000/save/add-category", data).then((res) => {
      console.log("res", res);
      swal(res.data.message)
    });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <form className="mt-5">
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Add Category
                </label>
                <input
                  onChange={SetDetails}
                  name="category"
                  placeholder="enter category name"
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              
              <button
                type="submit"
                onClick={validate}
                className="btn btn-primary form-control"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
    </>
  );
}

export default AddCategory;
