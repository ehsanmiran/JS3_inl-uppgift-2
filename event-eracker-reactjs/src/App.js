// This file is to be the HTML-like space.

import './App.css';
import Navbar from './components/Navbar';
import Views from './Views/Views';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Navbar />
        <Views />
      </div>
    </div>
  );
}

export default App;
