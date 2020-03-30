import React from "react";
import createCtx from "./CtxBuilder";
import envConfig from "../config/environment";

const initialState = {
  user: ""
};

type AppState = typeof initialState;

type Action = { type: "USER_LOGIN"; user: string };

/**
 * Redux style reducer for the whole app
 * It takes the current state and an action, and returns the new state
 * @param state
 * @param action
 */
function globalReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "USER_LOGIN":
      return { ...state, user: action.user };
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
