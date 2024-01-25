// reducers.js


const initialState = {
    isLoggedIn: false,
    accessKey: null,
    user:null,
    role:null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          isLoggedIn: true,
          accessKey: action.payload,
          user:action.user,
          role:action.role,
        };
      case 'LOGOUT':
        return {
          ...state, 
          isLoggedIn: false,
          accessKey: null,
          user:null,
          role:null,
        };
      
      default:
        return state;
    }
  };
  
  export default rootReducer;
  