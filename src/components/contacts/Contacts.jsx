import React from 'react'
import style from './Contacts.module.css'
import Call from '../call/Call'

const Contacts = () => {
    return (
        <div>
            <div className={style["bg-color"]}>
                <div className={style["container"]}>
                    <div className={style["contacts-row"]}>
                        <div className={style["contacts-left"]}>
                            <h2>
                                Contact Us
                            </h2>
                            <p>
                                In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus duis pharetra eutortor.
                            </p>
                            <div className="call">
                                <Call />
                            </div>
                            <hr />
                            <h3>
                                Not convinced yet?
                            </h3>
                            <p>
                                Massa bibendum consectetur maurisid gravida purus, dolor dui amet morbi non nunc urna purus diam.
                            </p>
                            <div className={style["contacts-btn"]}>
                                <button>
                                    Browse our packages
                                </button>
                            </div>
                        </div>
                        <div className={style["contacts-right"]}>
                            <div class={style["form-container"]}>
                                <form>
                                    <div className={style["form-row"]}>
                                        <div className={style["form-group"]}>
                                            <label for="full-name">Full name</label>
                                            <input type="text" />
                                        </div>
                                        <div className={style["form-group"]}>
                                            <label for="phone-number">Phone number</label>
                                            <input type="text" />
                                        </div>
                                    </div>

                                    <div className={style["form-row"]}>
                                        <div className={style["form-group"]}>
                                            <label for="address">Address</label>
                                            <input type="text" />
                                        </div>
                                        <div className={style["form-group"]}>
                                            <label for="email">Email</label>
                                            <input type="email" />
                                        </div>
                                    </div>

                                    <div className={style["form-row"]}>
                                        <div className={style["form-group"]}>
                                            <label for="requested-service">Requested service</label>
                                            <input type="text" />
                                        </div>
                                        <div className={style["form-group"]}>
                                            <label for="day-of-service">Day of service</label>
                                            <input type="text" />
                                        </div>
                                    </div>

                                    <div className={style["form-group full"]}>
                                        <label for="add-note">Add a note</label>
                                        <textarea id="add-note" />
                                    </div>

                                    <div className={style["form-group full"]}>
                                        <button type="submit" className={style["submit-btn"]}>Submit message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts