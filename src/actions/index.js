
const menuLoaded = (newMenu) => {
  return {
    type: "MENU_LOADED",
    payload: newMenu
  }
}

const menuRequest = () => {
  return {
    type: "MENU_REQUEST"
  }
}
const menuError = () => {
  return {
    type: "MENU_ERROR"
  }
}
const addedToCart = (id) => {
  return {
    type: "ITEM_ADD_TO_CART",
    payload: id
  }
}
const deleteFromCart = (id) => {
  return {
    type: "ITEM_REMOVE_FROM_CART",
    payload: id
  }
}
const minusFromCart = (id) => {
  return {
    type: "COUNT_REMOVE_FROM_CART",
    payload: id
  }
}
const plusFromCart = (id) => {
  return {
    type: "COUNT_ADD_FROM_CART",
    payload: id
  }
}

export {
  menuLoaded,
  menuRequest,
  menuError,
  addedToCart,
  deleteFromCart,
  minusFromCart,
  plusFromCart

}
