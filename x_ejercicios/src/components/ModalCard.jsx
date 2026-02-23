import { useState } from "react";

export default function ModalCard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-2">

      {/* CARD */}
      <div
        onClick={() => setOpen(true)}
        className="mx-auto bg-white p-6 border rounded shadow cursor-pointer hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 w-64"
      >
        Click para abrir modal
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

          <div className="bg-white rounded p-6 w-80 shadow-xl animate-fadeIn">

            <h2 className="text-xl font-bold mb-4">
              Modal abierto 🎉
            </h2>

            <p className="mb-4">
              Este modal se abrió al hacer click.
            </p>

            <button
              onClick={() => setOpen(false)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Cerrar
            </button>

          </div>
        </div>
      )}
    </div>
  );
}
