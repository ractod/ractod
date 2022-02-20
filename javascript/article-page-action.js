// اضافه کردن قابلیت منو

const menuButton = document.querySelector(".fa-bars")
const menu = document.querySelector(".menu-container")
const cards = document.getElementsByClassName("article-link-card")
const error = document.getElementById("error")

// اضافه کردن رویداد به دکمه ها

menuButton.addEventListener("click" , openCloseMenu)
menu.addEventListener("click" , changingList )

// باز و بسته شدن منو

function openCloseMenu(){
    menuButton.classList.toggle("fa-xmark")
    menu.classList.toggle("active")
}

// تغییر صفحه با انتخاب در منو

function changingList(event){
    const choice = event.target.id
    for ( let item of cards ){
        const itemClass = item.classList[1]
        switch(choice){
            case "menu-item-all": 
                item.style.display = "block"
                error.style.display = "none'
                break
            case "menu-item-solar-system" : 
                item.classList[1] == 'solar-system-planet' ? item.style.display = "block" : item.style.display = "none"
                error.style.display = "none'
                break
            case "menu-item-ultra-system": 
                item.classList[1] == 'ultra-system-planet' ? item.style.display = "block" : item.style.display = "none"
                error.style.display = "none'
                break
            case "menu-item-scientist" :
                item.classList[1] == 'scientist' ? item.style.display = "block" : item.style.display = "none"
                error.style.display = "none'
        }
    }
    menuButton.classList.toggle("fa-xmark")
    menu.classList.toggle("active")
}

// API ساخت قابلیت سرچ بدون

const searchInput = document.querySelector(".navbar-part-search-input")
const searchButton = document.querySelector("#navbar-part-search-button")

// اضافه کردن رویداد به دکمه سرچ

searchButton.addEventListener("click" , gettingInputValue )

// گرفتن مقدار از فیلد سرچ

function gettingInputValue(event){
    event.preventDefault()
    const userSearch = searchInput.value
    userSearch == "" ? null : findingSearch(userSearch.toLowerCase())
    searchInput.value = ""
}

// نشان دادن نتیجه سرچ

function findingSearch(userSearch){
    error.style.display = "none"
    let mistake = 0 
    for ( let item of cards ){
        item.style.display = "none"
        for( let i of item.classList ){
            let Class = i.replace("-" , " ")
            Class = Class.replace("-" , " ")
            if ( Class == userSearch ){
                item.style.display = "block"
                mistake++
            }
        }
    }
    if (mistake == 0 ){
        error.style.display = "flex"
    }
}
