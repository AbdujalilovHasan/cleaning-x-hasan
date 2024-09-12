import React from 'react'
import style from './About.module.css'
import cardImg1 from '../../assets/images/IMAGE (8).png'
import cardImg2 from '../../assets/images/IMAGE (9).png'
import cardImg3 from '../../assets/images/IMAGE (10).png'
import Btn from '../btn/Btn'


const About = () => {
    return (
        <div>
            <div className={style["container"]}>
                <h1>
                    About Us
                </h1>
                <p className={style["desc"]}>
                    Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non ultrices massa id egestas quam velit pretium nu.
                </p>
                <div className={style["about-cards"]}>
                    <div className={style["about-card"]}>
                        <div className={style["card-img"]}>
                            <img src={cardImg1} alt={style["calendar"]} />
                        </div>
                        <h2>
                            1. Schedule online
                        </h2>
                        <p>
                            Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.
                        </p>
                    </div>
                    <div className={style["about-card"]}>
                        <div className={style["card-img"]}>
                            <img src={cardImg2} alt={style["calendar"]} />
                        </div>
                        <h2>
                            2. Pay online easily
                        </h2>
                        <p>
                            Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc.
                        </p>
                    </div>
                    <div className={style["about-card"]}>
                        <div className={style["card-img"]}>
                            <img src={cardImg3} alt={style["calendar"]} />
                        </div>
                        <h2>
                            3. Get your house cleaned
                        </h2>
                        <p>
                            Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend.
                        </p>
                    </div>
                </div>
                <div className={style["about-btns"]}>
                    <div className={style["about-btn-left"]}>
                        <Btn />
                    </div>
                    <div className="about-btn-right">
                        <button className={style["services-btn"]}>
                            Explore services
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About