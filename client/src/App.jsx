import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Home, CreatePost } from './pages';

const App = () => (
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-[#03001C] sm:px-8 px-4 py-4">
      <Link to="/">
        <h1 className="inline-block bg-gradient-to-r from-[#B6EADA] via-[#5B8FB9] to-[#301E67] bg-clip-text text-bold text-3xl text-transparent font-bold">IMAGINE</h1>
      </Link>
      <Link to="/create-post" className="font-inter font-medium bg-[#301E67] text-white px-4 py-2 rounded-md">Create</Link>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-gradient-to-r from-[#03001C] via-[#301E67] to-[#5B8FB9] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
