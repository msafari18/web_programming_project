var express = require('express');
var func = require('./functions');                                                                                                                                                                                                                                
const router = express.Router();



router.get('/', async function (req, res) {
    // console.log("hiiiiiiiiiiiiiiiiiiiiiiiiii")

    area = req.query.area;
    console.log("areaaaaaaaaaaaaa : ")
    console.log(area)
    categories = req.query.category
    let response = await func.findResturant(area, categories)
    res.send(response)    
});

router.get('/:id', async function (req, res) {
    id = req.params.id;
    let response = await func.getResturantInfo(id)
    res.send(response)    
});

router.get('/:id/comments', async function (req, res) {
    id = req.params.id;
    let response = await func.getResturantComments(id)
    res.send(response)    
});

router.get('/:area/areas', async function (req, res) {
    id = req.params.area;
    let response = await func.getAreas(id)
    res.send(response)    
});

router.post('/:id/comments', async function (req, res) {
    id = req.params.id;
    // author = 
    // quality = req.body.quality
    // text = req.body.text
    // packaging = req.body.packaging
    console.log("heeello")
    console.log( req.body.author)
    let response = await func.saveComments(id, req.body.author, req.body.quality, req.body.text, req.body.packaging)
    res.send(response)    
});

 router.post('/:id/resturants', async function (req, res) {
    id = req.params.id;
    // logo = req.body.logo;
    // opT = req.body.openingTime;
    // cT = req.body.closingTime; 
    // addr = req.body.address;
    // category = req.body.categories;
    // foods = req.body.foods;
    // comments = req.body.comments;
    console.log(req.body.comments)
    let response = await func.saveResturants(id,req.body.name, req.body.logo, req.body.openingTime, req.body.closingTime, req.body.address, req.body.categories, req.body.foods,req.body.comments)
    res.send(response)
});


    module.exports = router;