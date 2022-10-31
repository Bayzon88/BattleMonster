import { useContext, useState } from "react";
import { GameContext } from "../../context/GameContext";
import CurrentTurn from "./CurrentTurn";
import GameOver from "./GameOver";
import PlayAgain from "./PlayAgain";
export default function GameMessage(): JSX.Element {
  const gameContextProvider = useContext(GameContext);
  const [gameStatus, setGameStatus] = useState();
  console.log(gameContextProvider?.isGameOver);
  if (gameContextProvider?.isGameOver) {
    return <GameOver />;
  } else {
    return <CurrentTurn />;
  }
}
{
  /* <div className='nes-container with-title '>
<p className='title'>Game Status</p>
<p>Good morning. Thou hast had a good night's sleep, I hope.</p>
</div> */
}
