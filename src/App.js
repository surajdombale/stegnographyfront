import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Table from './Table';
import { Provider } from 'react-redux';
import { store,  persistor } from './Redux/Store';
import { PersistGate } from 'redux-persist/integration/react';
import AddUser from './AddUser';
import NavBar from './NavBar';
import Header from './Header';
import Footer from './Footer';
import Welcome from './Welcome';
import Career from './Career';
import Contact from './Contact';
import About from './About';
import Embed from './Embed';
import Extract from './Extract';
import SignUp from './SignUp';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> 
      <div style={appStyle}>
      <Header/>
      <main style={mainStyle}>
      <NavBar/> 
      
      <Routes>
        <Route path="/:id" element={<Login/>}/>
          <Route path="/show/:id" element={<Table/>} />
          <Route path="/add" element={<AddUser/>}/>
          <Route path="/" element={<Welcome/>}/>
          <Route path="/career" element={<Career/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/embed" element={<Embed/>}/>
          <Route path="/extract" element={<Extract/>}/>
          <Route path="/signup" element={<SignUp/>}/>

       </Routes>
</main>
       <Footer/>
       </div>
       </PersistGate>
       </Provider> 
    </BrowserRouter>
    </div>
  );
}
const appStyle = {
  // display: 'flex',
  flexDirection: 'column',
  // minHeight: '80vh', // Ensures the minimum height of the content area is the full viewport height
};

const mainStyle = {
  flex: 1,
  minHeight: 'calc(100vh - 100px)', // This will make the main content area take up the available space
};
export default App;
