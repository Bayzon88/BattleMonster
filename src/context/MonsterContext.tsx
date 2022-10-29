import { createContext, useEffect, useState } from "react";
import { MonsterContainerProps, MonsterContextType } from "../utilities/interfaces";

const defaultMonsterValue: MonsterContainerProps = {
  monsterID: 0,
  maxHP: 0,
  name: "no",
  image: "no",
  damage: 0,
  currentHealth: 0,
};

export const MonsterContext = createContext<MonsterContextType | null>(null);

export const MonsterContextProvider = ({ children }: any) => {
  //State to check which monster has been selected by clicking on it.
  const [selectedMonster, setSelectedMonster] =
    useState<MonsterContainerProps>(defaultMonsterValue);

  //State for damage from the card, will get data from the child
  const [damageFromCard, setDamageFromCard] = useState<number>(0);

  //calculate hp for monster after attack
  const decreaseMonstersHP = (damageFromCard: number): void => {
    let updatedMonstersHP: number;
    selectedMonster.currentHealth -= damageFromCard;
  };

  useEffect(() => {}, [damageFromCard]);
  useEffect(() => {
    console.log("Changing Current Health: " + selectedMonster.currentHealth);
  }, [selectedMonster.currentHealth]);
  return (
    <MonsterContext.Provider
      value={{
        selectedMonster,
        setSelectedMonster,
        decreaseMonstersHP,
        damageFromCard,
        setDamageFromCard,
      }}
    >
      {children}{" "}
    </MonsterContext.Provider>
  );
};
