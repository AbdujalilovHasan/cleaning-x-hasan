import React from 'react'
import style from './Call.module.css'
import callIcon from '../../assets/images/call.png'

const Call = () => {
    return (
        <div>
            <div className={style["call-row"]}>
                <div className={style["call-icon"]}>
                    <img src={callIcon} alt="callIcon" />
                </div>
                <div className={style[ "call-number"]}>
                    <p>
                        Call us now
                    </p>
                    <h4>
                        (414) 567 - 2109
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default Call