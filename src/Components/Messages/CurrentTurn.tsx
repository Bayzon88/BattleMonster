import { useContext } from "react";
import { GameController } from "../../context/GameController";

export default function CurrentTurn(): JSX.Element {
  const gameControllerProvider = useContext(GameController);
  return (
    <div className='nes-container with-title '>
      <p className='title'>Game Status</p>
      <p>Is {gameControllerProvider?.currentTurn}'s turn</p>
    </div>
  );
}
