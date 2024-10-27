// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { contentService } from '../services/contentService';
import { Card, CardHeader, CardContent, CardTitle } from '../components/ui/card';

const Home = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const data = await contentService.getCourses();
        setCourses(data);
      } catch (error) {
        console.error('Error loading courses:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCourses();
  }, []);

  if (loading) return <div>Cargando...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Bienvenid@ a NereAprende</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(courses).map(([courseId, course]) => (
          <Card key={courseId} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{course.name}</CardTitle>
            </CardHeader>
            <CardContent>
              {Object.entries(course.subjects).map(([subjectId, subject]) => (
                <div key={subjectId} className="mb-4">
                  <h3 className="font-semibold mb-2">{subject.name}</h3>
                  <ul className="space-y-2">
                    {Object.entries(subject.topics).map(([topicId, topic]) => (
                      <li 
                        key={topicId}
                        className="cursor-pointer text-blue-600 hover:text-blue-800"
                        onClick={() => navigate(`/${courseId}/${subjectId}/${topicId}`)}
                      >
                        {topic.title}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;