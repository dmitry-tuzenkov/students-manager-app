
export const makeActions = (prefix) => ({
  REQUEST: `${prefix}_REQUEST`,
  SUCCESS: `${prefix}_SUCCESS`,
  FAILURE: `${prefix}_FAILURE`,
});

export const makeApiCallActions = (prefix, apiCall, opts = {}) => {
  return (dispatch, getState) => {
    const { resolver } = opts;
    const { REQUEST, SUCCESS, FAILURE } = makeActions(prefix);
    
    dispatch({ type: REQUEST });

    return apiCall(getState())
      .then(response => dispatch({
        type: SUCCESS,
        payload: resolver ? resolver(response): response,
      }))
      .catch(error => dispatch({
        type: FAILURE,
        payload: { error }
      }));
  };
}
