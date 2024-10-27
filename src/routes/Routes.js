import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import TopicPage from '../pages/subjects/TopicPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Cambiamos la ruta para reflejar la jerarquía course/subject/topic */}
      <Route path="/courses/:courseId/:subject/:topicId" element={<TopicPage />} />
    </Routes>
  );
};

export default AppRoutes;