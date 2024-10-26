import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import TopicPage from '../pages/subjects/social/index';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:subject/:course/:topicId" element={<TopicPage />} />
    </Routes>
  );
};

export default AppRoutes;