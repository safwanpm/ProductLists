import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useParams } from "react-router-dom";
function AddSubCategory() {
  const [data, setdata] = useState(
    {
      category:"",
      sub_category:"",
    }
  );



const [category, setcategory] = useState([])
useEffect(()=>{
    axios.get('http://localhost:4000/save/view-category').then((res)=>{
        console.log(res)
        setcategory(res.data.data);
    })
},[])
  const SetDetails = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setdata({ ...data, [name]: value });
  };
  console.log(data);
  const validate = (event) => {
    event.preventDefault()
    console.log("datas", data);
    axios.post('http://localhost:4000/save/add-sub_category', data).then((res) => {
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
                  Select Category
                </label>
                <select
                  onChange={SetDetails}
                  type="text"
                  name="category"
                  className="form-control box-shadow"
                  id="exampleInputPassword1"
                >
                  <option value="">select</option>
              
                  {category.map((cat, key) => (
                    <option value={cat.id}>{cat.category}</option>
                  ))}
                </select>
              </div>



              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Add SubCategory
                </label>
                <input
                  onChange={SetDetails}
                  name="sub_category"
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

export default AddSubCategory;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import swal from "sweetalert";

// function AddSubCategory() {
//   const [data, setData] = useState({
//     category: "",
//     sub_category: ""
//   });

//   const [category, setCategory] = useState([]);

//   useEffect(() => {
//     // Use an async function for cleaner code
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:4000/save/view-category');
//         setCategory(response.data.data);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     fetchData(); // Call the async function
//   }, []);

//   const setDetails = (e) => {
//     const { name, value } = e.target;
//     setData({ ...data, [name]: value });
//   };

//   const validate = (event) => {
//     event.preventDefault();
//     console.log("data", data);

//     axios.post("http://localhost:4000/save/sub_category", data)
//       .then((res) => {
//         console.log("res", res);
//         swal(res.data.message);
//       })
//       .catch((error) => {
//         console.error("Error adding subcategory:", error);
//       });
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-lg-3"></div>
//         <div className="col-lg-6">
//           <form className="mt-5">
//             <div className="mb-3">
//               <label htmlFor="exampleInputPassword1" className="form-label">
//                 Select Category
//               </label>
//               <select
//                 onChange={setDetails}
//                 value={data.category} // Make sure to set the value of the select element
//                 name="category"
//                 className="form-control"
//                 id="exampleInputPassword1"
//               >
//                 <option value="">Select</option>
//                 {category.map((cat, key) => (
//                   <option key={key} value={cat.id}>
//                     {cat.category}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className="mb-3">
//               <label htmlFor="exampleInputPassword1" className="form-label">
//                 Add SubCategory
//               </label>
//               <input
//                 onChange={setDetails}
//                 value={data.sub_category} // Make sure to set the value of the input element
//                 name="sub_category"
//                 placeholder="Enter category name"
//                 type="text"
//                 className="form-control"
//                 id="exampleInputPassword1"
//               />
//             </div>

//             <button type="submit" onClick={validate} className="btn btn-primary">
//               Submit
//             </button>
//           </form>
//         </div>
//         <div className="col-lg-3"></div>
//       </div>
//     </div>
//   );
// }

// export default AddSubCategory;
