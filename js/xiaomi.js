/**
 * Created by Apple on 2017/7/12.
 */

/*function fnTab(obj, even) {
 var oBox = document.getElementById(obj);
 var aInp = oBox.getElementsByTagName("ul li");
 var aDiv = oBox.getElementsByTagName("ol li");

 for (var i = 0; i < aInp.length; i++) {
 aInp[i].index = i;
 aInp[i][even] = function () {
 // for (var i=0;i<aInp.length;i++){
 //
 // }
 aDiv[this.index].className = 'show'
 }
 }
 }*/


/*
 var ali = document.getElementsByName(".hd_seek>li");
 console.log(ali)*/

$("#hd_seek>li").hover(function () {
    $("#hd_seek>li").children(".xl").hide();
    $(this).children(".xl").stop().slideDown(500)
}, function () {
    $(this).children(".xl").stop().slideUp(500)
})

// console.log($(".banner_nav_show").eq(1).children("li").length)
for (var i = 0; i < $(".banner_nav_show").length; i++) {
    var lenght = $(".banner_nav_show").eq(i).children("li").length;
    console.log(lenght)
    $(".banner_nav_show").eq(i).css("width", 200 * lenght + "px")
}



