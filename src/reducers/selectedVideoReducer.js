export const selectedVideoReducer = (state = null, action) => {
  switch (action.type) {
    case "SELECT_VIDEOS":
      return action.payload;
    default:
      return state;
  }
};
