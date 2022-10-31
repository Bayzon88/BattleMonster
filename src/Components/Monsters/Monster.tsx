import HealthBar from "react-bootstrap/ProgressBar";
import React, { FC, useEffect, useState } from "react";
import { MonsterContainerProps } from "../../utilities/interfaces";
import { useContext } from "react";
import { GameContext } from "../../context/GameContext";

interface MonsterProp {
  monster: MonsterContainerProps;
}

const Monster: FC<MonsterProp> = ({ monster }) => {
  const gameContextProvider = useContext(GameContext);

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

    if (
      gameContextProvider?.selectedMonster === monster &&
      gameContextProvider.isGameOver == false
    ) {
      let dmg: number = gameContextProvider?.damageFromCard;

      setCurrentHealth((prev) => prev - dmg);
    }
  }, [gameContextProvider?.damageFromCard]);

  // useEffect(() => {
  //   monster.currentHealth = currentHealth;
  //   // monsterContextProvider?.setSelectedMonster(monster);
  //   if (JSON.stringify(monsterContextProvider?.selectedMonster) === JSON.stringify(monster)) {
  //     console.log("este es el seleccionado");
  //   }
  // }, [currentHealth]);

  const toggleSelectAnimation = (e: React.MouseEvent<HTMLElement>) => {
    gameContextProvider?.setSelectedMonster(monster);
    e.currentTarget.classList.toggle("monsterSelected");
  };

  return (
    <>
      <section onClick={(e) => toggleSelectAnimation(e)} id={monster.name} className=''>
        <figure className='figure monster'>
          <span className='monster__information '>
            <figcaption className='figure-caption nes-text is-primary'>{monster.name}</figcaption>
          </span>
          <img
            src={monster.image}
            className='figure-img img-fluid rounded monster__image'
            alt='...'
            width={"300px"}
            height='300px'
          />
          <span className='monster__health'>
            <progress
              className='nes-progress is-error monster__health--healthBar'
              value={currentHealth}
              max={monster.maxHP}
            ></progress>

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
