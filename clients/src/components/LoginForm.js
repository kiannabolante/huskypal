import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../contexts/UserContext";

const LoginForm = () => {
  const { saveLoggedInUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formDataError, setFormDataError] = useState({});
  const [loginError, setLoginError] = useState(""); // New state for login error
  const navigate = useNavigate();

  const changeHandle = (e) => {
    let fieldName = e.target.name;
    let newValue = e.target.value;
    setFormData({ ...formData, [fieldName]: newValue });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // Reset form errors and login error
    setFormDataError({});
    setLoginError("");

    // Client-side validation
    if (!formData.email.trim()) {
      setFormDataError((prevErrors) => ({
        ...prevErrors,
        email: { message: "Email is required" },
      }));
      return;
    }

    if (!formData.password.trim()) {
      setFormDataError((prevErrors) => ({
        ...prevErrors,
        password: { message: "Password is required" },
      }));
      return;
    }

    axios
      .post(`http://localhost:8000/api/login`, formData, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("Response from server:", res);
        saveLoggedInUser(res.data);
        console.log("Navigating to /dashboard");
        navigate("/about/us");
      })
      .catch((err) => {
        console.log("Error from server:", err);

        if (err.response && err.response.data) {
          console.log("Server response data:", err.response.data);
          setLoginError(
            err.response.data.message || "Invalid login credentials"
          );
        }

        if (err.response && err.response.data && err.response.data.errors) {
          setFormDataError(err.response.data.errors);
        }
      });
  };
  return (
    <div className="login-form">
      <h1>Login Form</h1>
      <p>
        New to this app? Then <Link to="/">Register</Link>
      </p>
      <form action="" className="col-med-4 offset" onSubmit={handleLoginSubmit}>
        <div className="form-group">
          {formDataError.email && (
            <p style={{ color: "red" }}>{formDataError.email.message}</p>
          )}
          <label htmlFor="email"> Email Address: </label>
          <input
            className="form-control"
            name="email"
            type="email"
            value={formData.email}
            onChange={changeHandle}
          />
        </div>
        <div className="form-group">
          {formDataError.password && (
            <p style={{ color: "red" }}>{formDataError.password.message}</p>
          )}
          <label htmlFor="password">Password:</label>
          <input
            className="form-control"
            name="password"
            type="password"
            value={formData.password}
            onChange={changeHandle}
          />
        </div>

        {loginError && <p style={{ color: "red" }}>{loginError}</p>}

        <button type="submit" className="btn btn-primary">
          {" "}
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
