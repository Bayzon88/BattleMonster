import GameMessage from "./Components/Messages/GameMessage";
import MonsterContainer from "./Components/Monsters/MonsterContainer";
import Player from "./Components/Player/Player";
import { GameContextProvider } from "./context/GameContext";
import { GameControllerProvider } from "./context/GameController";

export default function App() {
  return (
    <>
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
    </>
  );
}
