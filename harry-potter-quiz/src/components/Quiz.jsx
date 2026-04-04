import { useState } from 'react';

export default function Quiz({ quizData, quizType, onFinish, onBack }) {
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState({});
  const [animalCounts, setAnimalCounts] = useState({});
  const [knowledgeScore, setKnowledgeScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);

  const questions = quizData.questions;
  const total = questions.length;
  const q = questions[current];
  const progress = ((current) / total) * 100;

  function handleSortingAnswer(answer) {
    if (selected !== null) return;
    setSelected(answer.text);
    const newScores = { ...scores };
    Object.entries(answer.scores).forEach(([house, pts]) => {
      newScores[house] = (newScores[house] || 0) + pts;
    });
    setScores(newScores);
    setTimeout(() => advance(newScores, null, null), 600);
  }

  function handlePatronusAnswer(answer) {
    if (selected !== null) return;
    setSelected(answer.text);
    const newCounts = { ...animalCounts };
    newCounts[answer.animal] = (newCounts[answer.animal] || 0) + 1;
    setAnimalCounts(newCounts);
    setTimeout(() => advance(null, newCounts, null), 600);
  }

  function handleKnowledgeAnswer(idx) {
    if (revealed) return;
    setSelected(idx);
    setRevealed(true);
    const correct = idx === q.correctIndex;
    const newScore = knowledgeScore + (correct ? 1 : 0);
    setKnowledgeScore(newScore);
    if (current === total - 1) {
      setTimeout(() => onFinish({ score: newScore, total, quizTitle: quizData.title }), 1200);
    }
  }

  function advance(finalScores, finalCounts, _) {
    if (current === total - 1) {
      if (quizType === 'sorting') {
        const winner = Object.entries(finalScores || scores).sort((a, b) => b[1] - a[1])[0][0];
        onFinish(winner);
      } else if (quizType === 'patronus') {
        const winner = Object.entries(finalCounts || animalCounts).sort((a, b) => b[1] - a[1])[0][0];
        onFinish(winner);
      }
    } else {
      setCurrent(c => c + 1);
      setSelected(null);
      setRevealed(false);
    }
  }

  function nextKnowledge() {
    if (current < total - 1) {
      setCurrent(c => c + 1);
      setSelected(null);
      setRevealed(false);
    }
  }

  return (
    <div className="quiz-screen">
      <div className="quiz-header">
        <button className="btn-back" onClick={onBack}>← Back</button>
        <span className="quiz-progress-label">{current + 1} / {total}</span>
      </div>

      <div className="progress-bar-wrap">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="quiz-title-bar">
        <span className="quiz-icon">{quizData.icon}</span>
        <span>{quizData.title}</span>
      </div>

      <div className="question-card">
        <p className="question-text">{q.question}</p>

        <div className="answers-grid">
          {quizType === 'sorting' && q.answers.map((a, i) => (
            <button
              key={i}
              className={`answer-btn ${selected === a.text ? 'selected' : ''}`}
              onClick={() => handleSortingAnswer(a)}
              disabled={selected !== null}
            >
              {a.text}
            </button>
          ))}

          {quizType === 'patronus' && q.answers.map((a, i) => (
            <button
              key={i}
              className={`answer-btn ${selected === a.text ? 'selected' : ''}`}
              onClick={() => handlePatronusAnswer(a)}
              disabled={selected !== null}
            >
              {a.text}
            </button>
          ))}

          {quizType === 'knowledge' && q.options.map((opt, i) => {
            let cls = 'answer-btn';
            if (revealed) {
              if (i === q.correctIndex) cls += ' correct';
              else if (i === selected) cls += ' wrong';
            } else if (selected === i) {
              cls += ' selected';
            }
            return (
              <button
                key={i}
                className={cls}
                onClick={() => handleKnowledgeAnswer(i)}
                disabled={revealed}
              >
                {revealed && i === q.correctIndex && <span className="answer-tick">✓ </span>}
                {revealed && i === selected && i !== q.correctIndex && <span className="answer-cross">✗ </span>}
                {opt}
              </button>
            );
          })}
        </div>

        {quizType === 'knowledge' && revealed && current < total - 1 && (
          <button className="btn-next" onClick={nextKnowledge}>
            Next Question →
          </button>
        )}
        {quizType === 'knowledge' && revealed && current === total - 1 && (
          <p className="quiz-finishing">Calculating your score…</p>
        )}
      </div>
    </div>
  );
}
