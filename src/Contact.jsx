import { useState } from 'react';

export default function Contact() {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message) newErrors.message = 'Message is required';
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  return (
    <div className="container mb-3">
      <h3>Contact Us</h3>
      {submitted && <p>Thank you for your message!</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label 
            htmlFor="name" 
            className="form-label">Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-control"
          />
          {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
        </div>
        
        <div className="mb-3">
          <label 
            htmlFor="email" 
            className="form-label">Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
          />
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </div>

        <div className="mb-3">
          <label 
            htmlFor="message" 
            className="form-label">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-control"
          />
          {errors.message && <span style={{ color: 'red' }}>{errors.message}</span>}
        </div>

        <button 
          type="submit" 
          className="btn btn-secondary">Send Message</button>
      </form>
    </div>
  );
};
7