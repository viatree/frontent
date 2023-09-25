import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './custom.css';

const Login = ({ setToken }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Initialize showPassword to false
  const [countryCode, setCountryCode] = useState('60');
  const [errorMessage, setErrorMessage] = useState(''); // State for error message
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!user || !password) {
      setErrorMessage('Please enter both user and password.'); // Show missing user/password message
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/v1/auth/login', {
        user: countryCode + user,
        password: password,
      });
      console.log(response.data.status);
      navigate('/profile/' + response.data.user_id, {
        state: { token: response.data['X-Auth-Token'] },
      });
      setErrorMessage(''); // Clear any previous error message
    } catch (error) {
      console.error('Login error:', error);
      console.log(error);
      setErrorMessage('Incorrect user or password.'); // Show incorrect user/password message
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="col-md-6 col-sm-12">
          <form onSubmit={handleLogin}>
            {/* Error message */}
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

            <div className="mb-3">
              <label className="form-label text-white">Your Mobile Number</label>
              <div className="input-group">
                <span className="input-group-text bg-transparent text-white border-danger border-end-0">
                  <select
                    className="form-select border-0 p-0"
                    name="country_code"
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                  >
                    <option value="60">+60</option>
                  </select>
                </span>
                <input
                  type="text"
                  className="form-control bg-transparent text-white border-danger"
                  id="user"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  placeholder="Phone Number"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label text-white">
                Password
              </label>
              <div className="input-group">
                <span className="input-group-text bg-transparent text-white border-danger border-start-0 br-r-20">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginRight: '10px' }}
                  >
                    <path
                      d="M12 2C9.243 2 7 4.243 7 7v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7c0-2.757-2.243-5-5-5zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7zm4 10.723V20h-2v-2.277a1.993 1.993 0 0 1 .567-3.677A2.001 2.001 0 0 1 14 16a1.99 1.99 0 0 1-1 1.723z"
                    ></path>
                    
                  </svg>
                    <path
                    d="M25 7.1a.997.997 0 0 0-1.39-.01C20.49 9.27 18 13.36 18 15.5C18 16.88 19.12 18 20.5 18s2.5-1.12 2.5-2.5c0-2.15-2.49-6.24-5.61-8.39a1 1 0 0 0-.89-.11a.996.996 0 0 0-.5.47z"
                    fill="#626262"
                  ></path>
                  <circle cx="20.5" cy="14.5" r="2.5" fill="#626262"></circle>
                </span>
                <input
                  type={showPassword ? 'text' : 'password'} // Use showPassword to toggle between 'text' and 'password'
                  className="form-control bg-transparent border-start-0 border-end-0 border-danger text-white"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  autoComplete="off"
                  maxLength="20"
                />
                <span className="input-group-text bg-transparent text-white border-danger border-start-0 br-l-0">
  <svg
    onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 576 512"
    fill="none"
    stroke="currentColor"
    strokeWidth="0"
    className={showPassword ? '' : 'hidden'} // Add or remove the 'hidden' class to hide/show the new icon
    style={{ cursor: 'pointer' }}
  >
    <path
      d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
      fill="#626262"
    ></path>
  </svg>
  {/* <svg
    onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 576 512"
    fill="none"
    stroke="currentColor"
    strokeWidth="0"
    className={showPassword ? 'hidden' : ''} // Add or remove the 'hidden' class to hide/show the new icon
    style={{ cursor: 'pointer' }}
  >
    <path
      d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"
      fill="#626262"
    ></path>
  </svg> */}
</span>

              </div>
            </div>
            <button className="submit-button btn-primary btn-rounded w-100 my-4">LOGIN</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;