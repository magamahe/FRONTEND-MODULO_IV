export default function InputA({ texto, setTexto }) {
  return (
    <input
      className="border border-purple-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 outline-none px-3 py-2 rounded-xl w-full transition"
      placeholder="Input A"
      value={texto}
      onChange={(e) => setTexto(e.target.value)}
    />
  );
}