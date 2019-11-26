

// export default (state = {}, { type, payload }) => {
//   switch (type) {
//     case 'SET_USER':
//       return payload;
//     case 'CLEAR_USER':
//       return {};
//     default:
//       return state;
//   }
// }

const initialState = {
  allUsers: [],
  allSkills: [],
  currentUser: {},
  mySkill: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
      case 'ADD_USER':
        return {
          ...state,
          allUsers: [ ...state.allUsers, action.user]
        }
      case 'LOGIN_USER':
        return {
          ...state,
          currentUser: action.payload
        }
      case 'LOGOUT_USER':
          return {...state, currentUser: {} }
      default: 
        return state
    }
  }
  
  export default reducer
  