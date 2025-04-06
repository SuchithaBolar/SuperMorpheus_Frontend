import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import '../styles/AddMemberForm.css';


const AddMemberForm = () => {
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [joiningDate, setJoiningDate] = useState('');
const [interests, setInterests] = useState('');


  const validate = () => {
    const newErrors = {};

    if (!text || text.length < 5) {
      newErrors.text = 'Text must be at least 5 characters long';
    }

    if (!author || author.length < 2) {
      newErrors.author = 'Author name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      newErrors.email = 'Enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error('🚫 Please fix validation errors');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/members', {
        text,
        author,
        email,
        joiningDate,
        interests: interests.split(',').map((i) => i.trim())
      });
      

      toast.success('🎉 Motivation added successfully!');
      setText('');
      setAuthor('');
      setEmail('');
      setErrors({});
    } catch (error) {
      const message =
        error.response?.data?.error || error.response?.data?.message || 'Something went wrong';
      toast.error(`❌ ${message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-member-form">
      <div>
        <input
          type="text"
          placeholder="Enter motivational text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className=""
        />
        {errors.text && <p className="error-message">{errors.text}</p>}
      </div>

      <div>
        <input
          type="text"
          placeholder="Enter author name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full border p-2 rounded"
        />
        {errors.author && <p className="error-message">{errors.author}</p>}
      </div>

      <div>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded"
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
      </div>

      <div className="form-group">
  <label htmlFor="joining-date">Select Joining Date</label>
  <input
    id="joining-date"
    type="date"
    value={joiningDate}
    onChange={(e) => setJoiningDate(e.target.value)}
  />
</div>


<div>
  <input
    type="text"
    placeholder="Enter interests (comma-separated)"
    value={interests}
    onChange={(e) => setInterests(e.target.value)}
  />
</div>


      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Member
      </button>
    </form>
  );
};

export default AddMemberForm;
