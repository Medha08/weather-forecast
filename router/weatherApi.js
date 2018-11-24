const express = require("express")
const request = require("request")
const url = require("url").URL
const app = express()
const router = express.Router()

var myUrl = new url('http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=b3ec66a76a55afb945a5cb72ccbf4b67');


router.get("/",(req,res)=>{

    res.render("weather")
    
})

router.get("/temp",(req,res)=>{

    myUrl.searchParams.set('q', req.query.loc);
   

    var options = {
        url: myUrl,
        method: 'POST',
        form: {
          mimeType: 'application/x-www-form-urlencoded'
        }
      };

   request.get(options, (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        try {
            var body = JSON.parse(body);
            
        } catch (error) {
            
            res.render("weather")
        }
      

       var anim = body.weather[0].main;
       var weathId = Number(body.weather[0].id);
       var temp = body.main.temp;
       var place = body.name;
       
        //console.dir(JSON.parse(body)) ;
        console.log("anim",anim)
       res.render("weather",{anim:anim,temp:temp,place:place,weathId:weathId})
    });

    
})



// router.post("/temp",(req,res)=>{
    
//    // myUrl.searchParams.set('q', req.body.loc);
   
    
// })



module.exports = router
