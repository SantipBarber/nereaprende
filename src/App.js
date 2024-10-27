import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Routes from './routes/Routes';

function App() {
  console.log('Rendering App component'); // Debugging

  return (
    <Router>
      <Layout>
        <Routes />
      </Layout>
    </Router>
  );
}

export default App;