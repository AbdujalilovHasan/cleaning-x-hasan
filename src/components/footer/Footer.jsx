import React from 'react'
import style from './Footer.module.css'
import logo from '../../assets/images/IMAGE (6).png'

const Footer = () => {
    return (
        <div>
            <div className={style["container"]}>
                <div className={style["footer-row"]}>
                    <div className={style["footer-left"]}>
                        <h1>
                            Quality cleaning for your home
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do eiusmo.
                        </p>
                        <div className={style["rectangle-row"]}>
                            <div className={style["rectangle"]}></div>
                            <div className={style["rectangle"]}></div>
                            <div className={style["rectangle"]}></div>
                            <div className={style["rectangle"]}></div>
                            <div className={style["rectangle"]}></div>
                        </div>
                    </div>
                    <div className={style["contact-us"]}>
                        <h1>
                            Contact us
                        </h1>
                        <p>
                            1827 Nickel Road, Los Angeles, CA, 90017, United States
                        </p>
                        <p>
                            (414) 567 - 2109
                        </p>
                        <a href="mailto:contact@cleaning.com">contact@cleaning.com</a>
                    </div>
                    <div className={style["hours"]}>
                        <h1>
                            Hours
                        </h1>
                        <h2>
                            Monday to Friday
                        </h2>
                        <p>
                            6:00 AM - 9:00 PM
                        </p>
                        <h2>
                            Saturday & Sunday
                        </h2>
                        <p>
                            8:00 AM - 8:00 PM
                        </p>
                    </div>
                    <div className={style["footer-right"]}>
                        <h1>
                            Get a free estimate
                        </h1>
                        <h2>
                            (414) 567 - 2109
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do eiusmod.
                        </p>
                        <div className="footer-btn">
                            <button>
                                Request a free quote
                            </button>
                        </div>
                    </div>
                </div>
                <hr />
                <div className={style["footer-row2"]}>
                    <div className={style["footer-bottom-left"]}>
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                    <div className={style["footer-bottom-right"]}>
                        <p>
                            Copyright © Cleaning X | Designed by
                        </p>
                        <a href="#link6">BRIX Templates</a>
                        <p>
                            - Powered by
                        </p>
                        <a href="#link7">Webflow</a>
                        <p>
                            -
                        </p>
                        <a href="#link8">Licenses</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer