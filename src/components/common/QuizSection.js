import React, { useState } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const QuizSection = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answerIndex) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    return answers.reduce((score, answer, index) => 
      answer === questions[index].correctAnswer ? score + 1 : score, 0);
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <Card>
        <CardHeader>
          <CardTitle>Resultados del Test</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-4">Has acertado {score} de {questions.length} preguntas.</p>
          {questions.map((q, index) => (
            <div key={index} className="mb-2 flex items-center">
              {answers[index] === q.correctAnswer ? (
                <CheckCircle className="text-green-500 mr-2" />
              ) : (
                <AlertCircle className="text-red-500 mr-2" />
              )}
              <span>{q.question}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pregunta {currentQuestion + 1} de {questions.length}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{questions[currentQuestion].question}</p>
        <div className="space-y-2">
          {questions[currentQuestion].options.map((option, index) => (
            <Button
              key={index}
              onClick={() => handleAnswer(index)}
              variant={answers[currentQuestion] === index ? "default" : "outline"}
              className="w-full justify-start"
            >
              {option}
            </Button>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <Button 
            onClick={previousQuestion} 
            disabled={currentQuestion === 0}
            variant="outline"
          >
            Anterior
          </Button>
          <Button onClick={nextQuestion}>
            {currentQuestion < questions.length - 1 ? "Siguiente" : "Ver resultados"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuizSection;