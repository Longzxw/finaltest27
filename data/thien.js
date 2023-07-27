window.onscroll = function () {
  console.info(document.documentElement.scrollTop);
  var header = document.getElementById("nav-bar");
  var flexAll = document.getElementsByClassName("flex-all")[0];
  var bgImg = document.getElementById("intro");
  var blurI = document.getElementsByClassName("Bg_blur")[0];
  if (
    document.documentElement.scrollTop > 100 ||
    document.body.scrollTop > 100
  ) {
    header.style.position = "fixed";
    header.style.left = 0;
    header.style.right = 0;
    header.style.backgroundColor = "#ff7191";
    header.style.transition = "all 1s ease 0s";
    flexAll.style.height = "80px";
    bgImg.style.zIndex = 0;
    blurI.style.opacity = 100;
  } else {
    header.style.position = "absolute";
    header.style.background =
      "linear-gradient(180deg,#ff7081,rgba(234,171,187,0)";
    bgImg.style.zIndex = 1;
    header.style.transition = "all 1s ease 0s";
    blurI.style.opacity = 0;
  }
};

function goToButton() {
  var timer = setInterval(function () {
    document.documentElement.scrollTop += 15;
    if (document.documentElement.scrollTop >= 700) {
      clearInterval(timer);
    }
  }, 1);
  var time = setInterval(function () {
    document.documentElement.scrollTop -= 15;
    if (document.documentElement.scrollTop <= 700) {
      clearInterval(time);
    }
  }, 1);
}
function goToButton1() {
  var timer = setInterval(function () {
    document.documentElement.scrollTop += 15;
    if (document.documentElement.scrollTop >= 1600) {
      clearInterval(timer);
    }
  }, 1);
  var time = setInterval(function () {
    document.documentElement.scrollTop -= 15;
    if (document.documentElement.scrollTop <= 1600) {
      clearInterval(time);
    }
  }, 1);
}
function goToButton2() {
  var timer = setInterval(function () {
    document.documentElement.scrollTop += 15;
    if (document.documentElement.scrollTop >= 3800) {
      clearInterval(timer);
    }
  }, 1);
  var time = setInterval(function () {
    document.documentElement.scrollTop -= 15;
    if (document.documentElement.scrollTop <= 3800) {
      clearInterval(time);
    }
  }, 1);
}

function myFunction() {
  var x = document.getElementById("mylinks");
  var y = document.getElementsByClassName("nav-right")[0];
  var z = document.getElementsByClassName("nav-mid")[0];
  if (x.style.display === "block") {
    x.style.display = "none";
    z.style.display = "block";
    y.style.display = "block";
  } else {
    x.style.display = "block";
    z.style.display = "none";
    y.style.display = "none";
  }
}
