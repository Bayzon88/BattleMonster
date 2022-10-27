import CardContainer from "./CardDeck/Cards";
import { CardProps } from "../../interfaces";
const data = require("../../dataDeck.json");

const Cards: CardProps[] = data;

export default function Player(): JSX.Element {
  //   const ACCESS_KEY = "w_K8o2GUX8mjbaiNzzBr_PdFvf5xUjY-jjlGGLwvIw4";
  //   const URL = `https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`;

  //   fetch(URL)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));

  return <>{<CardContainer cards={Cards}></CardContainer>}</>;
}
