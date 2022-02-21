var express =require("express");  //lib-----Node Module
var app=express();  // will create app object from express package

var onAboutUs=function(req, res){
    res.send("Created By :Nidhi Pakhan");
};
var onDefault=function(req, res){
    res.send("<h1>Contoso Pvt. Ltd</h1>"+
              "<hr/>"+
              "<ol>"+
                    " <li>Contoso is a multinational company</li>"+
                    " <li>with 12 offices all order world</li>"+               
             "</ol>");
};
app.get("/",onDefault);  // Request handler functions are registered
app.get("/aboutus",onAboutUs);  // Request handler functions are registered
var server=app.listen(8081);
console.log("Server is running on port 8081");
