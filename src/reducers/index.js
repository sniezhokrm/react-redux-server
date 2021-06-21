const initialState = {
  menu: [],
  loading: true,
  error: false
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "MENU_LOADED":
      return {
        menu: action.payload,
        loading: state.loading,
        error: state.error
      };
      case "MENU_REQUEST":
        return {
          menu: state.menu,
          loading: false,
          error: state.error
        };
      case "MENU_ERROR":
        return {
          menu: state.menu,
          loading: false,
          error: true
        };
      default:
        return state;
  }
}

export default reducer;
