import React from 'react';
import { useParams } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs";
import StudySection from '../../../components/common/StudySection';
import QuizSection from '../../../components/common/QuizSection';
import { topics } from '../../../content/spanish/4/topic-2/topics';
import { questions } from '../../../content/spanish/4/topic-2/questions';
import { routes } from '../../../utils/constants';

const TopicPage = () => {
  const { subject, course, topicId } = useParams();
  
  // Obtener el título del tema desde las rutas
  const topicInfo = routes.subjects[subject]?.courses[course]?.topics.find(t => t.id === topicId);
  const title = topicInfo?.name || '¡Te lo regalo!';

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <Tabs defaultValue="study" className="w-full">
        <TabsList className="grid w-full grid-cols-2 rounded-lg bg-gray-200 p-1">
          <TabsTrigger value="study" className="rounded-md py-2 px-4 data-[state=active]:bg-white data-[state=active]:shadow">
            Repaso
          </TabsTrigger>
          <TabsTrigger value="quiz" className="rounded-md py-2 px-4 data-[state=active]:bg-white data-[state=active]:shadow">
            Test
          </TabsTrigger>
        </TabsList>
        <TabsContent value="study" className="mt-4">
          <StudySection topics={topics} />
        </TabsContent>
        <TabsContent value="quiz" className="mt-4">
          <QuizSection questions={questions} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TopicPage;