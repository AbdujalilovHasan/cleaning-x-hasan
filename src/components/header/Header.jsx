import React from 'react'
import style from './Header.module.css'
import Btn from '../btn/Btn'
import logo from '../../assets/images/IMAGE (6).png'
import bars from '../../assets/images/icon-bars.png'


const Header = () => {
    return (
        <div>
            <nav>
                <div className={style["nav-row"]}>
                    <div className={style["nav-left"]}>
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="nav-links">
                            <ul>
                                <li>
                                    <a className={style["header-links"]} href="#link1">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a className={style["header-links"]} href="#link2">
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a className={style["header-links"]} href="#link3">
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a className={style["header-links"]} href="#link4">
                                        Articles
                                    </a>
                                </li>
                                <li>
                                    <a className={style["header-links"]} href="#link4">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={style["icon-bars"]}>
                        <img width={'30px'} src={bars} alt="bars" />
                    </div>
                    <div className={style["nav-right"]}>
                        <div className={style["cart"]}>
                            <p>Cart (0)</p>
                        </div>
                        <div className={style["btn"]}>
                            <Btn />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header