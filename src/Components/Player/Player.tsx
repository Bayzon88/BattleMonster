import HealthBar from "react-bootstrap/ProgressBar";
import CardContainer from "./CardDeck/Cards";
import { CardProps } from "../../utilities/interfaces";
import { useState } from "react";
const data = require("../../data/dataDeck.json");

const Cards: CardProps[] = data;

export default function Player(): JSX.Element {
  const maxHealth: number = 1000;
  const [health, setHealth] = useState<number>(1000);

  return (
    <div className='player' id='player'>
      <HealthBar className='healthBar' now={health} label={`${health}`} max={maxHealth} />
      <CardContainer cards={Cards}></CardContainer>
    </div>
  );
}
//   const ACCESS_KEY = "w_K8o2GUX8mjbaiNzzBr_PdFvf5xUjY-jjlGGLwvIw4";
//   const URL = `https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`;

//   fetch(URL)
//     .then((response) => response.json())
//     .then((data) => console.log(data));
