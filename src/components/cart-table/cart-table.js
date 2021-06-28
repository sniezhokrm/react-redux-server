import React from 'react';
import {connect} from 'react-redux';
import {deleteFromCart, plusFromCart, minusFromCart} from '../../actions';
import nextId from "react-id-generator";
import './cart-table.scss';

const CartTable = ({items, deleteFromCart, totalPrice, plusFromCart, minusFromCart}) => {
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
              {
                items.map(item => {
                  const{title, url, category, price, countFood, id} = item;
                  return (
                    <div key={nextId()} className="cart__item">
                        <img src={url} className="cart__item-img" alt={title}></img>
                        <div className="cart__item-title">{category}</div>
                        <div className="cart__item-price">{price}$</div>
                        <div onClick={() => minusFromCart(id)} className="cart__item-minus">-</div>
                        <div className="cart__item-count">{countFood}шт</div>
                        <div onClick={() => plusFromCart(id)} className="cart__item-plus">+</div>
                        <div className="cart__item-totalPrice">{price*countFood}$</div>
                        <div onClick={() => deleteFromCart(id)} className="cart__close">&times;</div>
                    </div>
                  )
                })

              }

            </div>
        </>
    );
};
const mapStateToProps = ({items, totalPrice, id}) => {
  return {
    items,
    totalPrice,
    id
  }
}

const mapDispatchToProps = {
deleteFromCart,
plusFromCart,
minusFromCart


}
export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
