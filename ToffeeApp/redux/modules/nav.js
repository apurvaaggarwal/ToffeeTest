"use strict";
import { NavigationActions } from "react-navigation";
import { AppNavigator } from "../../config/navigator";
// import { REHYDRATE } from "redux-persist/constants";
//import { REHYDRATE } from "redux-persist";

//Actions
const GOBACK = "GOBACK";
const ResetNavigator = "ResetNavigator";
const GOTO = "GOTO";

// Action Creators
export const goBack = () => ({ type: GOBACK });
export const reset = data => {
  return { type: ResetNavigator, data };
};
export const goTo = data => ({ type: GOTO, data });

const initialState = AppNavigator.router.getStateForAction(
  NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({
        routeName: "HomeScreen"
      })
    ]
  })
);

export default function reducer(state = initialState, action) {
  console.log("**** PAYLOAD ****", action.payload);

  let firstState = "HomeScreen";

  switch (action.type) {
    case GOBACK:
      return AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );

    case GOTO:
      return AppNavigator.router.getStateForAction(
        NavigationActions.navigate({
          routeName: action.data.route,
          params: action.data.params || {}
        }),
        state
      );

    // case REHYDRATE:
    //   return AppNavigator.router.getStateForAction(
    //     NavigationActions.reset({
    //       index: 0,
    //       actions: [NavigationActions.navigate({ routeName: firstState })]
    //     }),
    //     state
    //   );

    default:
      return AppNavigator.router.getStateForAction(action, state);
  }
}
