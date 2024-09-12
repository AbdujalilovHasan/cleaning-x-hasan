import React from 'react'
import style from './Hero.module.css'
import Btn from '../btn/Btn'
import Call from '../call/Call'
import cleaningImg from '../../assets/images/IMAGE (7).png'

const Hero = () => {
    return (
        <div>
            <div className={style["container"]}>
                <div className={style[ "hero-row" ]}>
                    <div className={style[ "hero-left" ]}>
                        <h1>
                            Quality cleaning for your home
                        </h1>
                        <p>
                            Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.
                        </p>
                        <div className={style[ "components-row" ]}>
                            <div className="btn">
                                <Btn />
                            </div>
                            <div className="call">
                                <Call />
                            </div>
                        </div>
                    </div>
                    <div className={style[ "hero-right" ]}>
                        <div className={style[ "hero-img"]}>
                            <img src={cleaningImg} alt="cleaningImg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero