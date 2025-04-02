import React, { useState } from 'react';
import { axiosInstance } from '../lib/axios.js';

const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001" : "/";

const RetrieveClip = () => {
  const [code, setCode] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setContent('');
    
    try {
      const res = await axiosInstance.get(`/clipboard/${code}`);
      setContent(res.data.content);
    } catch (err) {
      setError(err.response?.data?.message || 'Clip not found');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="clip-form">
      <h2>Retrieve Clip</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter 6-digit code"
          required
          pattern="[A-Za-z0-9]{6}"
          title="6-digit alphanumeric code"
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Searching...' : 'Retrieve Clip'}
        </button>
      </form>
      {content && (
        <div className="clip-content">
          <h3>Clip Content:</h3>
          <pre>{content}</pre>
        </div>
      )}
    </div>
  );
};

export default RetrieveClip;