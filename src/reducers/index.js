const initialState = {
  menu: [],
  loading: true,
  error: false,
  items: []
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
      case  "ITEM_ADD_TO_CART":
        const id = action.payload;
        const item = state.menu.find(item => item.id === id);
        const newItem = {
          title: item.title,
          category: item.category,
          id: item.id,
          price: item.price,
          url: item.url
        }
        return {
          ...state,
          items: [
            ...state.items,
            newItem
          ]
        };
        case "ITEM_REMOVE_FROM_CART":
        const idx = action.payload;
        const itemIndex = state.menu.findIndex(item => item.id === idx);
        return {
            ...state,
            items: [
            ...state.items.slice(0, itemIndex),
            ...state.items.slice(itemIndex + 1)
          ]
        }
      default:
        return state;
  }
}

export default reducer;
