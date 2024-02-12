// actions.js
export const login = (key,use,rol,sub,name,joinDat,subDat) => ({
    type: 'LOGIN',
    payload: key,
    user:use,
    role:rol,
    subscribe:sub,
    username:name,
    joinDate:joinDat,
    subDate:subDat
  });
  
  export const logout = () => ({
    type: 'LOGOUT',
    payload: null,
    user:null,
    role:null,
    subscribe:false,
    username:null,
    fullName:null,
    joinDate:null,
  });  

export const setId =(idd)=>({
  type:'ID',
id:idd,

})

export const setEdit=(email,name,otpp)=>({
type:'EDIT',
fullName:name,
mail:email,
otp:otpp,

})
export const clear=()=>({
  type:'CLEAR',
})
export const Register=(email,name,otpp,password)=>({
  type:'REGISTER',
fullName:name,
mail:email,
otp:otpp,
pass:password,

})
export const Subscribe=(sub,date)=>({
  type:'SUBSCRIBE',
  subDate:date,
   subscribe:sub,
})
