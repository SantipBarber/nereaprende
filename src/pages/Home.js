import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { routes } from '../utils/constants';
import { useNavigate } from 'react-router-dom';
import { appData } from '../utils/app-data';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Bienvenid@ a {appData.name}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(routes.subjects).map(([subjectKey, subject]) => (
          <Card key={subjectKey} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{subject.name}</CardTitle>
            </CardHeader>
            <CardContent>
              {Object.entries(subject.courses).map(([courseKey, course]) => (
                <div key={courseKey} className="mb-4">
                  <h3 className="font-semibold mb-2">{course.name}</h3>
                  <ul className="space-y-2">
                    {course.topics.map((topic) => (
                      <li 
                        key={topic.id}
                        className="cursor-pointer text-blue-600 hover:text-blue-800"
                        onClick={() => navigate(`/${subjectKey}/${courseKey}/${topic.id}`)}
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