import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import f1 from './img/f1.jpeg';
import f2 from './img/f2.jpeg';
import f3 from './img/f3.jpeg';
import f4 from './/img/f4.jpeg';
import mobileImg from "./img/mobile.png"
import iosImg from "./img/ios.png"
import bazaarImg from "./img/bazaar.png"
import googleImg from "./img/google.png"
import reyhoonImg from "./img/reyhoon.png"

class TopNav extends React.Component {
    render() {
        return (
            <div class="fifth-part">

                <div class="fifth-title">
                    <h2> غذا چی میل دارید؟</h2>
                    <h4>صبحانه، ناهار، شام یا هر چیزی که میل دارید را انتخاب کنید</h4>
                </div>

                <div class="fifth-grid-container">

                    <div class="fifth-grid-item">
                        <img src={f1} class="fifth-image" />
                        <div class="food-name">
                            ساندویچ
                        </div>
                        <div class="active-rest">
                            2398 رستوران فعال
                        </div>
                    </div>


                    <div class="fifth-grid-item">
                        <img src={f2} class="fifth-image" />
                        <div class="food-name">
                            همبرگر
                        </div>

                        <div class="active-rest">
                            2108 رستوران فعال
                        </div>
                    </div>


                    <div class="fifth-grid-item">
                        <img src={f3} class="fifth-image" />
                        <div class="food-name">
                            پیتزا
                        </div>
                        <div class="active-rest">
                            2142 رستوران فعال
                        </div>
                    </div>


                    <div class="fifth-grid-item">
                        <img src={f4} class="fifth-image" />
                        <div class="food-name">
                            غذای پلویی
                        </div>
                        <div class="active-rest">
                            1691 رستوران فعال
                        </div>
                    </div>

                </div>

                <div class="food-choise">
                    انتخاب غذاهای بیشتر
                </div>

                <div class="foods">
                    <input type="button" class="foods-button" value="خورشت"></input>
                    <input type="button" class="foods-button" value="غذای پلویی"></input>
                    <input type="button" class="foods-button" value="خوراک"></input>
                    <input type="button" class="foods-button" value="سالاد"></input>
                    <input type="button" class="foods-button" value="غذای ایرانی"></input>
                    <input type="button" class="foods-button" value="فست فود"></input>
                    <input type="button" class="foods-button" value="سوخاری"></input>
                    <input type="button" class="foods-button" value="پاستا"></input>
                    <input type="button" class="foods-button" value="چلوکباب"></input>
                    <input type="button" class="foods-button" value="ماهی"></input>
                    <input type="button" class="foods-button" value="استیک"></input>
                    <input type="button" class="foods-button" value="بشقاب"></input>
                    <input type="button" class="foods-button" value="صبحانه"></input>
                    <input type="button" class="foods-button" value="سوپ"></input>
                    <input type="button" class="foods-button" value="غذای دریایی"></input>
                    <input type="button" class="foods-button" value="آبمیوه طبیعی"></input>
                </div>

                {/* <div class="mobile-part">

                    <div class="in-mobile">
                        <       h1 class="mobile-title">
                            ریحون روی موبایل
</h1>
                        <h4 class="mobile-paragraph">
                            برای دریافت لینک اپلیکیشن ریحون، شماره موبایل خود را وارد کنید
    </h4>

                        <div class="mobile-search-box">
                            <a class="mobile-search-btn" href="#">
                                دریافت لینک از طریق پیام
        </a>
                            <input class="mobile-search-txt" type="text" name="" placeholder=" 0912******* مثلا " />
                        </div>
                        <p class="p" >اپلیکیشن ریحون برای اندروید و آی او اس در دسترس است</p>
                        <img src={mobileImg} class="mobile-image" />
                        <img src={iosImg} class="mobile-icon" />
                        <img src={bazaarImg} class="mobile-icon" />
                        <img src={googleImg} class="mobile-icon" />
                        <img src={reyhoonImg} class="mobile-icon" />


                    </div>
                </div> */}

            </div>



        );

    }
}
export default TopNav;
