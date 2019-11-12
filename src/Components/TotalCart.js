import React from "react";

const TotalCart = (props) => {
  if (props.basket.length > 0) {
    let total = 0;
    for (let i = 0; i < props.basket.length; i++) {
      total = total + (props.basket[i].quantity * props.basket[i].price);
    }
    let finalTotal = total + 2.5;

    return (
      <div className="total-cart">
        <hr className="separator"></hr>
        <div className="sub-total">
          <span className="label-total">Sous Total</span>
          <span className="line-total">{total.toFixed(2)}</span>
        </div>
        <div className="port">
          <span className="label-total">Frais de port</span>
          <span className="line-total">2.50</span>

        </div>
        <hr className="separator"></hr>
        <div className="total">
          <span className="label-total">Total</span>
          <span className="line-total">{finalTotal.toFixed(2)}</span>
        </div>
      </div >
    )
  } else {
    return (
      <div className="empty-total">
        <span className="empty-cart">Votre panier est vide</span>
      </div>
    )
  }
}

export default TotalCart;