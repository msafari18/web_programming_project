import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import mobileImg from "./img/mobile.png"
import iosImg from "./img/ios.png"
import bazaarImg from "./img/bazaar.png"
import googleImg from "./img/google.png"
import reyhoonImg from "./img/reyhoon.png"


class TopNav extends React.Component {
    render() {
        return (
            
        <div class="mobile-part">

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
            </div>

    );

    }
}
export default TopNav;
