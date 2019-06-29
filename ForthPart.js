import React, { Component } from "react";
import './main.css';
// import { fastar } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import op1 from './img/op1.jpeg';
import op2 from './img/op2.jpeg';
import op3 from './img/op3.jpeg';
import op4 from './img/op4.png';
import op5 from './img/op5.jpeg';
// import op6 from './img/op6. ';
import op7 from './img/op7.jpeg';
import op8 from './img/op8.jpeg';
import op9 from './img/op9.jpeg';
import op10 from './img/op10.jpeg';
import op11 from './img/op11.jpeg';
import op12 from './img/op12.jpeg';



class OtherPart extends Component {
    render() {
        return (

            <div class="forth-part">

                <h3 class="grid-title">
                    رستوران های خوب تهران در ریحون
                </h3>
                <div class="grid-container">
                    <div class="grid-item">
                        <img src={op1} class="best-image" />
                        <div>
                            <p class="image-title">ویترین</p>
                        </div>
                    </div>
                    <div class="grid-item">
                        <img src={op2} class="best-image" />
                        <div>
                            <p class="image-title">شاندیز جردن</p>
                        </div>
                    </div>
                    <div class="grid-item">
                        <img src={op3} class="best-image" />
                        <div>
                            <p class="image-title">تهیه ی غذای راد</p>
                        </div>
                    </div>
                    <div class="grid-item">
                        <img src={op4} class="best-image" />
                        <div>
                            <p class="image-title">آمولای</p>
                        </div>
                    </div>
                    <div class="grid-item">
                        <img src={op5} class="best-image" />
                        <div>
                            <p class="image-title">جنارو</p>
                        </div>
                    </div>
                    <div class="grid-item">
                        {/* <img src={op6} class="best-image" /> */}
                        <div>
                            <p class="image-title">لانجین</p>
                        </div>
                    </div>
                    <div class="grid-item">
                        <img src={op7} class="best-image" />
                        <div>
                            <p class="image-title">جوگریل فود</p>
                        </div>
                    </div>
                    <div class="grid-item">
                        <img src={op8} class="best-image" />
                        <div>
                            <p class="image-title">رستوران کوبابا</p>
                        </div>
                    </div>
                    <div class="grid-item">
                        <img src={op9} class="best-image" />
                        <div>
                            <p class="image-title">تومو</p>
                        </div>
                    </div>
                    <div class="grid-item">
                        <img src={op10} class="best-image" />
                        <div>
                            <p class="image-title">کترینگ و تشریفات
                            <br/> ناریجه</p>
                        </div>
                        </div>
                        <div class="grid-item">
                            <img src={op11} class="best-image" />
                            <div>
                                <p class="image-title">امیر شکلات</p>
                            </div>
                        </div>
                        <div class="grid-item">
                            <img src={op12} class="best-image" />
                            <div>
                                <p class="image-title">شیرین پلو</p>
                            </div>
                        </div>
                    </div>
                </div>





                );
            }
        }
        
export default OtherPart;