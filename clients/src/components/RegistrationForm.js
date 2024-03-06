import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import "./RegistrationForm.css";
const RegistrationForm = () => {
  const { saveLoggedInUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    username: "", // Add the username field
    instagram: "", // Add the instagram field
  });

  const navigate = useNavigate();
  const [formDataError, setFormDataError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    username: "", // Add the username field to the errors states
    instagram: "", // Add the instagram field to the errors states
  });

  const changeHandle = (e) => {
    let fieldName = e.target.name;
    let newValue = e.target.value;
    // update with the new value from the form
    setFormData({ ...formData, [fieldName]: newValue });
    // clear the error message when the user starts typing
    setFormDataError({ ...formDataError, [fieldName]: "" });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("Submitting data:", formData);

    // Check for missing required fields
    const missingFields = Object.keys(formData).filter(
      (key) => formData[key] === ""
    );

    if (missingFields.length > 0) {
      // Display error messages for missing fields
      setFormDataError((prevErrorObj) => {
        const newErrorObj = { ...prevErrorObj };
        missingFields.forEach((field) => {
          newErrorObj[field] = `${
            field.charAt(0).toUpperCase() + field.slice(1)
          } is required`;
        });
        return newErrorObj;
      });
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:8000/api/register`,
        formData,
        {
          withCredentials: true,
        }
      );
      console.log("Server response:", response);
      // Save the data passed in without the password
      saveLoggedInUser(response.data);

      // Redirect to dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error("Error from server:", error);

      if (error.response) {
        console.error("Server response status:", error.response.status);
        console.error("Server response data:", error.response.data);

        // Handle errors based on your server's response
        // For example, update the state with specific error messages
        setFormDataError((prevErrorObj) => {
          const newErrorObj = { ...prevErrorObj };

          // Clear all previous errors
          for (const fieldName in newErrorObj) {
            newErrorObj[fieldName] = "";
          }

          // Set errors based on the response
          for (const fieldName in error.response.data.errors) {
            if (newErrorObj.hasOwnProperty(fieldName)) {
              newErrorObj[fieldName] = error.response.data.errors[fieldName];
            }
          }

          return newErrorObj;
        });
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  return (
    <div className="registration-form">
      <h3> Please Register to HuskyPal </h3>
      <p>
        Already registered? Then please <Link to="/login">login</Link>!
      </p>
      <form action="" className="col-med-4 offset" onSubmit={submitHandler}>
        <div className="form-group">
          {formDataError.firstName && (
            <p style={{ color: "red" }}>{formDataError.firstName}</p>
          )}
          <label htmlFor="firstName"> First Name </label>
          <input
            className="form-control"
            name="firstName"
            value={formData.firstName}
            onChange={changeHandle}
          />
        </div>
        <div className="form-group">
          {formDataError.lastName && (
            <p style={{ color: "red" }}> {formDataError.lastName}</p>
          )}
          <label htmlFor="lastName"> Last Name </label>
          <input
            className="form-control"
            name="lastName"
            value={formData.lastName}
            onChange={changeHandle}
          />
        </div>
        <div className="form-group">
          {formDataError.email && (
            <p style={{ color: "red" }}>{formDataError.email}</p>
          )}
          <label htmlFor="email"> Email Address </label>
          <input
            className="form-control"
            name="email"
            type="email"
            value={formData.email}
            onChange={changeHandle}
          />
        </div>
        <div className="form-group">
          {formDataError.username && (
            <p style={{ color: "red" }}>{formDataError.username}</p>
          )}
          <label htmlFor="username"> Username </label>
          <input
            className="form-control"
            name="username"
            value={formData.username}
            onChange={changeHandle}
          />
        </div>
        <div className="form-group">
          {formDataError.password && (
            <p style={{ color: "red" }}>{formDataError.password}</p>
          )}
          <label htmlFor="password"> Password </label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={changeHandle}
          />
        </div>
        <div className="form-group">
          {formDataError.confirmPassword && (
            <p style={{ color: "red" }}>{formDataError.confirmPassword}</p>
          )}
          <label htmlFor="confirmPassword"> Confirm Password </label>
          <input
            className="form-control"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={changeHandle}
          />
        </div>
        {/* Add the following block for the Instagram field */}
        <div className="form-group">
          {formDataError.instagram && (
            <p style={{ color: "red" }}>{formDataError.instagram}</p>
          )}
          <label htmlFor="instagram"> Instagram </label>
          <input
            className="form-control"
            name="instagram"
            value={formData.instagram}
            onChange={changeHandle}
          />
        </div>{" "}
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};
export default RegistrationForm;
