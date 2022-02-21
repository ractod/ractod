const inputBackground = document.getElementById("toggle-input")
const inputCircle = document.querySelector(".circle")
const persianLanguage = document.getElementById("persian")
const englishLanguage = document.getElementById("english")
const firstParagraph = document.getElementById("first")
const secondParagraph = document.getElementById("second")
const firstQuickInformation = document.getElementById("first-quick-information")
const secondQuickInformation = document.getElementById("second-quick-information")

// اضافه کردن رویداد به کلید تغییر زبان
console.log(inputCircle)
inputBackground.addEventListener("click" , toggle )

// تغییر حالت کلید

function toggle(){
    inputCircle.classList.toggle("toggle")
    if ( persianLanguage.style.display == "block" ){
        persianLanguage.style.display = "none"
        englishLanguage.style.display = "block"
    } else {
        persianLanguage.style.display = "block"
        englishLanguage.style.display = "none"
    }

    changingInformation()
    changinQuickInformation()
} 

// تغییر حالت متن اصلی

function changingInformation(){
    if ( secondParagraph.style.display == "block" ){
        secondParagraph.style.display = "none"
        firstParagraph.style.display = "block"
    } else {
        firstParagraph.style.display = "none"
        secondParagraph.style.display = "block"
    }
}

// تغییر حالت اطلاعات اولیه

function changinQuickInformation(){
    if ( secondQuickInformation.style.display == "block"){
        secondQuickInformation.style.display = "none"
        firstQuickInformation.style.display = "block"
    } else {
        firstQuickInformation.style.display = "none"
        secondQuickInformation.style.display = "block"
    }
}
