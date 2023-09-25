// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Member = ({ token }) => {
//   const [memberDetails, setMemberDetails] = useState({});
//   const [target, setTarget] = useState(10000006); // Ganti dengan nilai default yang sesuai

//   useEffect(() => {
//     const fetchMemberDetails = async () => {
//       try {
//         const response = await axios.post(
//           'http://localhost:3000/v1/member/describe', // Ganti sesuai alamat server Anda
//           { target },
//           {
//             headers: {
//               'X-Auth-Token': token,
//             },
//           }
//         );
//         setMemberDetails(response.data);
//       } catch (error) {
//         console.error('Failed to fetch member details:', error);
//       }
//     };

//     if (token) {
//       fetchMemberDetails();
//     }
//   }, [token, target]);

//   return (
//     <div className="container mt-5">
//     <h2 className="form-label text-white">Profile</h2>
//     <div className="card">
//       <div className="card-body">
//         {/* <h5 className="card-title">User Details</h5> */}
//         <p className="card-text text-start text-white"><strong>Username:</strong> {memberDetails.username}</p>
//         <p className="card-text text-start text-white"><strong>Email:</strong> {memberDetails.email}</p>
//         <p className="card-text text-start text-white"><strong>Mobile Number:</strong> {memberDetails.number}</p>
//       </div>
//     </div>
//   </div>
//   );
// };

// export default Member;
