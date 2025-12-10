import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

export default function Login() {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  function validate() {
    if (code === "admin123") {
      navigate("/admin/orders");
    } else {
      setError("Invalid security code");
    }
  }

  return (
    <div className="login-page">

      <div className="login-card">
        <h2>Administrator Login</h2>
        <p>Enter security code</p>

        <input
          type="password"
          placeholder="Security Code"
          onChange={(e) => setCode(e.target.value)}
        />

        <button onClick={validate}>Login</button>

        {error && <p className="error">{error}</p>}
      </div>

    </div>
  );
}
