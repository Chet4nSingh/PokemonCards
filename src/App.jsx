import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchCards() {
      setLoading(true);
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon-form/1/");
      const resData = res.data;

      // Add the card only if it doesn't exist in the state
      setCards((prevState) => {
        const exists = prevState.some((card) => card.id === resData.id);
        if (!exists) {
          return [...prevState, resData];
        }
        return prevState;
      });

      setLoading(false);
    }

    fetchCards();
  }, []); // Empty dependency array ensures this runs once

  if (loading) return <p>Loading...</p>;

  return (
    <main className="h-screen py-8 px-16 bg-black text-white">
      <h1 className="text-6xl mb-8">Pokemon Cards</h1>
      <ul>
        {cards.map((card) => (
          <li key={card.id} className="border p-8">
            <img src={card.sprites.front_default} alt={card.name} />
            <h2>{card.name.toUpperCase()}</h2>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
