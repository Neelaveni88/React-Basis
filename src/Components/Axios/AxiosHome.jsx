import axios from 'axios';
import React, { useState } from 'react'

const AxiosHome = () => {
    const [formData, setFormData] = useState({ name: "", email: "" });

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("https://jsonplaceholder.typicode.com/posts", formData);
        console.log("Response Data:", response.data);
        alert("Form submitted successfully!");
      } catch (error) {
        console.error("Error:", error);
        alert("Submission failed!");
      }
    };
  
    return (
      <div>
        <h1 style={{textAlign:"center",color:"blue"}}>Home</h1>
        <form style={{textAlign:"center",marginTop:"60px",border:"3px solid grey",width:"60%",marginLeft:"20%",padding:"50px",backgroundColor:"beige"}} onSubmit={handleSubmit}>
          <div>
            <label style={{marginRight:"20px"}}>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div><br></br>
          <div>
            <label style={{marginRight:"20px"}}>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div><br></br>
          <button style={{padding:"5px",borderRadius:"5px",color:"white", backgroundColor:"blue"}} type="submit">Submit</button>
        </form>
      </div>
    );
  };

export default AxiosHome