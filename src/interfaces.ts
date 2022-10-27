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
}
