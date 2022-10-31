import MonsterContainer from "./Components/Monsters/MonsterContainer";
import Player from "./Components/Player/Player";
import { GameContextProvider } from "./context/GameContext";

export default function App() {
  return (
    <>
      <div className='app-container'>
        <GameContextProvider>
          <div className='nes-container p-4'>
            <MonsterContainer />
          </div>
          <div className='nes-container p-4'>
            <Player />
          </div>
        </GameContextProvider>
      </div>
    </>
  );
}
