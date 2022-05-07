import './index.scss'
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck, faEnvelope, faHome, faRunning, faUser } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return(
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className="sub-logo"src={LogoSubtitle} alt="slobodan" />
        </Link>
        <nav>
        <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="routines-link" to="/routines">
            <FontAwesomeIcon icon={faClipboardCheck} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="activities-link" to="/activities">
            <FontAwesomeIcon icon={faRunning} color="#4d4d4e" />
        </NavLink>
        </nav>
        <ul>
        <li>
          <NavLink
            exact="true" activeclassname="active" className='login-link' to="/login">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;