import { FC, SetStateAction, useState, useEffect, MouseEventHandler } from "react";
import { CardProps } from "../../../interfaces";
import { generateRandomNumber } from "../../../functions";

interface CardContainerProps {
  cards: CardProps[];
}

const CardContainer: FC<CardContainerProps> = (cards) => {
  const [deckOfFiveCards, setDeckOfFiveCards] = useState<CardProps[]>([]);
  const randNumbers: number[] = [];
  //Choose 5 random cards from the original deck of 20
  let loop = 0;
  while (loop < 5) {
    let randomGeneratedNumber = generateRandomNumber(cards.cards.length);
    if (!randNumbers.includes(randomGeneratedNumber)) {
      randNumbers.push(randomGeneratedNumber);
      loop++;
    }
  }

  function createDeckOfCards() {
    const deckOfFive: CardProps[] = cards.cards.filter((card) => randNumbers.includes(card.cardID));
    setDeckOfFiveCards(deckOfFive);
  }
  useEffect(() => {
    createDeckOfCards();
  }, []);

  function removeCardFromDeck(removeCard: number): CardProps[] {
    //When using a card from the deck, the card will be removed and a new random card will appear
    //Remove the used card from the deck, now only 4 cards remain

    //Create temporal deck of cards, removing the desired card from the original deck
    const temporalDeck: CardProps[] = deckOfFiveCards.filter((card) => card.cardID != removeCard);

    let isDuplicated: boolean = true;
    //Insert a new card into the array if it's not duplicated
    while (isDuplicated) {
      //Create a new Random card
      let randomCard: number = generateRandomNumber(cards.cards.length);
      //Check if random card already exists in the deck
      //Undefined means it doesn't exists
      const findingDuplicatedCard: CardProps | undefined = temporalDeck.find(
        (card) => card.cardID == randomCard
      );
      if (findingDuplicatedCard === undefined) {
        //Insert a new card on the temporal deck
        temporalDeck.push(cards.cards[randomCard]);
        isDuplicated = false;
      }
    }

    //Return new deck of five cards
    return temporalDeck;
  }

  return (
    <>
      <section id='deck' className='deck'>
        {deckOfFiveCards.map((card) => {
          return (
            <div
              className='deck__card'
              onClick={() => {
                setDeckOfFiveCards(removeCardFromDeck(card.cardID));
              }}
              id={card.cardID.toString()}
              key={card.cardID}
              style={{ width: "198px", height: "350px" }}
            >
              <img
                draggable={false}
                src={card.image}
                className='card-img-top'
                alt=''
                style={{ height: "190px" }}
              />
              <div className='card-body'>
                <h2>{card.cardName}</h2>
                <p>Damage: {card.damage}</p>
                <p>Mana: {card.manaCost}</p>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default CardContainer;

//   <div className='cardContainer' key={card.cardID}>
//
//
//   </div>
