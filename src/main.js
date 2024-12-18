const toggleswitch = document.getElementById('toggleswitch');
const hamburger = document.querySelector(".hamburger");
const sidecontent = document.querySelector(".sidecontent");

toggleswitch.addEventListener("click",()=>{
document.body.classList.toggle("light-theme");
});

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('larrow');
    sidecontent.classList.toggle('show');
});

