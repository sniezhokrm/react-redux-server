import React, {Component} from 'react';
import {connect} from 'react-redux';
import WithRestoService from '../hoc/';
import {deleteFromCart, plusFromCart, minusFromCart} from '../../actions';
import nextId from "react-id-generator";
import './cart-table.scss';

class CartTable extends Component {
  sendCart() {
    if( this.props.items.length > 0){

        const {RestoService} = this.props;
        RestoService.setOrder(this.props.items)
      //      .then(() => {console.log(this.props.items)};)
            .catch(error => console.error("error during record"))
          }
      }

render() {
  const{RestoService, items, deleteFromCart, plusFromCart, minusFromCart}=this.props
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
            <button onClick={() => {RestoService.setOrder(generateOrder(items))}}  className="cart__btn">Send order</button>
        </>
    );
};
}

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
