import {AiOutlineSearch} from 'react-icons/ai'
import style from '../menu/Menu.module.scss'
import { useNavigate } from 'react-router-dom'

export default function Menu() {

    const navigate = useNavigate();

  return (    
    <div className={`navbar ${style.menu} navbar-expand-lg`}>
        <div className={`container-fluid`}>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div className={`navbar-brand ${style.title}`}>WiSchool</div>
            <div className={`collapse navbar-collapse d-flex justify-content-center`} id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className={`nav-link ${style['menu-items']}`} aria-current="page" href="#">Home</a>
                        <a className={`nav-link ${style['menu-items']}`} aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${style['menu-items']}`} href="#">Courses</a>
                        <a className={`nav-link ${style['menu-items']}`} href="#">Courses</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${style['menu-items']}`} href="#">Instructors</a>
                        <a className={`nav-link ${style['menu-items']}`} href="#">Instructors</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${style['menu-items']}`} href="#">Schedules</a>
                        <a className={`nav-link ${style['menu-items']}`} href="#">Schedules</a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${style['menu-items']}`} href="#">Contact Us</a>
                        <a className={`nav-link ${style['menu-items']}`} href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div className={`${style['action-user']}`}>
                <AiOutlineSearch />
                <div className={style.login} onClick={() => navigate('/login')}>Login</div>
                <div className={style.register}>Register</div>
            </div>

        </div>
    </div>
  )
}
