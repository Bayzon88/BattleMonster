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
  decreaseMonstersHP: (damageFromCard: number) => void;
}
