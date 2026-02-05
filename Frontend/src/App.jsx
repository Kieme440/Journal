import React from 'react';
import { Route, Routes} from "react-router-dom";
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import JournalInfoPage from './pages/JournalInfoPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/journal/:id" element={<JournalInfoPage />} />
      </Routes>
    </div>
  );
};

export default App;
