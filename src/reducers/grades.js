export const ADD_STUDENT = 'ADD_STUDENT';

export default (state = {}, action) => {
 switch (action.type) {
  case 'SIMPLE_ACTION':
   return {
    result: action.payload
   }
  default:
   return state
 }
}
