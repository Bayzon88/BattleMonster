import { useState } from "react";
import GameMessage from "./Components/Messages/GameMessage";
import Welcome from "./Components/Messages/Welcome";
import MonsterContainer from "./Components/Monsters/MonsterContainer";
import Player from "./Components/Player/Player";
import { GameContextProvider } from "./context/GameContext";
import { GameControllerProvider } from "./context/GameController";
import { GameStart } from "./utilities/interfaces";

export default function App() {
  const [isGameStarted, setGameStarted] = useState<boolean>(false);

  const startGame = () => {
    setGameStarted(true);
  };
  return (
    <>
      {isGameStarted ? (
        <div className='app-container'>
          <GameControllerProvider>
            <GameContextProvider>
              <div className='nes-container with-title '>
                <p className='title ' style={{ color: "black" }}>
                  Monsters
                </p>
                <MonsterContainer />
              </div>
              <GameMessage />
              <div className='nes-container with-title  '>
                <p className='title  ' style={{ color: "black" }}>
                  Player
                </p>
                <Player />
              </div>
            </GameContextProvider>
          </GameControllerProvider>
        </div>
      ) : (
        <Welcome gameStarted={startGame} />
      )}
    </>
  );
}
