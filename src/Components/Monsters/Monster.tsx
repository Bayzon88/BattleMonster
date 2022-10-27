import HealthBar from "react-bootstrap/ProgressBar";
import { FC, useState } from "react";
import { MonsterContainerProps } from "../../interfaces";

interface MonsterProp {
  monster: MonsterContainerProps;
}

const Monster: FC<MonsterProp> = ({ monster }) => {
  const [currentHealth, setCurrentHealth] = useState<number>(monster.maxHP);
  const healthHandler = () => {
    //Reducer Monter's health by a certain amount
    setCurrentHealth((prev) => {
      if (prev - 100 < 0) {
        return 0;
      } else {
        return prev - 100;
      }
    });
  };
  return (
    <>
      <section draggable id={monster.name} className='monster'>
        <figure className='figure'>
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
          <span className='monster__information'>
            <figcaption className='figure-caption'>{monster.name}</figcaption>
          </span>
          <button
            onClick={() => {
              healthHandler();
            }}
          >
            Attack
          </button>
        </figure>
      </section>
    </>
  );
};

export default Monster;
