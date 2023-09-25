import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './custom.css';

const Profile = () => {
  const [userDetails, setUserDetails] = useState({});
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (token) {
      axios
        .post('http://localhost:3000/v1/member/describe', {
          target: 10000006,
        }, {
          headers: {
            'X-Auth-Token': token,
          },
        })
        .then((response) => {
          setUserDetails(response.data);
          console.log(response);
        })
        .catch((error) => {
          console.error('Error fetching user details:', error);
          // Handle token expiration or other errors here
        });
    }
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="form-label text-white">Profile</h2>
      <div className="card">
        <div className="card-body">
          <p className="card-text text-start text-white"><strong>Username:</strong> {userDetails.username}</p>
          <p className="card-text text-start text-white"><strong>Email:</strong> {userDetails.email}</p>
          <p className="card-text text-start text-white"><strong>Mobile Number:</strong> {userDetails.mobile}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
