import {AiOutlineSearch} from 'react-icons/ai'
import style from '../menu/Menu.module.scss'

export default function Menu() {
  return (
    <div className={`row ${style.menu} align-items-center`}>
        <div className={`col-md-3 ${style.title}`}>WiSchool</div>
        <div className="col-md-6">
            <ul class="nav">
                <li class="nav-item">
                    <a class={`nav-link ${style['menu-items']}`} aria-current="page" href="#">Home</a>
                    <a class={`nav-link ${style['menu-items']}`} aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class={`nav-link ${style['menu-items']}`} href="#">Courses</a>
                    <a class={`nav-link ${style['menu-items']}`} href="#">Courses</a>
                </li>
                <li class="nav-item">
                    <a class={`nav-link ${style['menu-items']}`} href="#">Instructors</a>
                    <a class={`nav-link ${style['menu-items']}`} href="#">Instructors</a>
                </li>
                <li class="nav-item">
                    <a class={`nav-link ${style['menu-items']}`} href="#">Schedules</a>
                    <a class={`nav-link ${style['menu-items']}`} href="#">Schedules</a>
                </li>
                <li class="nav-item">
                    <a class={`nav-link ${style['menu-items']}`} href="#">Contact Us</a>
                    <a class={`nav-link ${style['menu-items']}`} href="#">Contact Us</a>
                </li>
            </ul>
        </div>
        <div className={`col-md-3 ${style['action-user']}`}>
            <AiOutlineSearch/>
            <div className={style.login}>Login</div>
            <div className={style.register}>Register</div>
        </div>
    </div>
  )
}
