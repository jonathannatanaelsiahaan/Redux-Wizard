/* GENERATED BY REDUX-GENERATOR */
import { TYPE } from "../action/action_name_action";

class Reducer {
  static elements(state, action = {}) {
    return ({
      ...state,
      ...action.value
    });
  }

  static reduce(state = {}, action = {}) {
    switch(action.type) {
      case TYPE:
        return Reducer.elements(state, action);
      default:
        return state;
    }
  }
}
export default Reducer;