export default function Resultado({ respuesta }) {
  return (
    <p className="text-gray-700 font-medium">
      Elegiste: <span className="text-purple-600">{respuesta || "Nada aún"}</span>
    </p>
  );
}