import { useContext, useState } from "react";
import { GameContext } from "../../context/GameContext";
import CurrentTurn from "./CurrentTurn";
import GameOver from "./GameOver";
import PlayAgain from "./PlayAgain";
export default function GameMessage(): JSX.Element {
  const gameContextProvider = useContext(GameContext);
  const [gameStatus, setGameStatus] = useState();

  if (gameContextProvider?.isGameOver) {
    console.log("Game Over " + gameContextProvider?.isGameOver);
    return <GameOver />;
  } else {
    return <CurrentTurn />;
  }
}
