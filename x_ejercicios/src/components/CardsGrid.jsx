export default function CardsGrid() {
  const cards = [
    { id: 1, title: "Card 1", text: "Descripción de la card" },
    { id: 2, title: "Card 2", text: "Descripción de la card" },
    { id: 3, title: "Card 3", text: "Descripción de la card" },
    { id: 4, title: "Card 4", text: "Descripción de la card" },
    { id: 5, title: "Card 5", text: "Descripción de la card" },
    { id: 6, title: "Card 6", text: "Descripción de la card" },
  ];

  return (
    <div className="p-6">
      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-black rounded shadow hover:-translate-y-2 hover:shadow-2xl transition-all duration-300
"
          >
            {/* IMAGEN */}
            <img
              src="https://picsum.photos/400/200"
              alt="card"
              className="w-full h-40 object-cover"
            />

            {/* CONTENIDO */}
            <div className="p-4">
              <h2 className="font-bold text-lg mb-2">
                {card.title}
              </h2>

              <p className="text-gray-600">
                {card.text}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

