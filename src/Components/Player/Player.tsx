import HealthBar from "react-bootstrap/ProgressBar";
import CardContainer from "./CardDeck/Cards";
import { CardProps } from "../../interfaces";
import { useState } from "react";
const data = require("../../dataDeck.json");

const Cards: CardProps[] = data;

export default function Player(): JSX.Element {
  const maxHealth: number = 1000;
  const [health, setHealth] = useState<number>(1000);
  //   const ACCESS_KEY = "w_K8o2GUX8mjbaiNzzBr_PdFvf5xUjY-jjlGGLwvIw4";
  //   const URL = `https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`;

  //   fetch(URL)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));

  return (
    <div className='player' id='player'>
      <HealthBar className='healthBar' now={health} label={`${health}`} max={maxHealth} />
      <CardContainer cards={Cards}></CardContainer>
    </div>
  );
}
