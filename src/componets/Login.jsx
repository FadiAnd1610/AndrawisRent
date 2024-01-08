import React, { useState } from "react";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="all-container">
      <div className="auth-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSumbit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange} // Add onChange handler
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="**********"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange} // Add onChange handler
          />

          <button
            type="submit"
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "rgb(107, 102, 102)";
              e.target.style.color = "#fff";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "";
              e.target.style.color = "";
            }}
          >
            Log In
          </button>
        </form>
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("register")}
        >
          Don't have an account? Register here.
        </button>
      </div>
    </div>
  );
}

export default Login;
