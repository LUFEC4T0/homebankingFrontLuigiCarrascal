import React from "react";

const CardCards = ({ card }) => {
  let chipColorClass = "card";

  if (card.color === "SILVER") {
    chipColorClass = "card-silver";
  } else if (card.color === "GOLD") {
    chipColorClass = "card-gold";
  } else if (card.color === "TITANIUM") {
    chipColorClass = "card-titanium";
  }

  console.log(card.type);

  return (
    <div className={`${chipColorClass} sm:w-[18rem] sm:h-[10rem]`}>
      <div className="flex justify-between">
        <div className="chip"></div>
        <img
          className="w-14"
          src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
        />
      </div>
      <div className="number">{card.number}</div>
      <div className="name">{card.cardHolder}</div>
      <div className="expiry-cvv flex justify-between">
        <span>{card.thruDate}</span>
        <span>{card.type}</span>
        <span>CVV {card.cvv}</span>
      </div>
    </div>
  );
};

export default CardCards;
