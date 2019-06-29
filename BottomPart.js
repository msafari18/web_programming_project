import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import logo1 from "./img/logo1.png";
import logo2 from "./img/logo2.png";
import cafebazaardark from "./img/cafebazaar-dark.png";
import googleplaydark from "./img/google-play-dark.png";
import sibappdark from "./img/sib-app-dark.png";

class TopNav extends React.Component {
    render() {
        return (
            <div class="sixth-part">
                <div class="sixth-grid-container">
                    <div class="sixth-grid-item1">
                        <h3 class="sixth-title">
                            اپلیکیشن های موبایل
                        </h3>
                        <img src= {cafebazaardark} class="sixth-image" />
                        <img src= {googleplaydark} class="sixth-image" />
                        <img src= {sibappdark} class="sixth-image" />

                    </div>

                    <div class="sixth-grid-item2">
                        <h3 class="sixth-title">
                            پشتیبانی ریحون
                        </h3>
                        <p>
                            سوالات متداول
                        </p>
                        <p>
                            تماس با پشتیبانی
                        </p>

                        <p>
                            قوانین و مقررات
                        </p>

                    </div>
                    <div class="sixth-grid-item3">
                        <h3 class="sixth-title">
                            رستوران ها
                        </h3>
                        <p>
                            ثبت رستوران
                        </p>

                    </div>

                    <div class="sixth-grid-item4">
                        <h3 class="sixth-title">
                            تماس با ریحون
                        </h3>
                        <p>
                            درباره ریحون
                        </p>
                        <p>
                            تماس با ما
                        </p>

                        <p>
                            وبلاگ ریحون
                        </p>

                    </div>


                    <div class="sixth-grid-item5">
                        <p>
                            مراقبت و محافظت از حساب کاربری و رمز عبور هر کاربر بر عهده کاربر است.ریحون سریعترین راه سفارش آنلاین غذا است. منوی عکس دار رستوران های اطرافتان را بر اساس مکان خود به راحنی مشاهده کنید و سفارش دهید
                        <br />
                            <a href="https://www.reyhoon.com/fastfood" class="resturants-link">لیست رستوران ها </a>

                        </p>
                    </div>
                </div>


                <div class="logos">
                    <img src={logo1} class="sixth-logo" />
                    <img src={logo2} class="sixth-logo" />

                </div>

            </div>



        );

    }
}
export default TopNav;
