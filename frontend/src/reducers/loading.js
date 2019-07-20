/**
 * Reducer to handle the loading
 *
 * @param {object} state
 * @param {object} action
 */
export default function(state = {}, action) {
  const { type } = action;

  // We will use REQUEST, SUCCESS an FAILURE as keywords for handling loading.
  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);

  if (!matches) {
    return state;
  }

  // Break match into parts.
  const [, requestName, requestState] = matches;

  // When the request state is request, we will be loading. Else disable the loader.
  return {
    ...state,
    [requestName]: requestState === "REQUEST"
  };
}
