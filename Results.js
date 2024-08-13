import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Results = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/votes/results');
        setResults(response.data);
      } catch (error) {
        console.error('Error fetching results:', error);
      }
    };

    fetchResults();
  }, []);

  return (
    <div>
      <h2>Results</h2>
      <ul>
        {results.map((result) => (
          <li key={result._id}>
            Candidate: {result._id} - Votes: {result.count}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
