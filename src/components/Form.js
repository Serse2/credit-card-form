import React from "react";

const months = [
  "Month",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];

const years = ["2020", "2021", "2022", "2023", "2024", "2025", "2026"];

export default function Form(props) {
  const addClass = (e) => {
    const cardElement = document.querySelector(`.${e.target.name}`);
    cardElement.classList.add("active");
  };
  const removeClass = (e) => {
    const cardElement = document.querySelector(`.${e.target.name}`);
    cardElement.classList.remove("active");
  };

  return (
    <form className="card-form">
      <label>Card Number</label>
      <input
        type="text"
        id="card-number"
        name="card-number"
        required
        minLength="4"
        maxLength="16"
        size="10"
        placeholder="#### #### #### ####"
        onChange={(e) => props.printOnCard(e)}
        onFocus={(e) => addClass(e)}
        onBlur={(e) => removeClass(e)}
      />
      <label>Card Name</label>
      <input
        type="text"
        id="card-name"
        name="card-name"
        required
        maxLength="20"
        size="10"
        placeholder={props.cardName}
        onChange={(e) => props.printOnCard(e)}
        onFocus={(e) => addClass(e)}
        onBlur={(e) => removeClass(e)}
      />
      <div className="card-form-group">
        <div className="expiration">
          <label>Expiration Date</label>
          <div>
            <select
              id="month"
              name="card-date"
              required
              placeholder="Month"
              onFocus={(e) => addClass(e)}
              onBlur={(e) => removeClass(e)}
              onChange={(e) => props.printOnCard(e)}
            >
              {months.map((m) => (
                <option key={m}>{m}</option>
              ))}
            </select>
            <select
              id="year"
              name="card-date"
              required
              placeholder="Year"
              onFocus={(e) => addClass(e)}
              onBlur={(e) => removeClass(e)}
              onChange={(e) => props.printOnCard(e)}
            >
              {years.map((y) => (
                <option key={y}>{y}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="expiration">
          <label>CVV</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            required
            maxLength="3"
            size="10"
            placeholder="CVV"
            onChange={(e) => props.printOnCard(e)}
            onFocus={(e) => props.hendleRotateCard(e)}
            onBlur={(e) => props.hendleRotateCard(e)}
          />
        </div>
      </div>
      <button className="btn-submit">Submit</button>
    </form>
  );
}
