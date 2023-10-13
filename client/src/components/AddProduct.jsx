import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";

function AddProduct() {
  const [data, setData] = useState({
    category: "",
    sub_category: "",
    product: "",
    type: "",
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    
  };

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    // axios.get("http://localhost:4000/save/view-category")
    axios.get("https://productlist-04vn.onrender.com/save/view-category")
      .then((res) => {
        setCategories(res.data.data);
        console.log(res);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  const [subCategories, setSubCategories] = useState([]);
  useEffect(() => {
    if (data.category) {
      // axios.get(`http://localhost:4000/save/view-sub_category/${data.category}`)
      axios.get(`https://productlist-04vn.onrender.com/save/view-sub_category/${data.category}`)
        .then((res) => {
          setSubCategories(res.data.data);
          console.log(res);
        })
        .catch((error) => {
          console.error("Error fetching sub-categories:", error);
        });
    }
  }, [data.category]);

  const validate = (event) => {
    event.preventDefault();
    console.log("datas", data);
    axios.post("https://productlist-04vn.onrender.com/save/add-product", data)
    // axios.post("http://localhost:4000/save/add-product", data)
      .then((res) => {
        swal(res.data.message);
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <form className="mt-5">
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Select Category
              </label>
              <select
                onChange={handleChange}
                name="category"
                className="form-control"
                id="category"
                value={data.category}
              >
                <option value="">select</option>
                {categories.map((category, key) => (
                  <option key={key} value={category.category}>
                    {category.category}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="sub_category" className="form-label">
                Select Sub Category
              </label>
              <select
                onChange={handleChange}
                name="sub_category"
                className="form-control"
                id="sub_category"
                value={data.sub_category}
              >
                <option value="">select</option>
                {subCategories.map((sub_category, key) => (
                  <option key={key} value={sub_category.sub_category}>
                    {sub_category.sub_category}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="product" className="form-label">
                Add Product
              </label>
              <input
                onChange={handleChange}
                name="product"
                placeholder="enter product name"
                type="text"
                className="form-control"
                id="product"
                value={data.product}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="type" className="form-label">
                Add Type
              </label>
              <input
                onChange={handleChange}
                name="type"
                placeholder="enter type name"
                type="text"
                className="form-control"
                id="type"
                value={data.type}
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
  );
}

export default AddProduct;
