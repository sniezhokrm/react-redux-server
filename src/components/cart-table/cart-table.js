import React from 'react';
import {connect} from 'react-redux';
import WithRestoService from '../hoc/';
import {deleteFromCart, plusFromCart, minusFromCart} from '../../actions';
import nextId from "react-id-generator";
import './cart-table.scss';

const CartTable = ({RestoService, items, deleteFromCart, plusFromCart, minusFromCart}) => {
  console.log(items.length);
const elem = items.length > 0 ? <button onClick={() => {RestoService.setOrder(generateOrder(items))}}  className="cart__btn">Send order</button>:
 <div className="cart__doOrder">Please, doit you order!</div>
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
            {elem}
        </>
    );
};

const generateOrder = (items) => {
    const newOrder = items.map(item => {
        return {
            id: item.id,
            countFood: item.countFood
        }
    })
    return newOrder;
}

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

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(CartTable));
