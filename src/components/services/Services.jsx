import React from 'react'
import style from './Services.module.css'
import servicesImg1 from '../../assets/images/IMAGE (11).png'
import servicesImg2 from '../../assets/images/IMAGE (12).png'
import servicesImg3 from '../../assets/images/IMAGE (13).png'


const Services = () => {
    return (
        <div>
            <div className={style["container"]}>
                <div className={style["services-row"]}>
                    <div className={style["services-left"]}>
                        <h2>
                            Our Services
                        </h2>
                    </div>
                    <div className={style["services-right"]}>
                        <div className={style["btn-right"]}>
                            <button className={style["services-btn"]}>
                                Explore services
                            </button>
                        </div>
                    </div>
                </div>
                <div className={style["services-cards"]}>
                    <div className={style["services-card"]}>
                        <div className={style["card-img"]}>
                            <img src={servicesImg1} alt="servicesImg" />
                        </div>
                        <div className={style["services-card-content"]}>
                            <h3>
                                House cleaning
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.
                            </p>
                        </div>
                    </div>
                    <div className={style["services-card"]}>
                        <div className={style["card-img"]}>
                            <img src={servicesImg2} alt="servicesImg" />
                        </div>
                        <div className={style["services-card-content"]}>
                            <h3>
                                Office cleaning
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.
                            </p>
                        </div>
                    </div>
                    <div className={style["services-card"]}>
                        <div className={style["card-img"]}>
                            <img src={servicesImg3} alt="servicesImg" />
                        </div>
                        <div className={style["services-card-content"]}>
                            <h3>
                                Industrial cleaning
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services