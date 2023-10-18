// import axios from "axios";
// import React, { useEffect, useState } from "react";

// function HomeBg() {
//   const [data, setdata] = useState({})
//   const HandleCategory = () => {};

//   const [categories, setCategories] = useState([]);
//   useEffect(() => {
//     // axios.get("http://localhost:4000/save/view-category")
//     axios
//       .get("https://productlist-04vn.onrender.com/save/view-category")
//       .then((res) => {
//         setCategories(res.data.data);
//         console.log(res);
//       })
//       .catch((error) => {
//         console.error("Error fetching categories:", error);
//       });
//   }, []);

//   const [subCategories, setSubCategories] = useState([]);
//   useEffect(() => {
//     if (data.category) {
//       // axios.get(`http://localhost:4000/save/view-sub_category/${data.category}`)
//       axios
//         .get(
//           `https://productlist-04vn.onrender.com/save/view-sub_category/${data.category}`
//         )
//         .then((res) => {
//           setSubCategories(res.data.data);
//           console.log(res);
//         })
//         .catch((error) => {
//           console.error("Error fetching sub-categories:", error);
//         });
//     }
//   }, [data.category]);

//   return (
//     <div className="container mb-5 justify-center align-center mt-5">
//       <div className="row" id="">
//         <div className="col-lg-6">
//           <div className="dropdown">
//             <a
//               className="btn btn-primary card"
//               role="button"
//               data-bs-toggle="dropdown"
//               aria-expanded="false"
//             >
//               Product
//             </a>
//             <div>
//             <select
//                 onChange={HandleCategory}
//                 name="category"
//                 className="form-control"
//                 id="category"
//                 value={data.category}
//               >
//                 <option value="">select</option>
//                 {categories.map((category, key) => (
//                   <option key={key} value={category.category}>
//                     {category.category}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div>
//             <select
//                 onChange={HandleCategory}
//                 name="sub_category"
//                 className="form-control"
//                 id="sub_category"
//                 value={data.sub_category}
//               >
//                 <option value="">select</option>
//                 {subCategories.map((sub_category, key) => (
//                   <option key={key} value={sub_category.sub_category}>
//                     {sub_category.sub_category}
//                   </option>
//                 ))}
//               </select>
//             </div>
           
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HomeBg;
