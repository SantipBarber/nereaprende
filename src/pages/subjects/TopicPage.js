// src/pages/subjects/TopicPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { contentService } from '../../services/contentService';

const TopicPage = () => {
  const { subject, course, topicId } = useParams();
  const [topicData, setTopicData] = useState(null);
  const [questions, setQuestions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true);
        const [content, testQuestions] = await Promise.all([
          contentService.getTopicContent(subject, course, topicId),
          contentService.getTopicQuestions(subject, course, topicId)
        ]);
        
        setTopicData(content);
        setQuestions(testQuestions);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [subject, course, topicId]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!topicData) return <div>No se encontró el contenido</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{topicData.title}</h1>
      <Tabs defaultValue="study" className="w-full">
        <TabsList>
          {/* ... */}
        </TabsList>
        <TabsContent value="study">
          <StudySection topics={topicData.content} />
        </TabsContent>
        <TabsContent value="quiz">
          <QuizSection questions={questions} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TopicPage;