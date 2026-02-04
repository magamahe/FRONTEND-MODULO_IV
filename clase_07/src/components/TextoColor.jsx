import { useState } from "react";

function TextoColor() {
  const [activo, setActivo] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <p
        className={`text-lg font-medium ${
          activo ? "text-pink-500" : "text-slate-700"
        }`}
      >
        Este texto cambia de color
      </p>

      <button
        className="self-start bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
        onClick={() => setActivo(!activo)}
      >
        Cambiar color
      </button>
    </div>
  );
}

export default TextoColor;
