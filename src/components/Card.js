import React from "react";

export default function Card(props) {
  return (
    <div className={props.rotateCard ? "card active" : "card"}>
      <div className="flip-card-inner">
        <div className="card-front">
          <div className="chip-card"></div>
          <div className="logo-card"></div>
          <div className="card-number">
            {props.cardNumber.map((n, i) => (
              <span className="char" key={i}>
                {n}
              </span>
            ))}
          </div>
          <div className="card-name">
            <div className="card-name-title">Card Holder</div>
            <div className="card-name-input">{props.cardName}</div>
          </div>
          <div className="card-date">
            <div className="card-date-title">Date</div>
            <div className="card-date-input">
              {props.cardMonth}/{props.cardYear}
            </div>
          </div>
        </div>
        <div className="card-back">
          <div className="stripe"></div>
          <div className="cvv-stripe">
            <div className="stripe-white">
              <div className="cvv-title">CVV</div>
              <div>{props.cardCvv}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
