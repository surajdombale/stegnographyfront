// actions.js
export const login = (key) => ({
    type: 'LOGIN',
    payload: key,
  });
  
  export const logout = () => ({
    type: 'LOGOUT',
    payload: null,
  });

  