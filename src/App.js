import React from 'react';
import './App.css';

function App() {
  const anggota = [
    "M. Zainal Abidin (22.11.5172)",
    "Muh Dhimas Prasetya (22.11.5170)",
    "Jessica Alva Nandhita (22.11.5135)",
    "Wisnala Arya Widuta (22.11.5168)"
  ];

  return (
     <div className="App">
      {/* Box untuk logo dan judul */}
      <div className="header-box">
        <h1 className="title">3D Shiesta</h1>
      </div>

      {/* Box untuk daftar anggota */}
      <div className="anggota-box">
        <ul className="anggota-list">
          {anggota.map((nama, index) => (
            <li key={index}>{nama}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}


export default App;
