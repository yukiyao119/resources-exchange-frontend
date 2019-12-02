
const defaultState = {
  currentUser: {},
  allUsers: [],
  allExchanges: [],
  allSkills: [],
  chosenSkill: {},
  selectedExchange: {},
  selectedSkill: {},
  selectedUser: {}
  // newExchange: false
}

const reducer = (state = defaultState, action) => {

    switch (action.type) {
      case 'LOAD_USERS':
        return {
          ...state,
          allUsers: action.payload
        }
      case 'LOAD_EXCHANGES':
        return {
          ...state,
          allExchanges: action.payload
        }
      case 'LOAD_SKILLS':
        return {
          ...state,
          allSkills: action.payload
        }
      case 'ADD_USER':
        return {
          ...state,
          allUsers: [ ...state.allUsers, action.user]
        }
      case 'EDIT_PROFILE':
        return {
          ...state,
          currentUser: action.payload
        }
      case 'LOGIN_USER':
        return {
          ...state,
          currentUser: action.payload
        }
      case 'LOGOUT_USER':
        return {
          ...state, currentUser: {} 
        }
      case 'SELECT_USER':
          return {
            ...state, selectedUser: action.payload
          }
      case 'ADD_SKILL':
        return {
          ...state,
          currentUser: {
            ...state.currentUser, 
            user_skills: state.currentUser.user_skills.concat(action.payload)
          }
        }
      case 'SELECT_EXCHANGE':
        return {
          ...state,
          selectedExchange: action.payload
        }
      case 'CANCEL_EXCHANGE':
        return {
          ...state,
          allExchanges: [...state.allExchanges].filter(exchange => exchange !== action.payload),
          selectedExchange: {}
        }
      case 'ADD_EXCHANGE':
          return {
            ...state,
            allExchanges: [ ...state.allExchanges, action.user]
          }
      case 'SELECT_SKILL':
        return {
          ...state,
          selectedSkill: action.payload
        }
      // case 'NEW_EXCHANGE':
      //   return {

      //   }
      default: 
        return state
    }
  }
  
  export default reducer
  