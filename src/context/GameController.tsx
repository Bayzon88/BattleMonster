import { createContext, useState } from "react";
import { GameControllerType } from "../../src/utilities/interfaces";

export const GameController = createContext<GameControllerType | null>(null);
export const GameControllerProvider = ({ children }: any) => {
  //State to Manage Turns between monster and Player
  const [currentTurn, setCurrentTurn] = useState("Player");

  return (
    <GameController.Provider value={{ currentTurn, setCurrentTurn }}>
      {children}
    </GameController.Provider>
  );
};
