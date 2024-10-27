import React, { useState } from 'react';
import { ChevronRight, ChevronDown } from 'lucide-react'; // Añadimos ChevronDown
import { useNavigate } from 'react-router-dom';
import { courseData } from '../../content';
import { appData } from '../../utils/app-data';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [activePath, setActivePath] = useState([]);

  const handleNavigation = (courseId, subjectKey, topicId) => {
    navigate(`/courses/${courseId}/${subjectKey}/${topicId}`);
    setIsOpen(false);
    setActivePath([]);
  };

  return (
    <>
      <nav className="bg-white shadow-sm border-b border-gray-200 relative z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex h-16 items-center">
            <div
              className="cursor-pointer transition-colors hover:text-blue-600"
              onClick={() => navigate('/')}
            >
              <span className="text-xl font-bold">
                {appData.name}
              </span>
            </div>

            <button
              className="ml-8 inline-flex items-center gap-x-1 text-sm hover:bg-gray-50 px-3 py-2 rounded-md transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              Cursos
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mega Menu con transición */}
        <div className={`absolute top-full left-0 w-full bg-white shadow-lg transform transition-all duration-200 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}>
          <div className="max-w-7xl mx-auto p-4">
            <div className="flex space-x-4">
              {/* Primera columna: Cursos */}
              <div className="w-64 bg-gray-50/50 rounded-lg p-2 transition-all duration-200">
                {Object.entries(courseData.courses).map(([courseId, course]) => (
                  <button
                    key={courseId}
                    onClick={() => setActivePath([courseId])}
                    className={`w-full text-left px-4 py-2 rounded-md text-sm transition-all duration-150 ${
                      activePath[0] === courseId 
                        ? 'bg-white shadow-sm text-blue-600' 
                        : 'hover:bg-white hover:text-blue-600'
                    }`}
                  >
                    <span className="flex justify-between items-center">
                      {course.name}
                      {activePath[0] === courseId && <ChevronRight className="h-4 w-4" />}
                    </span>
                  </button>
                ))}
              </div>

              {/* Segunda columna: Asignaturas */}
              <div className={`w-64 bg-gray-50/50 rounded-lg p-2 transition-all duration-200 ${
                activePath[0] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}>
                {activePath[0] && Object.entries(courseData.courses[activePath[0]].subjects).map(([subjectKey, subject]) => (
                  <button
                    key={subjectKey}
                    onClick={() => setActivePath([activePath[0], subjectKey])}
                    className={`w-full text-left px-4 py-2 rounded-md text-sm transition-all duration-150 ${
                      activePath[1] === subjectKey 
                        ? 'bg-white shadow-sm text-blue-600' 
                        : 'hover:bg-white hover:text-blue-600'
                    }`}
                  >
                    <span className="flex justify-between items-center">
                      {subject.name}
                      {activePath[1] === subjectKey && <ChevronRight className="h-4 w-4" />}
                    </span>
                  </button>
                ))}
              </div>

              {/* Tercera columna: Temas */}
              <div className={`w-64 bg-gray-50/50 rounded-lg p-2 transition-all duration-200 ${
                activePath[1] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              }`}>
                {activePath[1] && Object.entries(courseData.courses[activePath[0]].subjects[activePath[1]].topics).map(([topicId, topic]) => (
                  <button
                    key={topicId}
                    onClick={() => handleNavigation(activePath[0], activePath[1], topicId)}
                    className="w-full text-left px-4 py-2 rounded-md text-sm hover:bg-white hover:text-blue-600 transition-all duration-150"
                  >
                    {topic.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay con transición */}
      <div 
        className={`fixed inset-0 bg-black/20 transition-opacity duration-200 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => {
          setIsOpen(false);
          setActivePath([]);
        }}
      />
    </>
  );
};

export default Navbar;