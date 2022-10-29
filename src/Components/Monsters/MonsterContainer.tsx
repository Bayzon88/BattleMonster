import Monster from "./Monster";
import { MonsterContainerProps } from "../../utilities/interfaces";
import { generateRandomNumber } from "../../utilities/functions";
import { useState, useContext } from "react";
import { MonsterContext, MonsterContextProvider } from "../../context/MonsterContext";
const monsters: MonsterContainerProps[] = require("../../data/dataMonsters.json");
export default function MonsterContainer() {
  //Select 2 random monsters from the array
  const randomMonsterIndex: number[] = [];
  let loop = 0;
  while (loop < 2) {
    let randomMonster = generateRandomNumber(monsters.length);
    if (!randomMonsterIndex.includes(randomMonster)) {
      randomMonsterIndex.push(randomMonster);
      loop++;
    }
  }

  //Create a new array with the 2 selected monsters
  const twoMonstersSelected: MonsterContainerProps[] = [
    monsters[randomMonsterIndex[0]],
    monsters[randomMonsterIndex[1]],
  ];

  return (
    <>
      <section className='monsterContainer'>
        {
          //Map through the twoMonstersSelected array to display each monster
          twoMonstersSelected.map((mon) => {
            return <Monster key={mon.monsterID} monster={mon} />;
          })
        }
      </section>
    </>
  );
}
