// reducers.js


const initialState = {
    isLoggedIn: false,
    accessKey: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          isLoggedIn: true,
          accessKey: action.payload,
        };
      case 'LOGOUT':
        return {
          ...state, 
          isLoggedIn: false,
          accessKey: null,
        };
      
      default:
        return state;
    }
  };
  
  export default rootReducer;
  