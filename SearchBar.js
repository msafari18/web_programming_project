import React from 'react';
import './main.css';
// import logo from './img/logo.png';
import AsyncSelect from 'react-select/async';
import { BrowserRouter , Route } from 'react-router-dom';

const optionss = [
  { value: '1', label: 'جست و جوی  خودکار منطقه شما' },
  { value: '2', label: 'جست و جو های پیشین' },
  { value: '3', label: '...' }
];


var dict = {
  "میرداماد" : "mirdamad"
}

class SearchBar extends React.Component {
  
  constructor(props) {
    
    super(props);
    this.onSelectChange = this.onSelectChange.bind(this);
    
    this.state = {
      options: []

    };
  }
  async onSelectChange(item) {
    console.log("hellooooooooooooooooooooooo")
  }

  onInputChange(option) {
    this.handleChange(option)
  }

  handleChange = async (selectedOption) => {
    var en_area = dict[selectedOption]
    var result = await fetch("http://localhost:3001/api/resturants/"+en_area+"/areas", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (!result.ok) {
            throw Error(result.statusText);
        }
        // console.log(result.text)
        let jsonRes = await result.text();
        if (jsonRes.length <= 2) {
          // return Promise.resolve({ options: [] });
        }
        
        let finalResult = JSON.parse(jsonRes);
        console.log("hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
        console.log(finalResult["nearArea"][0])
        console.log(typeof(finalResult["nearArea"][0]))
         
        var temp = []
        // var myArray = myString.split(',');
        var i = 0;
        for (i=0;i<finalResult["nearArea"].length;i++){
            temp.push({value:String(i) , label: finalResult["nearArea"][i]})
        }
        temp.push({value:String(i) , label:selectedOption})
        console.log(temp)
        this.setState({
          options: temp
      });
      // localStorage.setItem("token", jsonRes);
      return temp  
  };

  handleSubmit = async (selected) => {
    // console.log()
    // var selected = document.getElementById("search-txt").value
    console.log(selected)
    localStorage.setItem("selectedPlace", selected.label);
  }


  
  render() {
    return (
      <BrowserRouter>
      <div id = "search">
        <div id="image">
          <img src={process.env.PUBLIC_URL + 'poster/logo.png'} id="logo" />
        </div>
        <div id="order">
          <h1>سفارش آنلاین غذا از بهترین رستوران ها و فست فودها</h1>
        </div>
        
        <div id="order2">
          <h5>برای دیدن لیست رستوران ها و فست فودهایی که به شما سرویس می دهند، منطقه خود را وارد کنید</h5>
        </div>
        <div class="search-border">
          <div class="search-box">
            <a class="search-btn" href="/AllRestaurant"  >
              <span class="fa fa-search fa-2x "></span>
              </a>
              <AsyncSelect id="search-txt"
                      refs="search"  
                      onChange={this.handleSubmit}
                      loadOptions={this.handleChange}
                      cacheOptions="true"
                      defaultOptions={optionss}
                      placeholder="مثلا نیاوران"/>

           
            <form action="#" method="post">
              <div class="select">
                <select name="nameValueSelect" class="select__field" required>
                  <option value="" selected>تهران</option>
                  <option>تهران</option>
                  <option>مشهد</option>
                  <option>اصفهان</option>
                  <option>شیراز</option>
                  <option>یزد</option>
                  <option>کرمان</option>
                </select>
              </div>
            </form>
         
        </div>
      </div>
      </div>

      

</BrowserRouter>
      
      );}}
export default SearchBar;
