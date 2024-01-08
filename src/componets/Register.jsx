import React, { useState } from "react";

function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(email);
    // Additional registration logic can be added here
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
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
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleSumbit}>
          <label>Full name</label>
          <input
            value={name}
            name="name"
            id="name"
            placeholder="Full Name"
            onChange={handleNameChange}  // Add onChange handler
          />

          <label htmlFor="email">email</label>
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}  // Add onChange handler
          />

          <label htmlFor="password">password</label>
          <input
            type="password"
            placeholder="**********"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}  // Add onChange handler
          />

          <button type="submit">Register</button>
        </form>
        <button onClick={() => props.onFormSwitch('login')}>
          Already have an account? Login here.
        </button>
      </div>
    </div>
  );
}

export default Register;