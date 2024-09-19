import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./components/Spinner";
import Cards from "./components/Cards";

function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchCards() {
      setLoading(true);
      const promises = [];
      for (let i = 1; i <= 102; i ++) {        
        promises.push(axios.get(`https://pokeapi.co/api/v2/pokemon-form/${i}/`));
      }      
      const results = await Promise.all(promises);
      const newCards = results.map(result => result.data);

      setCards(newCards);
      setLoading(false);
    }

    fetchCards();
  }, []);

  if (loading) return <Spinner />;

  return (
    <main className="min-h-screen py-8 px-16 bg-black text-white">
      <h1 className="text-6xl pl-12 mb-16">Pokemon Cards</h1>
      <Cards cards={cards} />
    </main>
  );
}

export default App;
