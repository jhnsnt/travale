import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import '../css/signup.css';
import travaleLogo from "../images/travale-logo.svg";
import PolicyLinks from "../components/PolicyLinks";

function LoginPage(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    const allFilled = 
      isValidEmail(email)  && 
      password;

    const handleSubmit = () => {
      if (!allFilled) return;
      navigate("/home");
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
            type="email" 
            className="fields" 
            placeholder="Email Address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            hasError={email !== "" && !isValidEmail(email)} // optional: mark invalid
            />


          <input
            type="password"
            className="fields"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <PolicyLinks />

          <span 
            onClick={handleSubmit}
            disabled={!allFilled}
            style={{
              opacity: allFilled ? 1 : 0.5,
              cursor: allFilled ? "pointer" : "arrow"
            }}
          >Sign In</span>
      </div>
  );
}

export default LoginPage;