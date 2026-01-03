import { useState } from "react";

export const AgeForm = () => {
  const [data, setData] = useState({ name: "", email: "", age: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = () => {
    const newErrors = {};

   
    if (!data.name) newErrors.name = "Enter your name";
    else if (/\d/.test(data.name)) newErrors.name = "Name cannot have numbers";


    if (!data.email) newErrors.email = "Enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.com$/.test(data.email))
      newErrors.email = "Email must end with .com";

 
    if (!data.age) newErrors.age = "Enter your age";
    else if (/\D/.test(data.age)) newErrors.age = "Age must be a number";
    else if (Number(data.age) < 0) newErrors.age = "Age cannot be negative";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted!", data);
    } else {
      console.log("Fix errors before submitting!");
    }
  };

  return (
    <div className="Form-fields">
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={data.name} onChange={handleChange} />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input type="email" name="email" value={data.email} onChange={handleChange} />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      <div>
        <label>Age:</label>
        <input type="text" name="age" value={data.age} onChange={handleChange} />
        {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}
      </div>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
