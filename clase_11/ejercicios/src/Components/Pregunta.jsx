export default function Pregunta({ setRespuesta }) {
  return (
    <div className="space-y-2">
      <h3 className="font-semibold text-purple-700">
        ¿Cuál es tu lenguaje favorito?
      </h3>
      <div className="flex gap-2">
        {["JavaScript", "Python", "Java"].map((op) => (
          <button
            key={op}
            onClick={() => setRespuesta(op)}
            className="bg-purple-200 hover:bg-purple-300 px-3 py-1 rounded-xl shadow"
          >
            {op}
          </button>
        ))}
      </div>
    </div>
  );
}