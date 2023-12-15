// App.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoginForm from './Pages/LoginForm';
import HomePage from './Pages/HomePage';
import Fonlar from './Pages/Fonlar';
import ObservationPage from './Pages/ObservationPage';
import PocketLog from './Pocket/PocketLog';
import { loginUser } from './actions/userActions'; // Kullanıcı action'ları import edin
import { Routes, Route, useNavigate } from 'react-router-dom';
import PocketFirestoreAuthentication from './Pocket/PocketFirestoreAuthentication';
import { ToastContainer } from 'react-toastify';
import { notifySuccess, notifyError } from './Components/ToastNotify';
import './Styles/App.css'; // Stil dosyasını import edin
import PocketLocalService from './Pocket/PocketLocalService';
import Pocket from './Pocket/Pocket';

function App() {

     let navigate = useNavigate();
     const dispatch = useDispatch();

     const isAuthenticated = useSelector(state => state.isAuthenticated); // Redux store'dan giriş durumunu al

     const pocketAuth = new PocketFirestoreAuthentication();

     let pocket = new Pocket();
     pocket.put("_id","ivg0Kgq58rPjBDrUg0");
     pocket.put("age",65)

     console.log("Hello deploy to dev.");
     PocketLocalService.executeService("UpdateUserAge",pocket,(response)=>{
          console.log(response);

     });

     const handleLogin = async (email, password) => {
          try {
               await pocketAuth.authenticate(email, password);
               dispatch(loginUser()); // Kullanıcının giriş yaptığını Redux'a bildir
               notifySuccess("Giriş Başarılı");
               navigate('/anasayfa', { replace: true });
          } catch (error) {
               PocketLog.error("Hatalı giriş", "bla bla bla");
               notifyError("Hatalı Giriş");
          }
     };

     useEffect(() => {
          // Eğer kullanıcı giriş yapmışsa ve login sayfasında ise anasayfaya yönlendir
          if (isAuthenticated && window.location.pathname === '/') {
               navigate('/anasayfa');
          }
     }, [isAuthenticated, navigate]);

     return (

          <>
               <ToastContainer />
               <Routes>
                    <Route path="/" element={<LoginForm onLogin={handleLogin} />} />
                    <Route path="/anasayfa" element={<HomePage />}>
                         <Route path="/anasayfa/observation" element={<ObservationPage />} />
                         <Route path="/anasayfa/fonlar" element={<Fonlar />} />
                    </Route>
               </Routes>
          </>
     );
}

export default App;
