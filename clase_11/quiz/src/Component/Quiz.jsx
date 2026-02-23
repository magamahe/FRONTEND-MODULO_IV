import { useState } from "react";
import { questions } from "./data";
import Question from "./Question";
import Result from "./Result";
import Start from "./Start";

export default function Quiz() {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (option) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);

    setTimeout(() => {
      if (current + 1 < questions.length) setCurrent(current + 1);
      else setFinished(true);
    }, 900);
  };

  const restart = () => {
    setStarted(false);
    setCurrent(0);
    setAnswers([]);
    setFinished(false);
  };

  return (
    <div
      className="h-screen w-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-4"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      {!started ? (
        <Start onStart={() => setStarted(true)} />
      ) : finished ? (
        <Result answers={answers} restart={restart} />
      ) : (
        <Question
          key={current} // 🔥 esto reinicia el estado interno
          data={questions[current]}
          index={current}
          total={questions.length}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
}
