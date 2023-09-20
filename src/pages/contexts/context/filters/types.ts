export interface State {
  selected: string;
}

export const initialState: State = {
  selected: "2",
};

export interface ContextProps {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export interface Props {
  children: React.ReactNode;
}

export type Action = {
  type: ActionTypes;
  payload?: any;
};

export const enum ActionTypes {
  SET_SELECTED = "SET_SELECTED",
  RESET = "RESET",
}
