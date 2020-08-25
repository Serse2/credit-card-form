import React, { useState } from "react";
import Form from "./components/Form";
import Card from "./components/Card";

function App() {
  const initialNumber = Array.from("################");

  const [cardNumber, setCardNumber] = useState(initialNumber);
  const [cardName, setCardName] = useState("Insert your Name");
  const [cardMonth, setCardMonth] = useState("MM");
  const [cardYear, setCardYear] = useState("YY");
  const [cardCvv, setCardCvv] = useState("");
  const [rotateCard, setRotateCard] = useState(false);

  const printOnCard = (e) => {
    const { value, id } = e.target;
    switch (id) {
      case "card-number":
        const cardNumber = [
          "#",
          "#",
          "#",
          "#",
          "#",
          "#",
          "#",
          "#",
          "#",
          "#",
          "#",
          "#",
          "#",
          "#",
          "#",
          "#",
        ];
        const inputValue = Array.from(value);
        cardNumber.splice(0, inputValue.length, ...inputValue);
        console.log(cardNumber);
        setCardNumber(cardNumber);
        break;
      case "card-name":
        setCardName(value);
        break;
      case "month":
        setCardMonth(value);
        break;
      case "year":
        const year = value.slice(-2);
        setCardYear(year);
        break;
      case "cvv":
        setCardCvv(value);
        break;
      default:
        break;
    }
  };

  const hendleRotateCard = (e) => {
    setRotateCard((rotateCard) => !rotateCard);
  };

  return (
    <div className="App">
      <Card
        cardNumber={cardNumber}
        cardName={cardName}
        cardMonth={cardMonth}
        cardYear={cardYear}
        cardCvv={cardCvv}
        rotateCard={rotateCard}
      />
      <Form
        cardNumber={cardNumber}
        cardName={cardName}
        printOnCard={printOnCard}
        hendleRotateCard={hendleRotateCard}
      />
    </div>
  );
}

export default App;
