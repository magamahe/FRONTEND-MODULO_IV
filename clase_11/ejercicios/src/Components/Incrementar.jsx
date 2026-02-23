export default function Incrementar({ setContador }) {
  return (
    <button
      onClick={() => setContador((c) => c + 1)}
      className="bg-teal-300 hover:bg-teal-400 text-white w-10 h-10 rounded-full text-xl shadow"
    >
      +
    </button>
  );
}