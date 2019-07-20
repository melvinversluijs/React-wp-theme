/**
 * Export errors reducer.
 */
export default function(state = {}, action) {
  // Get type and payload from action.
  const { type, payload } = action;

  // Check if a REQUEST or FAILURE type was sent.
  const matches = /(.*)_(REQUEST|FAILURE)/.exec(type);

  // If there are not matches. Quit here.
  if (!matches) {
    return state;
  }

  // Get requestName and state from the type. If state was FAILURE set the payload as error object.
  const [, requestName, requestState] = matches;
  return {
    ...state,
    [requestName]: requestState === "FAILURE" ? payload : null
  };
}
