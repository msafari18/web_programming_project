const address = require("../models/addresses.js");
const comment = require("../models/comments.js");
const restaurant = require("../models/restaurant.js");
const category = require("../models/categories.js");
const food = require("../models/food.js");
const area = require("../models/areas.js");
var arraySort = require('array-sort');



dict= {
    
    "shandiz-jordan" : "شاندیز جردن",
    "mirdamad" : "میرداماد",
    "shila" : "شیلا" ,
    "baget" : "باگت",
    "gardino" : "گاردینو",
    "javan" : "جوان",
    "yas" : "یاس" ,
    "hani" : "هانی",
    "jiliz" : "جیلیز",
    "monireh":"منیره",
    "jenaro":"جنارو",
    "amolay":"آمولای",
    "vitrin":"ویترین",
    "shirin":"شیرین پلو",
    "cobaba":"رستوران کوبابا",
    "pizza":"پیتزا",
    "irani" : "غذای ایرانی",
    "salad": "سالاد",
    "notiranianFood" : "غذای غیر ایرانی",
    "kabab":"کباب",
    "sandwich":"ساندویچ",
    "polo":"پلو",
    "bergur":"برگر",
    "pasta":"پاستا",



}

restDict ={
    "شاندیز جردن" : "shandiz-jordan",
    "شیلا" : "shila",
    "باگت" : "baget",
    "گاردینو" : "gardino",
    "جوان" : "javan",
    "یاس" : "yas",
    "هانی":"hani",
    "جیلیز":"jiliz",
    "منیره" : "monireh",
    "جنارو":"jenaro",
    "آمولای":"amolay",
    "ویترین":"vitrin",
    "شیرین پلو":"shirin",
    "رستوران کوبابا":"cobaba",
}

async function addTODB () {

    var new_category = new category.model({id:"1", name:"غذای ایرانی"})
    new_category.save();
    var new_category2 = new category.model({id:"2", name:"ساندویچ"})
    new_category2.save();
    var new_category3 = new category.model({id:"3", name:"سالاد"})
    new_category3.save();
    var new_category4 = new category.model({id:"3", name:"پیتزا"})
    new_category4.save();
    var new_category5 = new category.model({id:"3", name:"کباب"})
    new_category5.save();
    var new_category6 = new category.model({id:"3", name:"پلو"})
    new_category6.save();
    var new_category7 = new category.model({id:"3", name:"برگر"})
    new_category7.save();
    var new_category8 = new category.model({id:"3", name:"پاستا"})
    new_category8.save();

    var new_food = new food.model({id:"1", name:"کباب", price: 100, description: "...", foodSet:"کباب"})
    new_food.save();
    var new_food2 = new food.model({id:"2", name:"قرمه سبزی", price: 110, description: "...", foodSet:"چلو خورشت"})
    new_food2.save();
        
    var new_comment = new comment.model({id:"2", author:"moniiiiiiireeeeeeeeeh", quality: 0, packaging: 1, deliveryTime:30, text: "ریدم در غذاتون :))))", created_at: "2019-2-9"})
      new_comment.save(function (err, book) {
          if (err) return console.error(err);
          console.log(book.name + " saved to bookstore collection.");
        });
    var new_comment2 = new comment.model({id:"3", author:"moniiiiiiireeeeeeeeeh", quality: 1, packaging: 1, deliveryTime:30, text: " :))))", created_at: "2019-2-8"})
    new_comment2.save(function (err, book) {
        if (err) return console.error(err);
        console.log(book.name + " saved to bookstore collection.");
        });

    var new_address = new address.model({id:"1", city:"تهران", area: "میرداماد", addressLine:"میرداماد"})
    new_address.save();

    var new_address2 = new address.model({id:"1", city:"تهران", area: "میرداماد", addressLine:" ظفرشمالی - میرداماد"})
    new_address2.save();

    var new_area = new area.model({addr:"میرداماد", nearArea:["ظفرشمالی","میدان کاظمی"]})
    new_area.save();


    var new_restaurant5 = new restaurant.model({id:"5", name:"شاندیز جردن", logo: "5.jpg", openingTime: 12, closingTime: 24,
    averageRate:0, address: new_address, categories: [new_category,new_category5,new_category6], foods:[new_food, new_food2], comments:[new_comment, new_comment2]})
    new_restaurant5.save()

    var new_restaurant3 = new restaurant.model({id:"3", name:"شیلا", logo: "3.jpg", openingTime: 12, closingTime: 20,
    averageRate:1, address: new_address, categories: [new_category2,new_category3,new_category4,new_category7,new_category8], foods:[new_food, new_food2], comments:[new_comment]})
    new_restaurant3.save()
    
    var new_restaurant2 = new restaurant.model({id:"2", name:"آمولای", logo: "2.jpg", openingTime: 12, closingTime: 20,
    averageRate:3, address: new_address, categories: [new_category2,new_category3,new_category4], foods:[new_food, new_food2], comments:[new_comment]})
    new_restaurant2.save()
    
    var new_restaurant1 = new restaurant.model({id:"1", name:"جنارو", logo: "1.jpg", openingTime: 12, closingTime: 24,
    averageRate:4, address: new_address2, categories: [new_category2,new_category3,new_category4], foods:[new_food, new_food2], comments:[new_comment]})
    new_restaurant1.save()
    
    var new_restaurant4 = new restaurant.model({id:"4", name:"ویترین", logo: "4.jpg", openingTime: 12, closingTime: 24,
    averageRate:4, address: new_address, categories: [new_category2,new_category3,new_category4,new_category7], foods:[new_food, new_food2], comments:[new_comment]})
    new_restaurant4.save()
    
    var new_restaurant6 = new restaurant.model({id:"6", name:"رستوران کوبابا", logo: "6.jpg", openingTime: 12, closingTime: 24,
    averageRate:3, address: new_address, categories: [new_category,new_category5,new_category6], foods:[new_food, new_food2], comments:[new_comment]})
    new_restaurant6.save()
    
    var new_restaurant7 = new restaurant.model({id:"7", name:"شیرین پلو", logo: "7.jpg", openingTime: 12, closingTime: 23,
    averageRate:5, address: new_address2, categories: [new_category,new_category5], foods:[new_food, new_food2], comments:[new_comment]})
    new_restaurant7.save()


    return "ok"
}

async function findResturant(area, categories) {
    // restaurant.model.remove({}, function(err) { 
    //     console.log('collection removed') 
    //  });
    // m = await addTODB();
    // console.log(m)
    // find persian

    console.log("function called")
    console.log(area)

    area_fa = dict[area];
     

    cat_fa = []
    let result = await restaurant.model.find({'address.area':area_fa}).exec()
    resName_en = []
    if (categories) {
        console.log("---------------------------")
        console.log(categories)
        console.log(categories.length)
        
        if (categories.length != 0 ) {
            console.log("hereeeeeeeeeeeeeeeeeeeeeeeeeeee")
            console.log(typeof(categories))
            categories1 = []
            if(typeof(categories) == "string"){
                categories1.push(categories)
            }
            else{
                categories1 = categories
            }

            for (i=0; i<categories1.length; i++){
                if(categories1[i] != "")
                    cat_fa.push(dict[categories1[i]])
            }
            console.log(cat_fa)
        //OR MODE
        resturantName = []
        for(i=0; i<result.length; i++) {
            for (j=0; j<result[i]["categories"].length; j++) {
                if (cat_fa.includes(result[i]["categories"][j]["name"])) {
                    resturantName.push(result[i]["name"])
                    break
                }
            }
                    
        }
        console.log(resturantName)
        for (var i=0; i<resturantName.length; i++){
            resName_en.push(restDict[resturantName[i]])
        }
        jres = JSON.stringify(resName_en);
        console.log(jres)
        return jres

        // console.log(resturantName)
        // jres = JSON.stringify(resturantName);
        // return resturantName
        }
    }
    
    resName = []
    // resName_en = []
    for(i=0; i<result.length; i++) {
        resName.push(result[i]["name"])
    }
    for (var i=0; i<resName.length; i++){
        resName_en.push(restDict[resName[i]])
    }
    jres = JSON.stringify(resName_en);
    // console.log(jres)
    return jres

    // jres = JSON.stringify(resName);
    // console.log(jres)
    // return jres
}


async function getResturantInfo(id) {
    // console.log(id)
    name_fa = dict[id];
    // console.log(name_fa)
    let result = await restaurant.model.find({'name':name_fa}).exec()
    // console.log("-----------------------------")
    // console.log(result)
    if (result){
        jres = JSON.stringify(result[0])
        return jres
    }
    return null

}

async function getResturantComments(id){
   
    // restaurant.model.remove({}, function(err) { 
    //     console.log('collection removed') 
    //  });
    // m = await addTODB();


    console.log(id)
    name_fa = dict[id];
    let result = await restaurant.model.find({'name':name_fa}).exec()
    comments = result[0]["comments"]
    sortedComments = arraySort(comments, 'created_at');
    scores = 0
    for(i=0; i<sortedComments.length; i++){
        console.log(sortedComments[i]["quality"])
        scores += sortedComments[i]["quality"]
    }
    averageRate = scores / sortedComments.length
    try{
        let res = await restaurant.model.updateOne({'name':name_fa}, {'averageRate': averageRate})
    }
    catch(e){
        console.log(e)
    }

    return sortedComments.reverse()

}

async function saveComments(id, author, quality, text, packaging){
    name_fa = dict[id];
    let result = await restaurant.model.find({'name':name_fa}).exec()
    commentsNumber = result[0]["comments"].length
    
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    today = yyyy + '-' + mm + '-' + dd;
    sortedComments = await getResturantComments(id)
    console.log(sortedComments)
    console.log(typeof(sortedComments))
    
    var new_comment = new comment.model({id:String(commentsNumber), author:author, quality: quality, packaging: packaging, deliveryTime:30, text: text, created_at: today})
    sortedComments.push(new_comment)
    scores = 0
    for(i=0; i<sortedComments.length; i++){
        console.log(sortedComments[i]["quality"])
        scores += sortedComments[i]["quality"]
    }
    averageRate = scores / sortedComments.length
    try{
        let res = await restaurant.model.updateOne({'name':name_fa}, {'comments': sortedComments, 'averageRate': averageRate})
    }
    catch(e){
        console.log(e)
    }
    return "added"

}

async function saveResturants(id, persianName, logo, opT, cT, addr, categories, foods, comments){
    
    let ncomment = []
    let count = 0
    let avgRate = 0
    console.log("helloooooo")
    console.log(comments)
    if(comments){
        for (i=0; i<comments.length; i++){
            count += comments[i]["quality"]
            let temp = new comment.model(comments[i])
            ncomment.push(temp)
        }
        avgRate = count / comments.length
    }

    let naddress = {}
    if (addr){
        naddress = new address.model(addr)
    }
    let nfood = []
    if (foods){
        for (i=0; i<foods.length; i++){
            let temp = new food.model(foods[i])
            nfood.push(temp)
        }
    }
    let ncategory = []
    if (categories){
        for (i=0; i<categories.length; i++){
            let temp = new category.model(categories[i])
            ncategory.push(temp)
        }
    }

    var new_restaurant = new restaurant.model({id:String(Math.random()%100), name:persianName, logo: logo, openingTime: opT, closingTime: cT,
    averageRate:avgRate, address: naddress, categories: ncategory, foods: nfood, comments:ncomment})
    console.log(new_restaurant)
    new_restaurant.save()
    return "added"
}

async function getAreas(iarea) {
 
    area_fa = dict[iarea];
    let result = await area.model.find({'addr':area_fa}).exec()
    if (result){
        if (result[0]){
            jres = JSON.stringify(result[0]);
            return jres;    
        }
        return [];
    }
    return [];
}

module.exports = {
    findResturant: findResturant,
    getResturantInfo: getResturantInfo,
    getResturantComments: getResturantComments,
    saveComments: saveComments,
    saveResturants: saveResturants,
    getAreas: getAreas,
    
}