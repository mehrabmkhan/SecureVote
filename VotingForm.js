import React, { useState } from 'react';

const VotingForm = () => {
  const [selectedCandidate, setSelectedCandidate] = useState('');

  const submitVote = () => {
    // Handle vote submission
  };

  return (
    <form onSubmit={submitVote}>
      <label>
        <input 
          type="radio" 
          name="candidate" 
          value="candidate1" 
          onChange={(e) => setSelectedCandidate(e.target.value)} 
        />
        Candidate 1
      </label>
      <label>
        <input 
          type="radio" 
          name="candidate" 
          value="candidate2" 
          onChange={(e) => setSelectedCandidate(e.target.value)} 
        />
        Candidate 2
      </label>
      <button type="submit">Vote</button>
    </form>
  );
};

export default VotingForm;
