const initialState = {
  menu: [],
  loading: true,
  error: false,
  items: [],
  totalPrice: 0
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "MENU_LOADED":
      return {
        ...state,
        menu: action.payload
      };
      case "MENU_REQUEST":
        return {
          ...state,
          loading: false,
        };
      case "MENU_ERROR":
        return {
          ...state,
          loading: false,
          error: true
        };
        case "SEND_CART":
        return {
          ...state
        }
      case  "ITEM_ADD_TO_CART":
        const id = action.payload;
        const item = state.menu.find(item => item.id === id);
        const itemInd = state.items.findIndex(item => item.id === id);
        if (itemInd < 0) {
          const newItem = {
              title: item.title,
              category: item.category,
              id: item.id,
              price: item.price,
              url: item.url,
              countFood: 1
          }

          return {
            ...state,
            items: [
              ...state.items,
              newItem
            ],
            totalPrice: state.totalPrice + newItem.price
          };
        } else {
          const itemInState = state.items.find(item => item.id === id);
          const newItem = {
            ...itemInState,
              countFood: ++itemInState.countFood
          }
            return {
              ...state,
              items: [
                ...state.items.slice(0, itemInd),
                newItem,
                ...state.items.slice(itemInd + 1)
              ],
              totalPrice: state.totalPrice + newItem.price
          };
        };
        case "ITEM_REMOVE_FROM_CART":
        const idx = action.payload;
        const itemIndex = state.items.findIndex(item => item.id === idx);
          return {
              ...state,
              items: [
                ...state.items.slice(0, itemIndex),
                ...state.items.slice(itemIndex + 1)
              ]
        }
        case "COUNT_REMOVE_FROM_CART":
        const idMinusCount = action.payload;
        const itemMinusState = state.items.find(item => item.id === idMinusCount);
        const itemIndMinus = state.items.findIndex(item => item.id === idMinusCount);
        const newItemMinus = {
          ...itemMinusState,
            countFood: --itemMinusState.countFood
          }

          if (itemMinusState.countFood >= 0) {
        return {
          ...state,
          items: [
            ...state.items.slice(0, itemIndMinus),
            newItemMinus,
            ...state.items.slice(itemIndMinus+1)
          ],
          totalPrice: state.totalPrice - newItemMinus.price
        }
      } else {
        const newItemMinusZero = {
          ...itemMinusState,
            countFood: 0
          }
          return {
            ...state,
            items: [
              ...state.items.slice(0, itemIndMinus),
              newItemMinusZero,
              ...state.items.slice(itemIndMinus+1)
            ],
            totalPrice: state.totalPrice
          }
      }
        case "COUNT_ADD_FROM_CART":
        const idPlusCount = action.payload;
        const itemPlusState = state.items.find(item => item.id === idPlusCount);
        const itemIndPlus = state.items.findIndex(item => item.id === idPlusCount);
        const newItemPlus = {
          ...itemPlusState,
            countFood: ++itemPlusState.countFood
          }
          return {
            ...state,
            items: [
              ...state.items.slice(0, itemIndPlus),
              newItemPlus,
              ...state.items.slice(itemIndPlus+1)
            ],
            totalPrice: state.totalPrice + newItemPlus.price
          }

          default:
          return state;
        }
  }


export default reducer;
