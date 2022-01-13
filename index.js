var button = document.querySelectorAll(".drum");

// fn tht does the swutch casing
function chckKey(key){
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
  }
}

// Animation fn
function btnAnimation(symbol){
  var btnPressed=document.querySelector("."+symbol);
  btnPressed.classList.add("pressed");

  setTimeout( function(){
    btnPressed.classList.remove("pressed");
  }, 100);
}


// for pressing on the  btn
for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function() {

    var btn = this.textContent;
    chckKey(btn);
    btnAnimation(btn);
  });
}

// for clicking the associated keyboard key
document.addEventListener("keydown", function(event) {
  var btn = event.key;
  chckKey(btn);
  btnAnimation(btn);
});
