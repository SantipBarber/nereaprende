import { courseData } from '../content';

export const contentService = {
  async getTopic(courseId, subject, topicId) {
    console.log('getTopic llamado con:', { courseId, subject, topicId });

    const course = courseData.courses[courseId];
    if (!course) {
      throw new Error(`Curso no encontrado: ${courseId}`);
    }

    const subjectData = course.subjects[subject];
    if (!subjectData) {
      throw new Error(`Asignatura no encontrada: ${subject}`);
    }

    const topic = subjectData.topics[topicId];
    if (!topic) {
      throw new Error(`Tema no encontrado: ${topicId}`);
    }

    return topic;
  }
};