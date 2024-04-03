// import React from "react";
// import axios from "axios";

// import { Link } from "react-router-dom";

// import "../styles/EditAndDelete.css";

// export default function EditAndDelete(bladeId) {
//   const URL = import.meta.env.VITE_BACKEND_URL;
//   const deleteArticle = () => {
//     axios
//       .delete(`${URL}/api/blade${bladeId}`)
//       .then(() => {
//         console.info("Blade deleted successfully.");
//       })
//       .catch((error) => console.error(error));
//   };
//   return (
//     <div className="EditAndDelete">
//       <Link to="/editBlade">
//         <button type="button">Edit</button>
//       </Link>
//       <button type="button" onClick={deleteArticle}>
//         Delete
//       </button>
//     </div>
//   );
// }
