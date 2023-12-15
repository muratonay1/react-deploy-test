// HomePage.jsx
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, useNavigate, Switch, Route, Outlet} from 'react-router-dom';
import Navbar from '../Components/Navbar'; // SideNavBar bileşenini import edin
import { GiHamburgerMenu } from 'react-icons/gi';
import '../Styles/HomePage.css'; // Stil dosyasını import edin


function HomePage() {
     const navigate = useNavigate();
     const isAuthenticated = useSelector(state => state.user.isAuthenticated);
     const [ showNav, setShowNav] = useState(true);

     useEffect(() => {
          if (!isAuthenticated) {
               navigate('/');
          }
     }, [isAuthenticated, navigate]);

     return (
          <div className='App'>
               <header>
                    <GiHamburgerMenu onClick={()=>setShowNav(!showNav)}/>
               </header>
               <Navbar show={showNav}/>
               <div className='main'>
                    <Outlet />
               </div>
          </div>
     );
}

export default HomePage;
