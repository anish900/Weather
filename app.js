var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope,$http) {
var vm=$scope;

$http.get("http://api.openweathermap.org/data/2.5/forecast/daily?q=milpitas&units=metric&cnt=7&lang=en&appid=1dd99a69ed2a0a7df396414a8930b85a")
  .then(function(response) 	
 {
  
  vm.temp=response.data.list[0].temp.day;
  vm.humidity=response.data.list[0].humidity;
  vm.speed=response.data.list[0].speed;
  vm.icon=response.data.list[0].weather[0].icon+".png"; 
  vm.city=response.data.city.name;
  vm.lon=response.data.city.coord.lon;
  vm.lat=response.data.city.coord.lat;
  vm.country=response.data.city.country;
  vm.description=response.data.list[0].weather[0].description;
   
  vm.icon2=response.data.list[1].weather[0].icon+".png"; 
  vm.high2=response.data.list[1].temp.max;
  vm.low2=response.data.list[1].temp.min;
  
  vm.icon3=response.data.list[2].weather[0].icon+".png"; 
  vm.high3=response.data.list[2].temp.max;
  vm.low3=response.data.list[2].temp.min;
  
  vm.icon4=response.data.list[3].weather[0].icon+".png"; 
  vm.high4=response.data.list[3].temp.max;
  vm.low4=response.data.list[3].temp.min;
  
  vm.icon5=response.data.list[4].weather[0].icon+".png"; 
  vm.high5=response.data.list[4].temp.max;
  vm.low5=response.data.list[4].temp.min;
  
  vm.icon6=response.data.list[5].weather[0].icon+".png"; 
  vm.high6=response.data.list[5].temp.max;
  vm.low6=response.data.list[5].temp.min;
  
  vm.icon7=response.data.list[6].weather[0].icon+".png"; 
  vm.high7=response.data.list[6].temp.max;
  vm.low7=response.data.list[6].temp.min;
  

  var dt = new Date();
vm.date = dt.toUTCString();

function GetDates(startDate, daysToAdd) {
    var aryDates = [];

    for (var i = 0; i <= daysToAdd; i++) {
        var currentDate = new Date();
        currentDate.setDate(startDate.getDate() + i);
        aryDates.push(DayAsString(currentDate.getDay()));
    }

    return aryDates;
}



function DayAsString(dayIndex) {
    var weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";

    return weekdays[dayIndex];
}

var startDate = new Date();
var aryDates = GetDates(startDate, 7);
vm.day2=aryDates[1];
vm.day3=aryDates[2];
vm.day4=aryDates[3];
vm.day5=aryDates[4];
vm.day6=aryDates[5];
vm.day7=aryDates[6];

  
	}
	) 
  
  $scope.myFunc = function () {
      var city =$scope.city;
	  //var city=city_name;
	  $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?q="+city+"&units=metric&cnt=7&lang=en&appid=1dd99a69ed2a0a7df396414a8930b85a")
	  .then(function(response) 	
 {
  
  vm.temp=response.data.list[0].temp.day;
  vm.humidity=response.data.list[0].humidity;
  vm.speed=response.data.list[0].speed;
  vm.icon=response.data.list[0].weather[0].icon+".png"; 
  vm.city=response.data.city.name;
  vm.lon=response.data.city.coord.lon;
  vm.lat=response.data.city.coord.lat;
  vm.country=response.data.city.country;
  vm.description=response.data.list[0].weather[0].description;
   
  vm.icon2=response.data.list[1].weather[0].icon+".png"; 
  vm.high2=response.data.list[1].temp.max;
  vm.low2=response.data.list[1].temp.min;
  
  vm.icon3=response.data.list[2].weather[0].icon+".png"; 
  vm.high3=response.data.list[2].temp.max;
  vm.low3=response.data.list[2].temp.min;
  
  vm.icon4=response.data.list[3].weather[0].icon+".png"; 
  vm.high4=response.data.list[3].temp.max;
  vm.low4=response.data.list[3].temp.min;
  
  vm.icon5=response.data.list[4].weather[0].icon+".png"; 
  vm.high5=response.data.list[4].temp.max;
  vm.low5=response.data.list[4].temp.min;
  
  vm.icon6=response.data.list[5].weather[0].icon+".png"; 
  vm.high6=response.data.list[5].temp.max;
  vm.low6=response.data.list[5].temp.min;
  
  vm.icon7=response.data.list[6].weather[0].icon+".png"; 
  vm.high7=response.data.list[6].temp.max;
  vm.low7=response.data.list[6].temp.min;
  
  
	}
	)
	  
  }
});