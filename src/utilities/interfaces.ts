import { NumberLiteralType } from "typescript";

export interface CardProps {
  cardName: string;
  cardID: number;
  manaCost: number;
  damage: number;
  image: string;
}

export interface MonsterContainerProps {
  monsterID: number;
  maxHP: number;
  name: string;
  image: string;
  damage: number;
  currentHealth: number;
}

export interface MonsterContextType {
  selectedMonster: MonsterContainerProps;
  setSelectedMonster: React.Dispatch<React.SetStateAction<MonsterContainerProps>>;
  damageFromCard: number;
  setDamageFromCard: React.Dispatch<React.SetStateAction<number>>;
  attackMonster: (damageFromCard: number, manaFromCard: number) => void;
  manaFromCard: number;
  setManaFromCard: React.Dispatch<React.SetStateAction<number>>;
  mana: number;
  setMana: React.Dispatch<React.SetStateAction<number>>;
  playerHealth: number;
  setPlayerHealth: React.Dispatch<React.SetStateAction<number>>;
  isGameOver: boolean;
  setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>;
}
