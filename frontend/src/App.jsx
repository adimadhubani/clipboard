import React from 'react';
import './App.css';
import CreateClip from './components/CreateClip';
import RetrieveClip from './components/RetriveClip';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Online Clipboard</h1>
        <p>Share text across devices with a simple 6-digit code. Secure and ephemeral.</p>
      </header>
      <main>
        <div className="container">
          <div className="clip-form create-clip">
            <h2>Create New Clipboard</h2>
            <CreateClip />
          </div>
          <div className="clip-form retrieve-clip">
            <h2>Retrieve Clipboard</h2>
            <RetrieveClip />
          </div>
        </div>
      </main>
      <footer>
        <p>© {new Date().getFullYear()} Online Clipboard. All clips expire after 24 hours.</p>
      </footer>
    </div>
  );
}

export default App;

