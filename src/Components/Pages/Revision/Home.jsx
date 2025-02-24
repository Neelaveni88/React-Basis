import React, { useContext, useState } from 'react'
import { FormContext } from './FormContext';
import { Link } from 'react-router-dom';

const Home = () => {
    const [form, setForm] = useState({name:"",email:""});
    const { setFormData } = useContext(FormContext);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };

      const handleSubmit = () => {
        setFormData(form); 
      };
  return (
    <div>
      <h2>Home</h2>
      <form>
        <input style={{padding:"15px",borderRadius:"15px"}} type="text" name="name" placeholder="Enter Your Name" value={form.name} onChange={handleChange}/><br></br><br></br>
        <input style={{padding:"15px",borderRadius:"15px"}} type="email" name="email" placeholder="Enter Your Email"value={form.email} onChange={handleChange} /><br></br><br></br><br></br>
        <Link style={{padding:"15px",borderRadius:"15px",border:"3px solid red",textDecoration:"none", color:"brown"}} to="/About"onClick={handleSubmit}>Submit</Link>
      </form>
    </div>
  );
};

export default Home