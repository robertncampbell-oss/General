import { useState } from 'react';
import quizzes from './data/quizzes';
import HomePage from './components/HomePage';
import Quiz from './components/Quiz';
import HouseResult from './components/HouseResult';
import PatronusResult from './components/PatronusResult';
import KnowledgeResult from './components/KnowledgeResult';

const quizMap = {
  houseSorting:     { data: quizzes.houseSorting,             type: 'sorting' },
  patronus:         { data: quizzes.patronus,                 type: 'patronus' },
  potions:          { data: quizzes.subjects.potions,         type: 'knowledge' },
  charms:           { data: quizzes.subjects.charms,          type: 'knowledge' },
  dada:             { data: quizzes.subjects.dada,            type: 'knowledge' },
  transfiguration:  { data: quizzes.subjects.transfiguration, type: 'knowledge' },
  herbology:        { data: quizzes.subjects.herbology,       type: 'knowledge' },
  bookJunior:       { data: quizzes.bookKnowledge.junior,     type: 'knowledge' },
  bookSenior:       { data: quizzes.bookKnowledge.senior,     type: 'knowledge' },
  bookMaster:       { data: quizzes.bookKnowledge.master,     type: 'knowledge' }
};

export default function App() {
  const [screen, setScreen] = useState('home');
  const [activeKey, setActiveKey] = useState(null);
  const [result, setResult] = useState(null);

  function startQuiz(key) {
    setActiveKey(key);
    setResult(null);
    setScreen('quiz');
  }

  function handleFinish(res) {
    setResult(res);
    setScreen('result');
  }

  function goHome() {
    setScreen('home');
    setActiveKey(null);
    setResult(null);
  }

  if (screen === 'home') {
    return <HomePage onStart={startQuiz} />;
  }

  const { data, type } = quizMap[activeKey];

  if (screen === 'quiz') {
    return (
      <Quiz
        quizData={data}
        quizType={type}
        onFinish={handleFinish}
        onBack={goHome}
      />
    );
  }

  if (screen === 'result') {
    if (type === 'sorting') {
      return (
        <HouseResult
          houseKey={result}
          houseData={quizzes.houseSorting.results[result]}
          onRestart={goHome}
        />
      );
    }
    if (type === 'patronus') {
      return (
        <PatronusResult
          animal={result}
          patronusData={quizzes.patronus.results}
          onRestart={goHome}
        />
      );
    }
    return (
      <KnowledgeResult
        score={result.score}
        total={result.total}
        quizTitle={result.quizTitle}
        onRestart={goHome}
      />
    );
  }

  return null;
}
