// actions.js
export const login = (key,use,rol) => ({
    type: 'LOGIN',
    payload: key,
    user:use,
    role:rol,
  });
  
  export const logout = () => ({
    type: 'LOGOUT',
    payload: null,
    user:null,
    role:null,
  });

  