import HealthBar from "react-bootstrap/ProgressBar";
import CardContainer from "./CardDeck/Cards";
import { CardProps } from "../../utilities/interfaces";
import { useContext, useState } from "react";
import { GameContext } from "../../context/GameContext";
const data = require("../../data/dataDeck.json");

const Cards: CardProps[] = data;

export default function Player(): JSX.Element {
  const gameContextProvider = useContext(GameContext);
  const maxHealth: number = 1000;
  const maxMana: number = 100;
  const [health, setHealth] = useState<number>(maxHealth);

  return (
    <div className='player' id='player'>
      <div className='healthBar'>
        <progress className='nes-progress is-primary ' value={health} max={maxHealth}></progress>
        <figcaption className='figure-caption'>
          {health}/{maxHealth}
        </figcaption>
      </div>
      <div className='manaBar'>
        <progress
          className='nes-progress is-success '
          value={gameContextProvider?.mana}
          max={maxMana}
        ></progress>
        <figcaption className='figure-caption'>
          {gameContextProvider?.mana == undefined ? 0 : gameContextProvider?.mana}/{maxMana}
        </figcaption>
      </div>
      <CardContainer cards={Cards}></CardContainer>
    </div>
  );
}
