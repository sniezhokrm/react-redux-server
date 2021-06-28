import React from 'react';
import { Link } from 'react-router-dom';

import './menu-list-item.scss';

const MenuListItem = ({menuItem, onClickCharacterUpdate, addToCart}) => {
  const {title, price, url, category, id} = menuItem;

    return (
        <>
            <li className="menu__item">
                <Link to = {`/${id}`}>
                  <div className="menu__block-icon"><img className="menu__icon" src = {`${category}.png`}/></div>
                  <div className="menu__title">{title}</div>
                  <img className="menu__img" src={url} alt="Cesar salad"></img>
                  <div className="menu__category">Category: <span>{category}</span></div>
                  <div className="menu__price">Price: <span>{price}$</span></div>
                </Link>
                  <button onClick={() => addToCart(id)} className="menu__btn">Add to cart</button>

            </li>

        </>
    )
}

export default MenuListItem;
