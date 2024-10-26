import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../utils/constants';
import { appData } from '../../utils/app-data';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Logo */}
            <div 
              className="flex-shrink-0 flex items-center cursor-pointer" 
              onClick={() => navigate('/')}
            >
              <span className="text-xl font-bold text-primary">{appData.name}</span>
            </div>

            {/* Navigation Links */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {Object.entries(routes.subjects).map(([subjectKey, subject]) => (
                <div key={subjectKey} className="relative group inline-block">
                  <button className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
                    {subject.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  
                  {/* Dropdown */}
                  <div className="absolute left-0 hidden group-hover:block w-56 mt-1 py-1 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                    {Object.entries(subject.courses).map(([courseKey, course]) => (
                      <div key={courseKey}>
                        <div className="px-4 py-2 text-sm font-semibold bg-gray-50">
                          {course.name}
                        </div>
                        {course.topics.map((topic) => (
                          <button
                            key={topic.id}
                            onClick={() => navigate(`/${subjectKey}/${courseKey}/${topic.id}`)}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {topic.name}
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;