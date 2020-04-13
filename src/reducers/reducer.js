const defaultState = {
  currentUser: {},
  // loggedIn: false,
  allUsers: [],
  allExchanges: [],
  allSkills: [],
  allReviews: [],
  selectedReview: {},
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
      case 'LOAD_REVIEWS':
        return {
          ...state,
          allReviews: action.payload
        }
      // case 'ADD_USER':
      //   return {
      //     ...state,
      //     allUsers: [ ...state.allUsers, action.user]
      //   }
      case 'EDIT_PROFILE':
        return {
          ...state,
          currentUser: action.payload
        }
      case 'LOGIN_USER':
        return {
          ...state,
          currentUser: action.payload,
          // loggedIn: true
        }
      case 'LOGOUT_USER':
        return {
          ...state, currentUser: {}, 
          // loggedIn: false 
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
      case 'SELECT_SKILL':
        return {
          ...state,
          selectedSkill: action.payload
        }
      case 'DELETE_SKILL':
          return {
            ...state,
            currentUser: {
              ...state.currentUser,
              user_skills: [...state.currentUser.user_skills].filter(user_skill => user_skill !== action.payload)
            },
            selectedSkill: {}
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
          allExchanges: [ ...state.allExchanges, action.payload]
        }
      case 'ADD_REVIEW':
        return {
          ...state,
          allReviews: [ ...state.allReviews, action.payload]
        }
      case 'SELECT_REVIEW':
          return {
            ...state,
            selectedReview: action.payload
          }
      case 'DELETE_REVIEW':
        return {
          ...state,
          allReviews: [...state.allReviews].filter(review => review !== action.payload),
          selectedReview: {}
        }
      default: 
        return state
    }
  }
  
  export default reducer
  