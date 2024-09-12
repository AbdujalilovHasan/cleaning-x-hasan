import React from 'react'
import style from './Covid.module.css'
import covidImg from '../../assets/images/IMAGE (14).png'
import Btn from '../btn/Btn'
import Call from '../call/Call'

const Covid = () => {
    return (
        <div>
            <div className={style["container"]}>
                <div className={style["background"]}>
                    <div className={style["covid-row"]}>
                        <div className={style["covid-left"]}>
                            <div className={style["covid-img"]}>
                                <img src={covidImg} alt="covidImg" />
                            </div>
                        </div>
                        <div className={style["covid-right"]}>
                            <h4>
                                Covid-19 sanitization
                            </h4>
                            <h1>
                                We follow guidelines to keep you safe from the COVID-19 virus
                            </h1>
                            <p>
                            Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.
                            </p>
                            <div className={style["btn-row"]}>
                                <div className="btn">
                                    <Btn />
                                </div>
                                <div className="call">
                                    <Call />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Covid