export default function Start({ onStart }) {
  return (
    <div className="bg-green-400/90 border-4 border-black rounded-3xl shadow-[6px_6px_0px_black] p-8 text-center animate-fade">
      <h1 className="text-3xl font-black text-black-600 drop-shadow-[2px_2px_0px_white] mb-3">
        🎮 QUIZ DE CÓDIGO
      </h1>

      <button
        onClick={onStart}
        className="bg-blue-600 border-2 border-black px-4 py-2 rounded-xl font-bold text-white shadow-[3px_3px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition"
      >
        Comenzar
      </button>
     
    </div>
  );
}