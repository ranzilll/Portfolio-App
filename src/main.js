document.addEventListener("DOMContentLoaded", () => {
    new fullpage('#fullpage', {
      autoScrolling: true,
      navigation: true,
      showActiveTooltip: true,
      slidesNavPosition: 'bottom',
      scrollBar: true,
    });
  });

const toggleswitch = document.getElementById('toggleswitch');
const hamburger = document.querySelector(".hamburger");
const sidecontent = document.querySelector(".sidecontent");
const sidemenu = document.querySelectorAll(".sidemenu");
const sidebar = document.querySelectorAll(".sidebar");

// toggleswitch code below 
toggleswitch.addEventListener("click",()=>{
document.body.classList.toggle("light-theme");
});


// chickenburger code below 
hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('larrow');
    sidecontent.classList.toggle('show');
});

sidemenu.forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
      sidecontent.classList.remove('show');
      hamburger.classList.remove('larrow'); 
    });
  });

// typewriter effect code below 
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 1000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  // Update innerHTML with a single span containing both text and cursor
  this.el.innerHTML = `<span class="wrap">${this.txt}</span><span class="cursor"> </span>`;

  var that = this;
  var delta = 150 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName('typewrite');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
};
