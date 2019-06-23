const address = require("../models/addresses.js");
const comment = require("../models/comments.js");
const restaurant = require("../models/restaurant.js");
const category = require("../models/categories.js");
const food = require("../models/food.js");
var arraySort = require('array-sort');



dict= {
    "iranianFood" : "غذای ایرانی",
    "keshavarz": "کشاورز",
    "salad": "سالاد",
    "notiranianFood" : "غذای غیر ایرانی",
    "shandiz-jordan" : "شاندیز جردن"
}

async function addTODB () {

    var new_category = new category.model({id:"1", name:"غذای ایرانی"})
    new_category.save();
    var new_category2 = new category.model({id:"2", name:"غذای غیر ایرانی"})
    new_category2.save();
    var new_category3 = new category.model({id:"3", name:"سالاد"})
    new_category3.save();

    var new_food = new food.model({id:"1", name:"کباب", price: 100, description: "...", foodSet:"کباب"})
    new_food.save();
    var new_food2 = new food.model({id:"2", name:"قرمه سبزی", price: 110, description: "...", foodSet:"چلو خورشت"})
    new_food2.save();
    
    var new_comment = new comment.model({id:"1", author:"Mahtab", quality: 5, packaging: 1, deliveryTime:30, text: "غذای خیلی خوبی بود :دی", created_at: "2019-2-5"})
    new_comment.save(function (err, book) {
        if (err) return console.error(err);
        console.log(book.name + " saved to bookstore collection.");
      });
    var new_comment2 = new comment.model({id:"2", author:"moniiiiiiireeeeeeeeeh", quality: 0, packaging: 1, deliveryTime:30, text: "ریدم در غذاتون :))))", created_at: "2019-2-9"})
      new_comment2.save(function (err, book) {
          if (err) return console.error(err);
          console.log(book.name + " saved to bookstore collection.");
        });
    var new_comment3 = new comment.model({id:"3", author:"moniiiiiiireeeeeeeeeh", quality: 1, packaging: 1, deliveryTime:30, text: " :))))", created_at: "2019-2-8"})
    new_comment3.save(function (err, book) {
        if (err) return console.error(err);
        console.log(book.name + " saved to bookstore collection.");
        });

    var new_address = new address.model({id:"1", city:"تهران", area: "کشاورز", addressLine: "ولیعصر - .."})
    new_address.save();

    var new_restaurant = new restaurant.model({id:"1", name:"شاندیز جردن", logo: "shandiz.jpg", openingTime: 12, closingTime: 22,
    averageRate:0, address: new_address, categories: [new_category,new_category3], foods:[new_food, new_food2], comments:[new_comment, new_comment2, new_comment3]})
    new_restaurant.save(function (err, book) {
            if (err) return console.error(err);
            console.log(book.name + " saved to bookstore collection.");
          });

    var new_restaurant = new restaurant.model({id:"2", name:"قبرستون", logo: "shandiz.jpg", openingTime: 12, closingTime: 22,
    averageRate:4, address: new_address, categories: [new_category,new_category2], foods:[new_food, new_food2], comments:[new_comment]})
    new_restaurant.save(function (err, book) {
            if (err) return console.error(err);
            console.log(book.name + " saved to bookstore collection.");
          });
    

    return "ok"
}

async function findResturant(area, categories) {
    restaurant.model.remove({}, function(err) { 
        console.log('collection removed') 
     });
//    m = await addTODB();

    // find persian
    area_fa = dict[area];
    cat_fa = []
    let result = await restaurant.model.find({'address.area':area_fa}).exec()
    
    if (categories) {
        if (categories.length != 0 ) {
            for (i=0; i<categories.length; i++){
                cat_fa.push(dict[categories[i]])
            }
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
        return resturantName
        }
    }
    
    resName = []
    for(i=0; i<result.length; i++) {
        resName.push(result[i]["name"])
    }
    return resName
}


async function getResturantInfo(id) {
    console.log(id)
    name_fa = dict[id];
    console.log(name_fa)
    let result = await restaurant.model.find({'name':name_fa}).exec()
    return result
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


module.exports = {
    findResturant: findResturant,
    getResturantInfo: getResturantInfo,
    getResturantComments: getResturantComments,
    saveComments: saveComments,
    saveResturants: saveResturants
}