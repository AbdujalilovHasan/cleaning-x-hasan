import React from 'react'
import style from './Resources.module.css'
import Btn from '../btn/Btn'
import resourcesImg1 from '../../assets/images/IMAGE (15).png'
import resourcesImg2 from '../../assets/images/Frame (1).png'

const Resources = () => {
    return (
        <div>
            <div className={style["container"]}>
                <div className={style["resources-row"]}>
                    <div className={style["resources-left"]}>
                        <h2>
                            Articles & resources
                        </h2>
                    </div>
                    <div className={style["resources-right"]}>
                        <div className="btn">
                            <Btn />
                        </div>
                        <div className={style["btn-right"]}>
                            <button className={style["resources-btn"]}>
                                Browse articles
                            </button>
                        </div>
                    </div>
                </div>
                <div className={style["resources-card-row"]}>
                    <div className={style["resources-card"]}>
                        <div className={style["resources-img"]}>
                            <img src={resourcesImg1} alt="" />
                        </div>
                        <div className={style["resources-card-content"]}>
                            <h2>
                                8 best vacuum cleaners to clean any mess for your home in 2022
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.
                            </p>
                            <div className={style["card-btn-row"]}>
                                <div className={style["card-data"]}>
                                    <p>
                                        Jan 28, 2022
                                    </p>
                                </div>
                                <div className={style["card-bottom-rectangle"]}></div>
                            </div>
                        </div>
                    </div>
                    <div className={style["resources-card"]}>
                        <div className={style["resources-img"]}>
                            <img src={resourcesImg2} alt="" />
                        </div>
                        <div className={style["resources-card-content"]}>
                            <h2>
                                8 best vacuum cleaners to clean any mess for your home in 2022
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.
                            </p>
                            <div className={style["card-btn-row"]}>
                                <div className={style["card-data"]}>
                                    <p>
                                        Jan 28, 2022
                                    </p>
                                </div>
                                <div className={style["card-bottom-rectangle"]}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resources