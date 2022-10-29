import HealthBar from "react-bootstrap/ProgressBar";
import React, { FC, useEffect, useState } from "react";
import { MonsterContainerProps } from "../../utilities/interfaces";
import { useContext } from "react";
import { MonsterContext } from "../../context/MonsterContext";

interface MonsterProp {
  monster: MonsterContainerProps;
}

const Monster: FC<MonsterProp> = ({ monster }) => {
  const monsterContextProvider = useContext(MonsterContext);

  const [currentHealth, setCurrentHealth] = useState<number>(monster.maxHP);

  const healthHandler = () => {
    //Reduce Monter's health by a certain amount
    setCurrentHealth((prev) => {
      if (prev - 100 < 0) {
        return 0;
      } else {
        return prev - 100;
      }
    });
  };

  useEffect(() => {
    //Check if the current monster is selected

    if (monsterContextProvider?.selectedMonster === monster) {
      let dmg: number = monsterContextProvider?.damageFromCard;
      setCurrentHealth((prev) => prev - dmg);
    }
  }, [monsterContextProvider?.damageFromCard]);

  // useEffect(() => {
  //   monster.currentHealth = currentHealth;
  //   // monsterContextProvider?.setSelectedMonster(monster);
  //   if (JSON.stringify(monsterContextProvider?.selectedMonster) === JSON.stringify(monster)) {
  //     console.log("este es el seleccionado");
  //   }
  // }, [currentHealth]);

  const toggleSelectAnimation = (e: React.MouseEvent<HTMLElement>) => {
    monsterContextProvider?.setSelectedMonster(monster);
    e.currentTarget.classList.toggle("monsterSelected");
  };

  return (
    <>
      <section onClick={(e) => toggleSelectAnimation(e)} id={monster.name} className='monster'>
        <figure className='figure'>
          <span className='monster__information'>
            <figcaption className='figure-caption'>{monster.name}</figcaption>
          </span>
          <img
            src={monster.image}
            className='figure-img img-fluid rounded monster__image'
            alt='...'
            width={"300px"}
            height='300px'
          />
          <span className='monster__health'>
            <HealthBar
              className='monster__health--healthBar'
              now={currentHealth}
              max={monster.maxHP}
            />
            <figcaption className='figure-caption'>
              {currentHealth}/{monster.maxHP}
            </figcaption>
          </span>
        </figure>
      </section>
    </>
  );
};

export default Monster;
