import React, { useState } from "react";
import axios from "axios";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [resume, setResume] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    if (resume) {
      formData.append("resume", resume);
    }

    try {
      const response = await axios.post("http://localhost:5000/api/users/signup", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("User registered successfully!");
    } catch (err) {
      console.error("Error registering user: ", err.response ? err.response.data : err.message);
      alert("Error registering user. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name: </label>
        <input 
          type="text" 
          id="name"
          value={name} 
          onChange={(e) => setName(e.target.value)}
          required 
        />
      </div>

      <div>
        <label htmlFor="email">Email: </label>
        <input 
          type="email" 
          id="email"
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
      </div>

      <div>
        <label htmlFor="phone">Phone: </label>
        <input 
          type="tel" 
          id="phone"
          value={phone} 
          onChange={(e) => setPhone(e.target.value)}
          required 
        />
      </div>

      <div>
        <label htmlFor="resume">Resume: </label>
        <input 
          type="file" 
          id="resume"
          onChange={(e) => setResume(e.target.files[0])}
          required 
        />
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default SignupForm;
