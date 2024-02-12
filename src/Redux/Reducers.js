// reducers.js


const initialState = {
  // link:"http://localhost:8080",
  link:"https://stegno-production.up.railway.app",
    isLoggedIn: false,
    accessKey: null,
    user:null,
    role:null,
    username:null,
    otp:null,
    id:null,
    subscribe:false,
    subDate:null,
    mail:null,
    fullName:null,
    joinDate:null,
    seenId:null,
    pass:null,
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
          subscribe:action.subscribe,
          username:action.username,
          subDate:action.subDate,
          joinDate:action.joinDate,

        };
      case 'LOGOUT':
        return {
          ...state, 
          isLoggedIn: false,
          accessKey: null,
          user:null,
          role:null,
          subscribe:false,
          username:null,
          subDate:null,
          joinDate:null,
          mail:null,
          fullName:null,
          otp:null,
          id:null,
          seenId:null,
          ipass:null,
        };
        
          case 'ID':
            return{...state,
              id:action.id,
            };
            case 'EDIT':
              return{...state,
                mail:action.mail,
                fullName:action.fullName,
                otp:action.otp,
               
              }
              case 'CLEAR':
                return{...state,
                  mail:null,
                fullName:null,
                otp:null,
                id:null,
                pass:null,
                }
                case 'SEENID':
            return{...state,
              iseenId:action.seenId,
            }
            case 'REGISTER':
              return{...state,
                // link:"https://stegno-production.up.railway.app",
                mail:action.mail,
                fullName:action.fullName,
                otp:action.otp,
                pass:action.pass,
              }
              case 'SUBSCRIBE':
              return{...state,
                subDate:action.subDate,
                subscribe:action.subscribe,
                
              }

      default:
        return state;
    }
  };
  
  export default rootReducer;
  