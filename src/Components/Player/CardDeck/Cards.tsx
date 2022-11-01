import { FC, SetStateAction, useState, useEffect, useContext, MouseEventHandler } from "react";
import { CardProps } from "../../../utilities/interfaces";
import { generateRandomNumber } from "../../../utilities/functions";
import { GameContext } from "../../../context/GameContext";
import { GameController } from "../../../context/GameController";

interface CardContainerProps {
  cards: CardProps[];
}

const CardContainer: FC<CardContainerProps> = (cards) => {
  const gameContextProvider = useContext(GameContext);
  const gameControllerProvider = useContext(GameController);
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

  function removeCardFromDeck(removeCard: CardProps): void {
    // ***************************************************
    //Pass selected card damage  and mana to the context provider
    gameContextProvider?.setDamageFromCard(removeCard.damage);
    console.log(gameContextProvider?.selectedMonster);
    gameContextProvider?.setMana((prev) => {
      if (prev === 0 || prev - removeCard.manaCost < 0) {
        //If mana below 0 after attack, game over
        gameContextProvider?.setIsGameOver(true);
        return prev;
      } else if (gameContextProvider.selectedMonster.name === "no") {
        return prev;
      } else {
        //Handle new Deck, card Animation and turn
        handlePlayersTurn(removeCard);

        //reduce mana
        return prev - removeCard.manaCost;
      }
    });
  }

  function handlePlayersTurn(cardToBeHandled: CardProps) {
    //***************************** Animation for removed Card *****************************/
    const cardAnimation: HTMLElement | null = document.getElementById(
      cardToBeHandled.cardID.toString()
    );
    cardAnimation?.classList.add("cardAttack");

    //***************************** New Deck and Turn selector *****************************/
    if (gameControllerProvider?.currentTurn === "Player") {
      //Delay to wait for animation(2s) of the card
      setTimeout(() => {
        //When using a card from the deck, the card will be removed and a new random card will appear

        //Remove the used card from the deck, now only 4 cards remain
        //Create temporal deck of cards, removing the desired card from the original deck
        const temporalDeck: CardProps[] = deckOfFiveCards.filter((card) => card != cardToBeHandled);
        let isDuplicated: boolean = true;

        //Insert a new card into the array if it's not duplicated
        while (isDuplicated) {
          //Select a new Random card
          let randomCard: number = generateRandomNumber(cards.cards.length);
          //Check if random card already exists in the deck
          //Undefined means it doesn't exists
          const findingDuplicatedCard: CardProps | undefined = temporalDeck.find(
            (card) => card.cardID == randomCard
          );
          if (findingDuplicatedCard === undefined) {
            //Insert a new card on the temporal deck
            temporalDeck.push(cards.cards[randomCard]);
            isDuplicated = false; //Ends the loop for adding a new card
          }
        }
        //Return new deck of five cards
        setDeckOfFiveCards(temporalDeck);

        //Set the turn to monster
        // gameControllerProvider?.setCurrentTurn("Monster");
      }, 2000);
    }
  }
  return (
    <>
      <section id='deck' className='deck'>
        {deckOfFiveCards.map((card) => {
          return (
            <div
              className='deck__card'
              onClick={() => {
                if (
                  !gameContextProvider?.isGameOver &&
                  gameControllerProvider?.currentTurn == "Player"
                )
                  removeCardFromDeck(card);
              }}
              id={card.cardID.toString()}
              key={card.cardID}
              style={{ width: "19.5%", maxWidth: "198px", height: "198px" }}
            >
              <div className='nes-container is-rounded' style={{ minHeight: "150px" }}>
                <div className='card-body'>
                  <h2>{card.cardName}</h2>
                  <h3>Damage: {card.damage}</h3>
                  <h4>Mana: {card.manaCost}</h4>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default CardContainer;
