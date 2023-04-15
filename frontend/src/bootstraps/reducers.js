import { states } from "./intialStates";
import * as CONST from "./constans";

const reducer = (state = states, action) => {
  const { type, payload } = action;
  
  switch (type ) {
    case CONST.SET_DARKMODE:
      return {
        ...state.darkmode,
        darkmode: payload.darkmode,
      };
    default:
      return state;
  }
  }
  
  export default reducer;