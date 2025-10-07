import React from 'react';
import './App.css';
import SoftwareCompanyWebsite from './pages/SoftwareCompanyWebsite';

// PUBLIC_INTERFACE
function App() {
  /**
   * App entry renders the SoftwareCompanyWebsite at root path.
   * No router is required; the page is a single one-page layout.
   */
  return <SoftwareCompanyWebsite />;
}

export default App;
