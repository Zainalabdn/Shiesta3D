// src/App.jsx
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes"; // kita buat komponen ini terpisah

function App() {
  return (
    <div className='App'>
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
