// src/routes/Routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import TopicPage from '../pages/subjects/TopicPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:courseId/:subjectId/:topicId" element={<TopicPage />} />
    </Routes>
  );
};

export default AppRoutes;