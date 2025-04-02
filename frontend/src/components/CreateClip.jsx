import React,{useState} from 'react'

import {axiosInstance} from '../lib/axios.js'

const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001" : "/";

const CreateClip= ()=>{
    const [content, setContent] = useState('');
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');


    const handleSubmit=async (e)=>{
        e.preventDefault();
        setLoading(true);
        setError('');
        
       try {

        const res=await axiosInstance.post("/clipboard/",{content});
        setCode(res.data.code);
        setContent('')
        
       } catch (error) {
        setError(error.response?.data?.message || 'Failed to create clip');
       } finally{
        setLoading(false);
       }
    }




    return (
        <div className="clip-form">
          <h2>Create New Clip</h2>
          {error && <p className="error">{error}</p>}
          {code ? (
            <div className="success">
              <p>Your clip code is:</p>
              <h3>{code}</h3>
              <p>Use this code to retrieve your text.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter text to share..."
                required
              />
              <button type="submit" disabled={loading}>
                {loading ? 'Creating...' : 'Create Clip'}
              </button>
            </form>
          )}
        </div>
      );
    };

    export default CreateClip