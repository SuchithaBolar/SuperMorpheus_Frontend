import React, { useState, useEffect } from 'react';
import './App.css';
import MemberCard from './components/MemberCard';
import FilterSortBar from './components/FilterSortBar';
import AddMemberForm from './components/AddMemberForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [members, setMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  // Fetch all members from backend
  const fetchMembers = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/members');
      const data = await res.json();
      setMembers(data);
    } catch (error) {
      console.error('Error fetching members:', error);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const addMember = async (newMember) => {
    try {
      const res = await fetch('http://localhost:5000/api/members', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ author, text, email })
      });

      const data = await res.json();
      setMembers((prev) => [data, ...prev]);
    } catch (error) {
      console.error('Error adding member:', error);
    }
  };



    const filteredMembers = members
  .filter((member) =>
    member.author?.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .sort((a, b) =>
    sortOrder === 'asc'
      ? a.author.localeCompare(b.author)
      : b.author.localeCompare(a.author)
  );


  return (
    <div className="app-container">
      <h1>🧑‍🤝‍🧑 SuperMorpheus Community Directory</h1>
      <AddMemberForm onAdd={addMember} />
      <ToastContainer position="top-center" autoClose={3000} />
      <FilterSortBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      <div className="member-list">
        {filteredMembers.map((member) => (
          <MemberCard key={member._id} member={member} />
        ))}
      </div>
    </div>
  );
}

export default App;
