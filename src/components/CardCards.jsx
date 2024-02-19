import React from 'react'

const CardCards = ({card}) => {
    return (
      <div class="card">
      <div class="flex justify-between">
        <div class="chip"></div>
        <img
          className="w-14"
          src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
        />
      </div>
      <div class="number">{card.number}</div>
      <div class="name">{card.cardHolder}</div>
      <div class="expiry-cvv">
        <span>{card.thruDate}</span>
        <span className="m-5">CVV {card.cvv}</span>
      </div>
    </div>
    )
  }

export default CardCards