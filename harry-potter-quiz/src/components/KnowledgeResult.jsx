export default function KnowledgeResult({ score, total, quizTitle, onRestart }) {
  const pct = score / total;
  const stars = pct >= 0.9 ? 5 : pct >= 0.7 ? 4 : pct >= 0.5 ? 3 : pct >= 0.3 ? 2 : 1;

  const messages = [
    { min: 0,  max: 3,  msg: 'Keep reading your spell books!',          sub: 'Every great wizard starts somewhere.' },
    { min: 4,  max: 5,  msg: 'Not bad for a second year!',              sub: 'A bit more study and you\'ll be unstoppable.' },
    { min: 6,  max: 7,  msg: 'Hermione would approve!',                 sub: 'Solid knowledge — well done!' },
    { min: 8,  max: 9,  msg: 'Impressive — are you sure you\'re not a professor?', sub: 'Outstanding O.W.L. level knowledge.' },
    { min: 10, max: 10, msg: 'Perfect score! You\'re practically Dumbledore.', sub: 'An O in your O.W.L. — extraordinary!' }
  ];

  const { msg, sub } = messages.find(m => score >= m.min && score <= m.max) || messages[0];

  return (
    <div className="result-screen knowledge-result revealed">
      <div className="result-inner">
        <div className="quiz-icon-lg">📖</div>
        <p className="result-pre">{quizTitle}</p>
        <h1 className="score-display">{score} <span>/ {total}</span></h1>

        <div className="stars-row">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={`star-icon ${i < stars ? 'star-on' : 'star-off'}`}>★</span>
          ))}
        </div>

        <h2 className="score-message">{msg}</h2>
        <p className="score-sub">{sub}</p>

        <div className="score-bar-wrap">
          <div className="score-bar-fill" style={{ width: `${(score / total) * 100}%` }} />
        </div>
        <p className="score-pct">{Math.round((score / total) * 100)}%</p>

        <div className="result-actions">
          <button className="btn-begin btn-restart" onClick={onRestart}>
            Try Another Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
