import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import WithRestoService from '../hoc/with-resto-service';
import {menuLoaded, menuRequest, menuError, addedToCart} from '../../actions/index';
import Spinner from '../spinner/spinner';
import nextId from "react-id-generator";
import Error from '../error/error';
import './menu-list.scss';


class MenuList extends Component {
  componentDidMount() {
    const {RestoService, menuError, menuLoaded, menuRequest} = this.props;
    menuRequest();;
    if (true) {
    }
      RestoService.getMenuItems()
      .then((res) => {menuLoaded(res);})
      .catch(err => {menuError(); })
  }

    render() {
      const {menuItems, loading, error, addedToCart} = this.props;
      if (error) {
        return <Error />
      }
      if (loading) {
        return <Spinner />
      }

      const items = menuItems.map(menuItem => {
        const id = nextId();
              return (
                  <MenuListItem
                    key = {id}
                    menuItem = {menuItem}
                    addToCart={()=>addedToCart(menuItem.id)}/>
              )
          })
        return (
          <View items={items} />
        )
    }
};

const View = ({items}) => {
  return (
    <ul className="menu__list">
      {items}
  </ul>
  )
}

const mapStateToProps = (state) => {
  return {
    menuItems: state.menu,
    loading: state.loading,
    error: state.error
  }
}

const mapDispatchToProps = {
  menuLoaded,
  menuRequest,
  menuError,
  addedToCart
}



export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));
