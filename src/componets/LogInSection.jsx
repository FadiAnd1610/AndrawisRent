import React from "react";
import { useState } from "react";

import Login from "./Login";
import Register from "./Register";

function LoginSection() {
  const [currentForm, setcurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setcurrentForm(formName);
  };
  return (
    <div className="LoginSection">
          {currentForm == "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />}
        
    </div>
  );
}

export default LoginSection;
