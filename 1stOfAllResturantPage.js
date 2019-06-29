import React from 'react';
import './allRestPge.css';
import logo from './img/logo.png';
import AsyncSelect from 'react-select/async';
import { BrowserRouter, Route } from 'react-router-dom';
import img_1 from './img/AllRestPageImage2.jpg';
import img_5 from './img/op1.jpeg';
import op2 from './img/op2.jpeg';
import op3 from './img/op3.jpeg';
import op4 from './img/op4.png';

var dict = {
    "میرداماد" : "mirdamad",
    "پیتزا":"pizza",
    "غذای ایرانی":"irani" ,
     "سالاد":"salad",
    "غذای غیر ایرانی": "notiranianFood" ,
    "کباب":"kabab",
    "ساندویچ":"sandwich",
    "پلو":"polo",
    "برگر":"bergur",
    "پاستا":"pasta"
}

class AllRestPage extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            numberOfRest: 0,
            addresses: [],
            avgRates: [],
            categories: [],
            restName: [],
            restImage: [],
            allCategories: [],
            selectedCategories : [],
            closedRest : [],
            openedRest : [],
            area : "",
        }
    }

    async componentDidMount() {
        await this.getAllRestaurants();
        this.createContent(0);
        this.creatCategoriesElement(0);
    }

    async getAllRestaurants() {
        // console.log("hereeeeeeeeeeeeeee")
        var restaurantName = localStorage.getItem("selectedPlace")
        this.setState({
            area: restaurantName
        })
        console.log(restaurantName)
        // console.log(restaurantName)
        let finalResultTemp
        var en_area = dict[restaurantName]

        // console.log(en_area)
        var mode = -1

        if(this.state.selectedCategories.length > 0 ) {
            console.log(this.state.selectedCategories)
            mode = 1;
        }
        else{
            console.log(this.state.selectedCategories.length)
            mode = 0;
        }
        if(mode == 0) {

            var result = await fetch("http://localhost:3001/api/resturants?area=" + en_area, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (!result.ok) {
                throw Error(result.statusText);
            }
            let jsonRes = await result.text();
            if (jsonRes.length <= 2) {
             }
            // console.log("yesssssssssssssssssssss")
            finalResultTemp = JSON.parse(jsonRes);
            // console.log(finalResultTemp)
        }
        
        else if(mode == 1) {
            var s = ""
            finalResultTemp = []
            for(var i=0; i<this.state.selectedCategories.length;i++){
                s += "&category=" + dict[this.state.selectedCategories[i]]

            }
            console.log(s)
            var result = await fetch("http://localhost:3001/api/resturants?area=" + en_area + s, {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (!result.ok) {
                throw Error(result.statusText);
            }
            let jsonRes = await result.text();
            if (jsonRes.length <= 2) {
             }
            finalResultTemp = JSON.parse(jsonRes);
            console.log("mode1")
            console.log(finalResultTemp)
        }
        

        
        var allRestInfo = []
        var allAddresses = []
        var allAvgRates = []
        var allCategories = []
        var allRestName = []
        var allRestImage = []
        var allClosedRest = []
        var allOpenedRest = []
        
        
        var finalResult = []
        for (var i = 0; i < finalResultTemp.length; i++) {
            if (finalResultTemp[i] == null) {
                console.log("here")
            }
            else {
                finalResult.push(finalResultTemp[i])
            }
        }

        for (var i = 0; i < finalResult.length; i++) {
            // console.log(finalResult[i])
            if (finalResult[i] != null) {
                var result = await fetch("http://localhost:3001/api/resturants/" + finalResult[i], {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                if (!result.ok) {
                    throw Error(result.statusText);
                }
                let jsonRes = await result.text();
                if (jsonRes != undefined) {
                    var finalinfo = JSON.parse(jsonRes);
                    allRestInfo.push(finalinfo)
                    allAddresses.push(finalinfo["address"]["addressLine"])
                    allAvgRates.push(finalinfo["averageRate"])
                    var temp = []
                    for (var k = 0; k < finalinfo["categories"].length; k++) {
                        temp.push(finalinfo["categories"][k]["name"])
                    }
                    allCategories.push(temp)
                    allRestName.push(finalinfo["name"])
                    allRestImage.push(finalinfo["logo"])
                    var hours = new Date().getHours()  ;
                    console.log(finalinfo["name"])
                    console.log(finalinfo["closingTime"])
                    if(hours > finalinfo["closingTime"]){
                        console.log("hereeeeeeeeeeee")
                        allClosedRest.push(finalinfo["name"])
                    }
                    else {
                        console.log("----------------------------------")
                        allOpenedRest.push(finalinfo["name"])
                    }
                }

            }

            
        }
        this.setState({
            numberOfRest: finalResult.length,
            addresses: allAddresses,
            avgRates: allAvgRates,
            categories: allCategories,
            restName: allRestName,
            restImage: allRestImage,
            closedRest: allClosedRest,
            openedRest : allOpenedRest
          

        })
    }


    createContent(mode, allAddresses, allAvgRates, allCategories, allRestImage, filtered, n) {
        var container1 = document.getElementById("container")
        var container2 = document.getElementById("closedcontainer")
        
        // if (mode == 0) {
        //     container1.remove()
        // }
        var Addresses = []
        var AvgRates = []
        var Categories = []
        var RestImage = []
        var RestName = []
        var closedRest = []
        var openedRest = []
        var number = 0

        if (mode == 0) {
            Addresses = this.state.addresses
            AvgRates = this.state.avgRates
            Categories = this.state.categories
            RestImage = this.state.restImage
            RestName = this.state.restName
            number = RestName.length
            closedRest = this.state.closedRest
            openedRest = this.state.openedRest

        }
        else if (mode == 1) {
            Addresses = allAddresses
            AvgRates = allAvgRates
            Categories = allCategories
            RestImage = allRestImage
            RestName = filtered
            for(var i=0;i<n;i++){
                if(this.state.closedRest.indexOf(filtered[i]) != -1){
                    closedRest.push(filtered[i])
                }
            }
            console.log(closedRest)
            number = n
        }

        for (var i = 0; i < number; i++) {

            var div1 = document.createElement("div");
            div1.className = "Restaurants";
            div1.id = "r";
            var div11 = document.createElement("div");
            div11.className = "ClosedRestaurants";
            div11.id = "cr";

            var div2 = document.createElement("div");
            div2.className = "BI";
            var div3 = document.createElement("div");
            div3.className = "RestInfoImg";

            //restInfo div
            var div4 = document.createElement("div");
            div4.className = "RestInfo";
            var restName = document.createElement("h4");
            restName.className = "RestName";
            restName.innerHTML = RestName[i]
            var star = document.createElement("div");
            restName.className = "stars";
            var cat = document.createElement("p");
            cat.className = "RestCategories";
            // console.log(this.state.categories)
            var s =""
            for (var j=0;j<Categories[i].length;j++){
                s+= Categories[i][j] + " . " 
            }
            cat.innerHTML = s;
            var addr = document.createElement("p");
            addr.className = "RestAddress";
            addr.innerHTML = Addresses[i];
            //restImg div
            var div5 = document.createElement("div");
            div5.className = "RestImg";
            var img = document.createElement("img");
            img.id = "RestImg";
            var src = RestImage[i]
            
            // img.src = "{ require(" + src + ") }"
            
            img.src = "/poster/"+src
            console.log(img.src)
            var div6 = document.createElement("div");
            div6.className = "OrderButton";
            var butt = document.createElement("button")
            butt.id = "OrderButton"
            butt.innerHTML = "شروع سفارش"
            div6.appendChild(butt)

            div5.appendChild(img)
            div4.appendChild(restName)
            div4.appendChild(star)
            div4.appendChild(cat)
            div4.appendChild(addr)
            div3.appendChild(div4)
            div3.appendChild(div5)

            div2.appendChild(div3)
            console.log(RestName)
            if(closedRest.indexOf(RestName[i]) == -1){
                div2.appendChild(div6)
                div1.appendChild(div2)
                container1.appendChild(div1);
            }
            else {
                div11.appendChild(div2)
                container2.appendChild(div11);
            }    


        }

    }

    creatCategoriesElement(mode, filtered) {
        var allCategory = []
        if (mode == 0) {
            for (var i = 0; i < this.state.categories.length; i++) {
                var temp = this.state.categories[i]
                for (var j = 0; j < temp.length; j++) {
                    if (allCategory.indexOf(temp[j]) == -1) {
                        allCategory.push(temp[j])
                    }
                }
            }
            this.setState({
                allCategories: allCategory
            })
        }
        else {
            allCategory = filtered
        }
        console.log(allCategory)
        var hoof = document.getElementById("hoof")
        for (var i = 0; i < allCategory.length; i++) {
            var div1 = document.createElement("div")
            div1.className = "Categories"
            var catLabel = document.createElement("label")
            catLabel.className = "CatLabel"
            catLabel.innerHTML = allCategory[i]
            var catInput = document.createElement("input")
            catInput.id = "id" + String(i)
            catInput.type = "checkbox"
            catInput.value = allCategory[i]
            catInput.onclick = this.handleCheckedBox
            var div2 = document.createElement("div")
            div2.className = "checkmark"
            catLabel.appendChild(catInput)
            catLabel.appendChild(div2)
            div1.appendChild(catLabel)
            hoof.appendChild(div1)

        }
    }

        handleCheckedBox = async e =>  {
        var targetId = e.target.id
        var ischecked = e.target.checked
        var categoryNode = document.getElementById("hoof")
        var selectedPart = document.getElementById("selectedPart")
        if (ischecked) {

            var node = document.getElementById(targetId).parentNode.parentNode
            categoryNode.removeChild(node)
            selectedPart.appendChild(node)

            var selected = this.state.selectedCategories
            selected.push(e.target.value)
            this.setState({
                selectedCategories : selected
            })
        }

        else {

            var node = document.getElementById(targetId).parentNode.parentNode
            selectedPart.removeChild(node)
            categoryNode.appendChild(node)
            

            selected = this.state.selectedCategories
            var index = selected.indexOf(e.target.value)
            if (index !== -1) {
                selected.splice(index, 1);
            }
        
            this.setState({
                selectedCategories : selected
            })
        }
        
        await this.getAllRestaurants();
        

        var container1 = document.getElementById("container")
        while (container1.hasChildNodes()) {
            container1.removeChild(container1.lastChild);
        }
        var container2 = document.getElementById("closedcontainer")
        while (container2.hasChildNodes()) {
            container2.removeChild(container2.lastChild);
        }


        this.createContent(0);
    }

    handleChangeCategory = (e) => {
        console.log(e.target.value)
        var userInput = e.target.value
        var filtered = []
        for (var i = 0; i < this.state.allCategories.length; i++) {
            if (this.state.allCategories[i].includes(userInput)) {
                console.log("helllllo")
                // console.log(this.state.restName[i])
                filtered.push(this.state.allCategories[i])
            }
        }
        // console.log(this.state.restName)
        console.log(filtered)
        var categoryNode = document.getElementById("hoof")
        while (categoryNode.hasChildNodes()) {
            categoryNode.removeChild(categoryNode.lastChild);
        }

        this.creatCategoriesElement(1, filtered)

    }

    handleChange = (e) => {
        console.log(e.target.value)
        var userInput = e.target.value
        var filtered = []
        for (var i = 0; i < this.state.numberOfRest; i++) {
            if (this.state.restName[i].includes(userInput)) {
                console.log("helllllo")
                console.log(this.state.restName[i])
                filtered.push(this.state.restName[i])
            }
        }
        console.log(this.state.restName)
        console.log(filtered)


        var allAddresses = []
        var allAvgRates = []
        var allCategories = []
        var allRestImage = []

        for (var i = 0; i < filtered.length; i++) {
            var index = this.state.restName.indexOf(filtered[i])
            if (index != -1) {
                allAddresses.push(this.state.addresses[index])
                allAvgRates.push(this.state.avgRates[index])
                allCategories.push(this.state.categories[index])
                allRestImage.push(this.state.restImage[index])
            }
        }


        var container1 = document.getElementById("container")
        while (container1.hasChildNodes()) {
            container1.removeChild(container1.lastChild);
        }

        var container2 = document.getElementById("closedcontainer")
        while (container2.hasChildNodes()) {
            container2.removeChild(container2.lastChild);
        }

        this.createContent(1, allAddresses, allAvgRates, allCategories, allRestImage, filtered, filtered.length)
    }






    render() {


        return (
            // container1.appendChild(input)
            <div className="MainClass">
                <div className="TopOfPage">
                    <img src={img_1} id="img_1" />
                </div>

                <div className="NumberOfRest">
                    در حال حاضر {this.state.numberOfRest}  رستوران قابلیت سرویس دهی به {this.state.area} را دارند
            </div>

                <div>
                    <input className="RestSearch" placeholder="جست‌و‌‌جوی رستوران‌ در این محدود" onChange={this.handleChange} />
                    {/* <label class="_3OhO1">جست‌و‌‌جوی رستوران‌ در این محدوده</label> */}
                </div>

                <div className="PageContent">

                    <div className="LeftPart" >

                        <div className="Container" id="container">
                            {/* <div class="Restaurants" id="r">
                                <div className="BI">
                                <div className="RestInfoImg">

                                    <div className="RestInfo">
                                        
                                        <h4 className="RestName" id="best-text1">
                                            شیلا مطهری
                                        </h4>
                                        <div class="Stars">
                                            <span class="numrate" id="numrate1" ></span>
                                            <span class="fa fa-star " id="star11"></span>
                                            <span class="fa fa-star " id="star21"></span>
                                            <span class="fa fa-star " id="star31"></span>
                                            <span class="fa fa-star" id="star41"></span>
                                            <span class="fa fa-star" id="star51"></span>
                                            <span class="rate" id="rate1" ></span>
                                        </div>

                                        <p class="RestCategories" id="tag1">
                                            پیتزا . فست فود . ساندویچ . برگر
                                        </p>
                                        <p class="RestAddress" id="addr1">
                                            ولیعصر ، مطهری ، فتحی شقاقی
                                        </p>
                                    </div>
                                    <div className="RestImg">
                                        <img src={img_5} id="RestImg" />
                                    </div>
                                </div>

                                <div className="OrderButton">
                                    <button id="OrderButton">
                                        شروع سفارش
                                    </button>
                                </div>
                            </div>
                            </div> */}

                        </div>
                        <h3 className="cr">رستوران های بسته</h3>
                        <div className="ClosedContainer" id="closedcontainer">
                            
                            
                            </div>
                    </div>

                    <div className="RightPart" id="rp" >

                        <p className="CatTitle">فیلتر بر اساس انواع غذا</p>
                        <input className="CatSearch" placeholder="جست‌و‌‌جوی در دسته بندی غذاها" onChange={this.handleChangeCategory} />

                        <div id="selectedPart">

                        </div>

                        <div id="hoof">
                            {/* <div className="Categories">
                        <label class="CatLabel">ساندویچ
                            <input type="checkbox" />
                            <div class="checkmark"></div>
                            
                        </label>
                        </div> */}





                        </div>
                    </div>

                </div>
            </div>

        );
    }
}
export default AllRestPage;
