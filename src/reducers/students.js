import { actionTypes, addTypes, updateTypes, removeTypes } from '../actions/students';
import createReducer from './reducerCreator';

const defaults = {
  error: null,
  loading: false,
  data: [],
}

export default createReducer(defaults, {

  [actionTypes.REQUEST]: (state, action) => ({
    ...state,
    error: null,
    loading: true,
  }),

  [actionTypes.SUCCESS]: (state, action) => ({
    data: action.payload,
    error: null,
    loading: false,
  }),

  [actionTypes.FAILURE]: (state, action) => ({
    data: [],
    error: action.payload.error,
    loading: false,
  }),

  [addTypes.SUCCESS]: (state, action) => ({
    data: [ ...state.data, action.payload ],
    error: null,
    loading: false,
  }),

  [updateTypes.SUCCESS]: (state, action) => ({
    data: state.data.map(it => {
      return it.id === action.payload.id ? { ...it, ...action.payload  } : it
    }),
    error: null,
    loading: false,
  }),

  [removeTypes.SUCCESS]: (state, action) => ({
    data: state.data.filter(it => it.id !== action.payload.id),
    error: null,
    loading: false,
  }),

  [updateTypes.FAILURE]: (state, action) => ({
    ...state,
    error: action.payload.error,
    loading: false,
  }),

  [removeTypes.FAILURE]: (state, action) => ({
    ...state,
    error: action.payload.error,
    loading: false,
  }),
});
