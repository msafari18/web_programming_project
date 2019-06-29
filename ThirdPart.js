import React, { Component } from "react";
import './main.css';
// import { fastar } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img_1 from './img/31.jpg';
import img_2 from './img/32.jpg';
import img_3 from './img/33.jpg';
import img_4 from './img/pizzaa.JPG';
import img_5 from './img/shila.JPG';
import img_6 from './img/baget.JPG';



class OtherPart extends Component {
  render() {
    return (
      <div class="third-part">

      <div class="first-of-third">
    
        <div class="choose">
        <p>غذای خود را انتخاب کنید</p>
            <img src={img_1} class="choose-image"/>
  
          </div>
        
        <div class="choose">
          <p>غذایتان را نوش جان کنید</p>
  
            <img src={img_2} class="choose-image"/>
          </div>
        
        <div class="choose">
          <p>شهر و منطقه خود را انتخاب کنید</p>
            <img src={img_3} class="choose-image"/>
        </div>
      </div>
    
  
  
      <div class="second-of-third">
       
        <div class="best-title">
          <h4>
            رستوران ها و فست فود های برتر ماه بر اساس امتیازدهی کاربران
          </h4>
        </div>
  
        <div class="best-resturant"> 
          
          <div class="best">
            
            <div class="in-best">
              <img src={img_4} class="best-images" id="best-images0"/>
              <h4 class="best-text" id="best-text0">
                فست فود پیتزا هات سعادت آباد
              </h4>
              
              <div class="star">
                  <span class="numrate" id="numrate0" ></span>
                  <span class="fa fa-star " id="star10"></span>
                  <span class="fa fa-star " id="star20"></span>
                  <span class="fa fa-star " id="star30"></span>
                  <span class="fa fa-star" id="star40"></span>
                  <span class="fa fa-star" id="star50"></span>
                  <span class="rate" id="rate0" ></span>
              </div>
              
              <p class="tag" id="tag0">
                پیتزا . فست فود . ساندویچ . برگر
              </p>
              <p class="address" id="addr0">
                سعادت آباد، پاساژ میلاد نور، طبقه همکف
              </p>
              <button class="order-button">
                شروع سفارش
              </button>
             
            </div>
          </div>
  
  
  
          <div class="best">
            
            <div class="in-best">
              <img src={img_5} class="best-images" id="best-images1"/>
              <h4 class="best-text" id="best-text1">
                شیلا مطهری
              </h4>
              
              <div class="star">
                  <span class="numrate" id="numrate1" ></span>
                  <span class="fa fa-star " id="star11"></span>
                  <span class="fa fa-star " id="star21"></span>
                  <span class="fa fa-star " id="star31"></span>
                  <span class="fa fa-star" id="star41"></span>
                  <span class="fa fa-star" id="star51"></span>
                  <span class="rate" id="rate1" ></span>
              </div>
              
              <p class="tag" id="tag1">
                پیتزا . فست فود . ساندویچ . برگر
              </p>
              <p class="address" id="addr1">
                ولیعصر ، مطهری ، فتحی شقاقی
              </p>
              <button class="order-button">
                شروع سفارش
              </button>
        
            </div>
          </div>
  
  
          <div class="best">
           
            <div class="in-best">
              <img src={img_6} class="best-images" id="best-images2"/>
              <h4 class="best-text" id="best-text2">
                باگت اندرزگو
              </h4>
              
              <div class="star">
                  <span class="numrate" id="numrate2" ></span>
                  <span class="fa fa-star " id="star12"></span>
                  <span class="fa fa-star " id="star22"></span>
                  <span class="fa fa-star " id="star32"></span>
                  <span class="fa fa-star" id="star42"></span>
                  <span class="fa fa-star" id="star52"></span>
                  <span class="rate" id="rate2" ></span>
              </div>    
              <p class="tag" id="tag2">
                پیتزا . فست فود . ساندویچ . برگر
              </p>
              <p class="address" id="addr2">
                بلوار اندرزگو ، بین کاوه و قیطریه
              </p>
              <button class="order-button">
                شروع سفارش
              </button>
              
            </div>
          </div>
  
        </div> 
      </div>
    </div>


      



    );
  }
}

export default OtherPart;