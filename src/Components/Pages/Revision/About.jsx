import React, { useContext } from 'react'
import { FormContext } from './FormContext';

const About = () => {
    const { formData } = useContext(FormContext);
  return (
    <div>
      <h2>About</h2>
      {formData.name && formData.email ? (
        <div className="p-4 border rounded bg-gray-100">
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
        </div>
      ) : (
        <p>No data submitted yet.</p>
      )}
    </div>
  );
};

export default About