const navbar = document.querySelector(".navbar-content")
const menuButton = document.querySelector(".fa-bars")
const list = document.getElementsByClassName("navbar-link")

// اضافه کردن رویداد به دکمه

menuButton.addEventListener("click" , openAndCloseNavbar)
for( let item of list){
    item.addEventListener("click" , afterClick)
}

// باز و بستن منو

function openAndCloseNavbar(){
    menuButton.classList.toggle("fa-xmark")
    navbar.classList.toggle("active")
}

// بستن شدن منو بعد از انتخاب 

function afterClick(){
    navbar.classList.toggle("active")
    menuButton.classList.toggle("fa-xmark")
}

