import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import { GameStart } from "../../utilities/interfaces";

export default function Welcome({ gameStarted }: GameStart): JSX.Element {
  return (
    <div className='welcome'>
      <div className='nes-container welcome__message'>
        <p className='title'>Welcome to Battle Monster</p>
        <div className='nes-field '>
          <label>Your name</label>
          <input type='text' id='name_field' className='nes-input' />
          <button onClick={() => gameStarted()} type='button' className='nes-btn is-primary'>
            Start!
          </button>
        </div>
      </div>
    </div>
  );
}
