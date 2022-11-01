import { createContext, useContext, useEffect, useState } from "react";
import { MonsterContainerProps, MonsterContextType } from "../utilities/interfaces";
import { GameController } from "./GameController";

const defaultMonsterValue: MonsterContainerProps = {
  monsterID: 0,
  maxHP: 0,
  name: "no",
  image: "no",
  damage: 0,
  currentHealth: 0,
};

export const GameContext = createContext<MonsterContextType | null>(null);

export const GameContextProvider = ({ children }: any) => {
  //State to Manage if the game is over
  const [isGameOver, setIsGameOver] = useState<boolean>(false);

  //State to check which monster has been selected by clicking on it.
  const [selectedMonster, setSelectedMonster] =
    useState<MonsterContainerProps>(defaultMonsterValue);

  // ****************************************************
  //State to check health and mana
  const [playerHealth, setPlayerHealth] = useState<number>(1000);
  const [mana, setMana] = useState<number>(100);

  // ****************************************************
  //State for damage from the card, will get data from the child
  const [damageFromCard, setDamageFromCard] = useState<number>(0);
  //State for mana from the card, will get data from the child
  const [manaFromCard, setManaFromCard] = useState<number>(0);

  // ****************************************************
  //calculate hp for monster after attack
  const attackMonster = (damageFromCard: number, manaFromCard: number): void => {
    let updatedMonstersHP: number;
    selectedMonster.currentHealth -= damageFromCard;
  };

  useEffect(() => {
    if (mana <= 0 || playerHealth <= 0) {
      setIsGameOver(true);
    }
  }, [mana, playerHealth]);
  return (
    <GameContext.Provider
      value={{
        selectedMonster,
        setSelectedMonster,
        attackMonster,
        damageFromCard,
        setDamageFromCard,
        manaFromCard,
        setManaFromCard,
        mana,
        setMana,
        playerHealth,
        setPlayerHealth,
        isGameOver,
        setIsGameOver,
      }}
    >
      {children}{" "}
    </GameContext.Provider>
  );
};
