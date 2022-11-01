import { useContext } from "react";
import { GameController } from "../../context/GameController";

export default function GameOver(): JSX.Element {
  const gameControllerProvider = useContext(GameController);
  const restartGame = () => {
    window.location.reload();
  };
  return (
    <>
      <div className='nes-container with-title '>
        <p className='title'>Game Status</p>
        <p>Game Over! Try Again!</p>
        <button onClick={restartGame} type='button' className='nes-btn is-primary'>
          Play Again?
        </button>
        <button type='button' className='nes-btn is-error'>
          Exit
        </button>
      </div>
    </>
  );
}
