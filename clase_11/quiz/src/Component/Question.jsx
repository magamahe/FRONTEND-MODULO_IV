import { useState } from "react";

export default function Question({ data, index, total, onAnswer }) {
  const [selected, setSelected] = useState(null);

 const handleClick = (opt) => {
    if (selected !== null) return;
    setSelected(opt);
    onAnswer(opt);
  };

  return (
    <div className="bg-violet-500/90 border-4 border-black rounded-3xl shadow-[8px_8px_0px_black] w-full max-w-xl p-6 text-center animate-fade">

      {/* barra progreso */}
      <div className="w-full bg-gray-200 h-2 rounded mb-4 overflow-hidden">
        <div
          className="bg-fuchsia-700 h-2 transition-all duration-500"
          style={{ width: `${((index + 1) / total) * 100}%` }}
        />
      </div>

      <p className="inline-block bg-black text-white text-sm px-3 py-1 rounded-full mb-4">
        Pregunta {index + 1} de {total}
      </p>

      <div className="bg-gray-700 border-2 border-black rounded-2xl p-4 mb-4 text-white">
        <p className="font-semibold text-lg">{data.question}</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {data.options.map((opt, i) => {
          const isCorrect = opt === data.answer;
          const isSelected = opt === selected;

          let style =
            "border-2 border-black rounded-xl py-2 px-3 font-bold shadow-[3px_3px_0px_black] transition";

          if (selected === null) style += " bg-yellow-300 hover:scale-105";
          else if (isCorrect) style += " bg-green-400";
          else if (isSelected) style += " bg-red-400";
          else style += " bg-yellow-200 opacity-60";

          return (
            <button key={i} onClick={() => handleClick(opt)} className={style}>
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}