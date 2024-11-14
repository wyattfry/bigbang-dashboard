// pages/index.js
import Navbar from '../components/Navbar';
import AppList from '../components/AppList';
import React from 'react';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="home-page">
        <button className="add-app-button">Add Application</button>
        <AppList />
      </div>
    </div>
  );
}
