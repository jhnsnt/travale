import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import '../css/signup.css';
import travaleLogo from "../images/travale-logo.svg";
import FieldsInput from "../components/FieldsInput";
import SignUpBtn from "../components/SignUpBtn";
import PolicyLinks from "../components/PolicyLinks";

function SignUpPage(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const [error, setError] = useState({
      firstName: "",
      lastName: ""
    });

    const navigate = useNavigate();

    const handleSubmit = () => {
      const newErrors = {
        firstName: "",
        lastName: ""
      }
      let hasError = false;

      if (!firstName) {
        newErrors.firstName = "First name is required";
        hasError = true;
      }

      if (!lastName) {
        newErrors.lastName = "Last name is required";
        hasError = true;
      }

      setError(newErrors);

      if (!hasError) {
        navigate("/home");
      }
    };

    return (
      <div>
          <div>
              <img src={travaleLogo} className="" alt="Travale logo" />
              <p>
              Your social travel hub — share your adventures, discover hidden gems, and connect with fellow explorers around the world.
              </p>
          </div>
          
          <input 
            type="text" 
            className="fields" 
            placeholder="First Name" 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            error={error}
            />
          {error.firstName && (
            <div style={{ color: "red", marginTop: "10px" }}>
              {error.firstName}
            </div>
          )}

          <input
            type="text"
            className="fields"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          {error.lastName && (
            <div style={{ color: "red", marginTop: "10px" }}>
              {error.lastName}
            </div>
          )}


          <PolicyLinks />

          <a onClick={handleSubmit}>Sign Up</a>
      </div>
  );
}

export default SignUpPage;