import React from "react";

function Cards({ cards }) {
  return (
    <ul className="flex flex-wrap gap-8 justify-center">
      {cards.map((card) => (
        <li
          key={card.id}
          className="w-[30%] border p-4 flex items-center gap-8 hover:scale-105 hover:bg-white hover:text-black duration-75"
        >
          <img
            src={card.sprites.front_default}
            alt={card.name}
            className="w-40 h-40"
          />
          <h2 className="text-2xl">{card.name.toUpperCase()}</h2>
        </li>
      ))}
    </ul>
  );
}

export default Cards;
