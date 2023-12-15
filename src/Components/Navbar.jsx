import logo from '../logo.png'
import { Link} from 'react-router-dom';
const Navbar = ({show}) => {
     return (
          <div className={show ? "sidenav active": "sidenav"}>
               <div className='logoContainer'>
                    <img src={logo} alt="Logo" className='logo' />
               </div>
               <ul>
                    <li>
                         <Link to='/anasayfa/observation' className="active">Home</Link>
                    </li>

                    <li>
                         <Link to='/anasayfa/fonlar'>Fonlar</Link>
                    </li>

                    <li>
                         <Link to='/'>Tasklar</Link>
                    </li>

                    <li>
                         <Link to='/'>About Us</Link>
                    </li>
               </ul>
          </div>
     )
}

export default Navbar;