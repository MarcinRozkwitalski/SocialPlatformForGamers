import React, { useState, useEffect } from 'react';
import './App.css';
import CardList from './Components/GameList/GameList';
import Search from './Components/Search/Search';

const App: React.FC = () => {

  const games = [
    { id: 1, gameName: "Counter-Strike 2", shortName: "CS2", shortDescription: "For over two decades, Counter-Strike has offered an elite competitive experience, one shaped by millions of players from across the globe. And now the next chapter in the CS story is about to begin. This is Counter-Strike 2.", genre: "FPS", price: 0 },
    { id: 2, gameName: "Grand Theft Auto V", shortName: "GTAV", shortDescription: "Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.", genre: "MULTIPLAYER", price: 29.98 },
    { id: 3, gameName: "PUBG: BATTLEGROUNDS", shortName: "PUBG", shortDescription: "Land on strategic locations, loot weapons and supplies, and survive to become the last team standing across various, diverse Battlegrounds. Squad up and join the Battlegrounds.", genre: "BATTLE ROYALE", price: 0 },
    { id: 4, gameName: "Baldur's Gate 3", shortName: "BG3", shortDescription: "Baldur’s Gate 3 is a story-rich, party-based RPG set in the universe of Dungeons & Dragons, where your choices shape a tale of fellowship and betrayal, survival and sacrifice, and the lure of absolute power.", genre: "RPG", price: 59.99 },
    { id: 5, gameName: "RISK: Global Domination", shortName: "RISK", shortDescription: "Take over the world in RISK Global Domination, the iconic strategy board game.", genre: "STRATEGY", price: 0 },
    { id: 6, gameName: "Rust", shortName: "RUST", shortDescription: "TThe only aim in Rust is to survive. Everything wants you to die - the island’s wildlife and other inhabitants, the environment, other survivors. Do whatever it takes to last another night.", genre: "SURVIVAL", price: 39.99 }
  ];

  const [filteredGames, setFilteredGames] = useState(games);

  const handleSearch = (query: string) => {
    const lowercasedQuery = query.toLowerCase();
    const filtered = games.filter(game =>
      game.gameName.toLowerCase().includes(lowercasedQuery) || 
      game.shortName.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredGames(filtered);
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <CardList games={filteredGames} />
    </div>
  );
}

export default App;
