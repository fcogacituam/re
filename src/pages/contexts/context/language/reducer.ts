import { ActionTypes, State, initialState } from "./types";

const appReducer = (state: State, action: any): State => {
  switch (action.type) {
    case ActionTypes.RESET:
      return initialState;
    case ActionTypes.SET_SELECTED_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };

    default:
      return state;
  }
};

export default appReducer;
