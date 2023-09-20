export interface State {
  language: string;
  languages: string[];
}

export const initialState: State = {
  language: "es",
  languages: ["es", "en", "fr"],
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
  SET_SELECTED_LANGUAGE = "SET_SELECTED_LANGUAGE",
  RESET = "RESET",
}
