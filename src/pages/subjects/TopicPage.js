import React from 'react';
import { useParams } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import StudySection from '../../components/common/StudySection';
import QuizSection from '../../components/common/QuizSection';
import { contentService } from '../../services/contentService';
import { courseData } from '../../content';

const TopicPage = () => {
  const { courseId, subject, topicId } = useParams();
  const [topicData, setTopicData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  // Obtener el título del tema desde courseData
  const topicInfo = courseData.courses[courseId]?.subjects[subject]?.topics[topicId];

  React.useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true);
        const topic = await contentService.getTopic(courseId, subject, topicId);
        setTopicData(topic);
      } catch (err) {
        console.error('Error cargando tema:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [courseId, subject, topicId]);

  
    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!topicData) return <div>No se encontró el contenido</div>;
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">
          {topicInfo?.name || topicData.name}
        </h1>
        <Tabs defaultValue="study" className="w-full">
          <TabsList className="grid w-full grid-cols-2 rounded-lg bg-gray-200 p-1">
            <TabsTrigger 
              value="study" 
              className="rounded-md py-2 px-4 data-[state=active]:bg-white data-[state=active]:shadow"
            >
              Repaso
            </TabsTrigger>
            <TabsTrigger 
              value="quiz" 
              className="rounded-md py-2 px-4 data-[state=active]:bg-white data-[state=active]:shadow"
            >
              Test
            </TabsTrigger>
          </TabsList>
          <TabsContent value="study" className="mt-4">
            <StudySection topics={topicData.content} />
          </TabsContent>
          <TabsContent value="quiz" className="mt-4">
            <QuizSection questions={topicData.test} />
          </TabsContent>
        </Tabs>
      </div>
    );
  };
  
  export default TopicPage;