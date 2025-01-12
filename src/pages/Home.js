import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { useNavigate } from 'react-router-dom';
import { courseData } from '../content';
import { appData } from '../utils/app-data';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Bienvenid@ a {appData.name}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(courseData.courses).map(([courseId, course]) => (
          <Card key={courseId} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{course.name}</CardTitle>
            </CardHeader>
            <CardContent>
              {Object.entries(course.subjects).map(([subjectKey, subject]) => (
                <div key={subjectKey} className="mb-4">
                  <h3 className="font-semibold mb-2">{subject.name}</h3>
                  <ul className="space-y-2">
                    {Object.entries(subject.topics).map(([topicId, topic]) => (
                      <li 
                        key={topicId}
                        className="cursor-pointer text-blue-600 hover:text-blue-800"
                        onClick={() => navigate(`/courses/${courseId}/${subjectKey}/${topicId}`)}
                      >
                        {topic.name}
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