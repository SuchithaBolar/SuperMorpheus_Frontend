import React, { useState } from 'react';
import '../styles/MemberCard.css';

function MemberCard({ member }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="member-card">
      <p className="member-text">"{member.text}"</p>
      <p className="member-author">— {member.author}</p>
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="toggle-details-btn"
      >
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>

      {showDetails && (
        <div className="details-section">
          <p><strong>Email:</strong> {member.email}</p>
          <p><strong>Joining Date:</strong> {new Date(member.joiningDate).toLocaleDateString()}</p>
          <p><strong>Interests:</strong> {member.interests?.join(', ')}</p>
        </div>
      )}
    </div>
  );
}

export default MemberCard;
