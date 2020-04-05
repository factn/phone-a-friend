import React from "react";
import createCtx from "./CtxBuilder";
import envConfig from "../config/environment";
import { User } from "../model/user";

const initialState = {
  userID: "",
  currentUser: {} as User,
};

type AppState = typeof initialState;

type Action =
  | { type: "USER_LOGIN"; userId: string }
  | { type: "USER_SAVE_DETAILS"; user: User };

/**
 * Redux style reducer for the whole app
 * It takes the current state and an action, and returns the new state
 * @param state
 * @param action
 */
function globalReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "USER_LOGIN":
      return { ...state, userID: action.userId };
    case "USER_SAVE_DETAILS":
      return { ...state, currentUser: action.user };
    default:
      return state;
  }
}

/**
 * This is just a wrapper around the global reducer for logging purposes during development
 * @param state
 * @param action
 */
function globalReducerWithLogging(state: AppState, action: Action): AppState {
  if (envConfig.isLocalDevelopment) {
    console.log("BEFORE: ", state);
    console.log("ACTION: ", action);
  }
  const newState = globalReducer(state, action);
  if (envConfig.isLocalDevelopment) console.log("AFTER: ", newState);
  return newState;
}

type UseStateValue = {
  state: AppState;
  dispatch: React.Dispatch<Action>;
};

export const [AppContext, AppProvider] = createCtx(
  globalReducerWithLogging,
  initialState
);
export const useStateValue: () => UseStateValue = () =>
  React.useContext(AppContext);
