import React from 'react';
import { Route, Routes } from "react-router";
import Homepage from "./Pages/Homepage";
import CreatePage from "./Pages/CreatePage";
import JournalInfoPage from "./Pages/JournalInfoPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/journal/:id" element={<JournalInfoPage />} />
      </Routes>
    </div>
  );
};

export default App;
