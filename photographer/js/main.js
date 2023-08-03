var slideIndex = 1;
var Prev = slideIndex - 1;
var Next = slideIndex + 1;


// Слайд-шоу "Архитектура"
function showSlidesArch(n) {
  var i;
  slideIndex += n;
  Prev += n;
  Next += n;

  var slides = document.getElementsByClassName("arch_slide");
  if (Prev == slides.length) { Prev = 0 }
  if (slideIndex == slides.length) { slideIndex = 0 }
  if (Next == slides.length) { Next = 0 }

  if (Prev == -1) {Prev = slides.length-1}
  if (slideIndex == -1) {slideIndex = slides.length-1}
  if (Next == -1) {Next = slides.length-1}

  var im0 = document.getElementById('arch0');
  var im1 = document.getElementById('arch1');
  var im2 = document.getElementById('arch2');

  im0.src = "images/arch"+String(Prev)+".jpeg";
  im1.src = "images/arch"+String(slideIndex)+".jpeg";
  im2.src = "images/arch"+String(Next)+".jpeg";
}


// Слайд-шоу "Природа"
function showSlidesNature(n) {
  var i;
  slideIndex += n;
  Prev += n;
  Next += n;

  var slides = document.getElementsByClassName("nat_slide");
  if (Prev == slides.length) { Prev = 0 }
  if (slideIndex == slides.length) { slideIndex = 0 }
  if (Next == slides.length) { Next = 0 }

  if (Prev == -1) {Prev = slides.length-1}
  if (slideIndex == -1) {slideIndex = slides.length-1}
  if (Next == -1) {Next = slides.length-1}

  var im0 = document.getElementById('nat0');
  var im1 = document.getElementById('nat1');
  var im2 = document.getElementById('nat2');

  im0.src = "images/nat"+String(Prev)+".jpeg";
  im1.src = "images/nat"+String(slideIndex)+".jpeg";
  im2.src = "images/nat"+String(Next)+".jpeg"; 
}


// Слайд-шоу "Фотосессии"
function showSlidesPS(n) {
  var i;
  slideIndex += n;
  Prev += n;
  Next += n;

  var slides = document.getElementsByClassName("ps_slide");
  if (Prev == slides.length) { Prev = 0 }
  if (slideIndex == slides.length) { slideIndex = 0 }
  if (Next == slides.length) { Next = 0 }

  if (Prev == -1) {Prev = slides.length-1}
  if (slideIndex == -1) {slideIndex = slides.length-1}
  if (Next == -1) {Next = slides.length-1}

  var im0 = document.getElementById('ps0');
  var im1 = document.getElementById('ps1');
  var im2 = document.getElementById('ps2');

  im0.src = "images/ps"+String(Prev)+".jpeg";
  im1.src = "images/ps"+String(slideIndex)+".jpeg";
  im2.src = "images/ps"+String(Next)+".jpeg";
}


// Слайд-шоу "Детали"
function showSlidesDetails(n) {
  var i;
  slideIndex += n;
  Prev += n;

  var slides = document.getElementsByClassName("det_slide");
  if (Prev == slides.length) { Prev = 0 }
  if (slideIndex == slides.length) { slideIndex = 0 }

  if (Prev == -1) {Prev = slides.length-1}
  if (slideIndex == -1) {slideIndex = slides.length-1}

  var im0 = document.getElementById('det0');
  var im1 = document.getElementById('det1');

  im0.src = "images/det"+String(Prev)+".jpeg";
  im1.src = "images/det"+String(slideIndex)+".jpeg";
  
}

var x = 0;
function Menu() {
  x += 1;
  if (x%2 == 1) {
    var h = window.screen.height;
    document.getElementById("mob_menu").style.display='block';
    document.getElementById("menu_img").src = "images/close.svg";
    document.getElementById("info").style.display="none";
    document.getElementById("header").style.height = h*0.8 + 'px';
    document.getElementById("footer").style.height = h*0.2 + 'px';
  }

  else {
    document.getElementById("mob_menu").style.display='none';
    document.getElementById("menu_img").src = "images/menu.svg";
    document.getElementById("info").style.display="block";
    document.getElementById("header").style.height = '';
    document.getElementById("footer").style.height = '';
  } 
}

var y = 0;
function DropMenu() {
  y += 1;
  if (y%2 == 1) {
    var drop = document.getElementsByClassName("mob_drop");
    for (var i = 0; i < drop.length; i++) {
      drop[i].style.color = "black"
    }
    document.getElementById("dm_arrow").style.transform = 'rotate(180deg)';
  }
  else {
    var drop = document.getElementsByClassName("mob_drop");
    for (var i = 0; i < drop.length; i++) {
      drop[i].style.color = "white"
    }
    document.getElementById("dm_arrow").style.transform = 'rotate(360deg)';
  }
}
