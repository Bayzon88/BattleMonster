import Monster from "./Monster";
import { MonsterContainerProps } from "../../interfaces";
import { generateRandomNumber } from "../../functions";

export default function MonsterContainer() {
  const monsters: MonsterContainerProps[] = require("../../dataMonsters.json");
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
