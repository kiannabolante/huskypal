import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = async () => {
    try {
      // Front-end validation
      if (!username || !password) {
        setErrorMessage("Please fill in all fields");
        return;
      }

      if (username.length < 3) {
        setErrorMessage("Username must be at least 3 characters");
        return;
      }

      if (password.length < 8) {
        setErrorMessage("Password must be at least 8 characters");
        return;
      }

      const response = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        setSuccessMessage("Registration successful");
        setErrorMessage(""); // Clear any previous error message
        // Navigate back to the homepage
        window.location.href = "/";
      } else {
        const data = await response.json();
        setSuccessMessage(""); // Clear any previous success message
        setErrorMessage(data.error || "Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setErrorMessage("An error occurred during registration");
    }
  };

  return (
    <div className="registration-form">
      <h2>Register</h2>
      <form>
        <label>
          Username:{" "}
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default RegistrationForm;
