const initialState = {
  isReserved: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        isReserved: true,
        user: action.payload
      };
    default:
      return state;
  }
}
