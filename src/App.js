import './App.css';
import Home from './components/Home'

import { Routes, Route } from 'react-router-dom';

// All the routes for this application to be here

function App() {
  return (
    <div className="App">
      <h1>Hello My Team</h1>

      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;
