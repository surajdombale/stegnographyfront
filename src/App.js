import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Table from './Table';

import { Provider } from 'react-redux';
import { store,  persistor } from './Redux/Store';
// import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AddUser from './AddUser';
import NavBar from './NavBar';
import Logout from './Logout';
import Header from './Header';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> 
      <Header/>
      <NavBar/> 
      <Routes>
        <Route path="/:id" element={<Login/>}/>
          <Route path="/show/:id" element={<Table/>} />
          <Route path="/add" element={<AddUser/>}/>
           <Route path="/logout" element={<Logout/>}/>   
       </Routes>
       <Footer/>
       </PersistGate>
       </Provider> 
    </BrowserRouter>
    </div>
  );
}

export default App;
