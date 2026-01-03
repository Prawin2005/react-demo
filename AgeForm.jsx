import { useState } from "react";

export const AgeForm = () => {
  const [data, setData] = useState({
     name: "",
     email: "",
     age: "" });
  const [error, setError] = useState("");

  const handleChange = (e, field) => {
    const value = e.target.value;
    setData({ ...data, [field]: value });

   
    if (field === "name") {
      if (!value) setError("Enter your name");
      else if (/\d/.test(value)) setError("Name cannot have numbers");
      else setError("");
    }

    if (field === "email") {
      if (!value) setError("Enter your email");
      else if (!/^[^\s@]+@[^\s@]+\.com$/.test(value))
        setError("Email must end with .com");
      else setError("");
    }

    if (field === "age") {
      if (!value) setError("Enter your age");
      else if (/\D/.test(value)) setError("Age must be a number");
      else if (Number(value) < 0) setError("Age cannot be negative");
      else setError("");
    }
  };

  return (
    <div className="form-fields">
      <h3>Enter Your Details</h3>

      <label>Name: </label>
      <input name="name" value={data.name} onChange={e => handleChange(e, "name")} />

      <label>Email: </label>
      <input name="email" value={data.email} onChange={e => handleChange(e, "email")} />

      <label>Age: </label>
      <input name="age" value={data.age} onChange={e => handleChange(e, "age")} />

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};
