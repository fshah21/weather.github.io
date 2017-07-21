$(document).ready(function() {
  $('body').css('background-image', 'url(https://res.cloudinary.com/fshah/image/upload/v1489133006/back2_mphmpa.jpg)');
});
var finaltemp1 , finaldesc1 , finaltemp2 , finaldesc2 ;

$.getJSON("https://ipinfo.io/json", function(data){
  console.log(data);
var coord = data.loc.split(",");
var lat = coord[0];
  var lon = coord[1];
  var x = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lon;
  $.getJSON( x , function(geoData) {
    document.getElementById("info").innerHTML = geoData.results[7].formatted_address;
  });
  var api  = "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&units=metric&appid=8648e092ca58e7b9604b7fd2a5d3ce29";
  $.getJSON( api ,function(getData) {
    var temp = getData.main.temp;
    var desc = getData.weather[0].description;
    document.getElementById("temp1").innerHTML = temp;
    document.getElementById("desc1").innerHTML = desc;
    finaltemp1 = temp;
    finaltemp2 = desc;
  });
  
});


 function search(){
   $("#but2").show();
    var inputcity = document.querySelector("form>input").value;
    console.log(inputcity);
  var info =  "https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=";
  var info2 = "&units=metric&appid=359818408b93b61a0e02ecc6f9ffe3ff";
  var finalinfo = info + inputcity + info2;
  $.getJSON( finalinfo , function(tempData){
    console.log(tempData);
    var temp2 = tempData.main.temp;
    var desc2 = tempData.weather[0].description;
    console.log(temp2);
    console.log(desc2);
    document.getElementById("temp2").innerHTML = temp2;
    document.getElementById("desc2").innerHTML = desc2;
    finaltemp2 = temp2;
    finaldesc2 = desc2;  
 });
 }
   function switches1()
   {
     var c , 
      c = (finaltemp1 * 9) / 5 + 32;
      document.getElementById("temp1").innerHTML = Math.round(c * 100)/100;
     $("#but1").hide();
     }
   function switches2() 
   {
     var c , f ;
    c = (finaltemp2 * 9) / 5 + 32;
      document.getElementById("temp2").innerHTML = Math.round(c * 100)/100;
     $("#but2").hide();
   }