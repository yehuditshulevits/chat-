import './Login.css';
import { useNavigate } from 'react-router-dom';
import React from "react";
// import { useState, useEffect } from 'react';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="container h-100">
      <div className="d-flex justify-content-center h-100">
        <div className="user_card">
          <div className="d-flex justify-content-center">
            <div className="brand_logo_container">
              <img
                src="https://cdn.freebiesupply.com/logos/large/2x/pinterest-circle-logo-png-transparent.png"
                className="brand_logo"
                alt="Logo"
              />
            </div>
          </div>
          <div className="d-flex justify-content-center form_container">
            <form>
              <div className="input-group mb-3">
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  name="username"
                  className="form-control input_user"
                  placeholder="Username"
                />
              </div>
              <div className="input-group mb-2">
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fas fa-key"></i>
                  </span>
                </div>
                <input
                  type="password"
                  name="password"
                  className="form-control input_pass"
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customControlInline"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customControlInline"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <div className="d-flex justify-content-center mt-3 login_container">
                <button
                  type="button"
                  className="btn login_btn"
                  onClick={()=>navigate('/Chat')}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className="mt-4">
            <div className="d-flex justify-content-center links">
              Don't have an account? <a href="#" className="ml-2">Sign Up</a>
            </div>
            <div className="d-flex justify-content-center links">
              <a href="#">Forgot your password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// // EntryForm Component
// function Login({ onJoinChat }) {
//   const [username, setUsername] = useState('');

//   const handleJoinChat = () => {
//     if (username) {
//       onJoinChat(username);
//       alert("you join chat")
//     }
//   }

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter your username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <button onClick={handleJoinChat}>Join Chat</button>
//     </div>
//   );
// }

