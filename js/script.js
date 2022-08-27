var currentIndex = 0;
setInterval(function(){
    if(currentIndex < 2){currentIndex++;} else {currentIndex = 0;}
    var slidePosition = currentIndex * (-750)+"px";
    $(".slideList").animate({ top: slidePosition },500);
},3000);