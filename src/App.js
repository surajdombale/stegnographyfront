import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Table from './Table';
import { Provider } from 'react-redux';
import { store,  persistor } from './Redux/Store';
import { PersistGate } from 'redux-persist/integration/react';
import AddUser from './AddUser';
import Header from './Header';
import Footer from './Footer';
import Welcome from './Welcome';
import Career from './Career';
import Contact from './Contact';
import About from './About';
import Embed from './Embed';
import Extract from './Extract';
import SignUp from './SignUp';
import Help from './Help';
import Pricing from './Pricing';
import Payment from './Payment';
import PaymentOtp from './PaymentOtp';
import AllImages from './AllImages';
import Images from './Images';
import Forgot from './Forgot';
import Profile from './Profile';
import ChangePassword from './ChangePassword';
import EditUser from './EditUser';
import EditUserAdmin from './EditUserAdmin';
import RegisterOtp from './RegisterOtp';
import SeenEntry from './SeenEntry';
import EditOtp from './EditOtp';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> 
      
      <Header/>
      <main style={mainStyle}>
      
      
      <Routes>
        <Route path="/login/:id" element={<Login/>}/>
          <Route path="/user/:id" element={<Table/>} />
          <Route path="/add" element={<AddUser/>}/>
          <Route path="/" element={<Welcome/>}/>
          <Route path="/career" element={<Career/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/embed" element={<Embed/>}/>
          <Route path="/extract" element={<Extract/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/help" element={<Help/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
          <Route path="/payment" element={<Payment/>}/>
          <Route path="/payotp" element={<PaymentOtp/>}/>
          <Route path="/allimage" element={<AllImages/>}/>
          <Route path="/image" element={<Images/>}/>
          <Route path="/forgot" element={<Forgot/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/changepass" element={<ChangePassword/>}/>
          <Route path="/edituser" element={<EditUser/>}/>
          <Route path="/editadmin" element={<EditUserAdmin/>}/>
          <Route path="/registerotp" element={<RegisterOtp/>}/>
          <Route path="/seen" element={<SeenEntry/>}/>
          <Route path="/editotp" element={<EditOtp/>}/>
       </Routes>
</main>
       <Footer/>
       
       </PersistGate>
       </Provider> 
    </BrowserRouter>
    </div>
  );
}


const mainStyle = {
  flex: 1,
  minHeight: 'calc(100vh - 100px)', // This will make the main content area take up the available space
};
export default App;
