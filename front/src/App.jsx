import React from 'react'
import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import InfoPage from './pages/InfoPage';
import toast from "react-hot-toast";

const App = () => {
  return (
    <div>
    <button onClick={()=>toast.success("Done")} className='text-red-500 p-4 bg-blue-500'>Click Me!</button>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/create' element={<CreatePage />} />
      <Route path='/journal/:id' element={<InfoPage />} />
    </Routes>
    </div>
  )
};

export default App;