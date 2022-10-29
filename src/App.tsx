import MonsterContainer from "./Components/Monsters/MonsterContainer";
import Player from "./Components/Player/Player";
import { MonsterContextProvider } from "./context/MonsterContext";

export default function App() {
  return (
    <>
      <div>
        <MonsterContextProvider>
          <MonsterContainer />
          <Player />
        </MonsterContextProvider>
      </div>
    </>
  );
}
