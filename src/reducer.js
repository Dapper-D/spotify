export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQBNFapshIPyLek2SmtKwh5EhII1rvV9cLM8y6vCEmiT0M91ZX33G1cUdg89T7Jxiw-rSDpygivxC3t_AUdtuz9Y642HCB3gvLAhEtuDOcatHrz6eM62wVfPR7zwO4DZwkLJGPDtHfcCjXRkBFxK-bugMvIN5qCYLXqooIJJ_jMwLr2aqAZSmeK0tk4eHsCj6G0DyOpYEzJ7wSMMbUek",
};

const reducer = (state, action) => {
  console.log(action);

  //action -> type, [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
