import React from 'react';
import '../styles/MemberCard.css';


function MemberCard({ member }) {
  return (
    <div className="member-card">
      <p className="member-text">"{member.text}"</p>
      <p className="member-author">— {member.author}</p>
      {/* <p className="member-author">— {member.email}</p> */}
    </div>
  );
}

export default MemberCard;
