import { questions } from "./data";

export default function Result({ answers, restart }) {
  const score = answers.filter(
    (ans, i) => ans === questions[i].answer
  ).length;

  return (
    <div className="bg-emerald-500/90 border-4 border-black rounded-3xl shadow-[6px_6px_0px_black] w-full max-w-xl p-6 text-center animate-fade">
      <h2 className="text-2xl font-black text-white mb-2">
        Resultado
      </h2>

      <p className="text-white mb-4 font-bold">
        Puntaje: {score} / {questions.length}
      </p>

      <button
        onClick={restart}
        className="bg-yellow-400 border-2 border-black px-4 py-2 rounded-xl font-bold shadow-[3px_3px_0px_black]"
      >
        Reiniciar
      </button>
    </div>
  );
}