import React, { useState, useEffect } from "react";
import { createPokemons, handleCellClick } from "../../../utils/popstar";
import AudioControls from "./components/AudioControls";
import PokemonCell from "./components/PokemonCell";
import "./index.less";

const Popstar: React.FC = () => {
  const [pokemons, setPokemons] = useState<number[][]>(createPokemons());
  const [score, setScore] = useState<number>(0);
  const [selectedCells, setSelectedCells] = useState<Set<string>>(new Set());

  useEffect(() => {
    setPokemons(createPokemons());
  }, []);

  const onCellClick = (x: number, y: number) => {
    const selected = new Set(selectedCells);

    if (pokemons[x][y] === 0 || selected.size === 1) {
      setSelectedCells(new Set());
    } else if (selected.size === 0) {
      setSelectedCells(new Set([`${x}-${y}`]));
    } else {
      const { newPokemons, pointsEarned } = handleCellClick(pokemons, x, y);
      setPokemons(newPokemons);
      setScore(score + pointsEarned);
      setSelectedCells(new Set());
    }
  };

  return (
    <div className="popstar">
      <header className="popstar__header">
        <h1>Pokemons - PopStar</h1>
        <AudioControls />
        <div className="popstar__score">
          <span>SCORE: {score}</span>
        </div>
      </header>
      <table className="popstar__table">
        <tbody>
          {pokemons.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((pokemon, colIndex) => (
                <PokemonCell
                  key={`${rowIndex}-${colIndex}`}
                  x={rowIndex}
                  y={colIndex}
                  value={pokemon}
                  onClick={onCellClick}
                  isSelected={selectedCells.has(`${rowIndex}-${colIndex}`)}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Popstar;
