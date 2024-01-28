// actions.js
export const login = (key,use,rol,sub) => ({
    type: 'LOGIN',
    payload: key,
    user:use,
    role:rol,
    subscribe:sub,
  });
  
  export const logout = () => ({
    type: 'LOGOUT',
    payload: null,
    user:null,
    role:null,
    subscribe:null,
  });

  