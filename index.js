//P1
var randNum1 = 1 + Math.floor(Math.random() * 6);
var img1 = "images/dice" + randNum1 + ".png";

$("img.img1").fadeOut(300, function () {
    $(this).attr("src", img1).fadeIn(300);
  });

//P2
var randNum2 = 1 + Math.floor(Math.random() * 6);
var img2 = "images/dice" + randNum2 + ".png";

$("img.img2").fadeOut(300, function () {
    $(this).attr("src", img2).fadeIn(300);
  });

//Winner
if (randNum1 > randNum2) {
    $("h1").html("🚩Player 1 Wins");
  } else if (randNum1 > randNum2) {
    $("h1").html("Player 2 Wins🚩");
  } else {
    $("h1").html("Draw!");
  }

//Refresh
$("#refreshBtn").click(function(){
    location.reload();
});
