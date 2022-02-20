const inputBackground = document.getElementById("toggle-input")
const inputCircle = document.getElementById("circle")
const persianLanguage = document.getElementById("persian")
const englishLanguage = document.getElementById("english")
const firstParagraph = document.getElementById("first")
const secondParagraph = document.getElementById("second")
const firstQuickInformation = document.getElementById("first-quick-information")
const secondQuickInformation = document.getElementById("second-quick-information")

// اضافه کردن رویداد به کلید تغییر زبان

inputBackground.addEventListener("click" , toggle )

// تغییر حالت کلید

function toggle(){
    if ( inputCircle.style.right == "0px" ){
        inputCircle.style.right = "30px"
        persianLanguage.style.display = "block"
        englishLanguage.style.display = "none"
    } else {
        inputCircle.style.right = "0px"
        persianLanguage.style.display = "none"
        englishLanguage.style.display = "block"
    }
    changingInformation()
    changinQuickInformation()
} 

// تغییر حالت متن اصلی

function changingInformation(){
    if ( secondParagraph.style.display == "none" ){
        secondParagraph.style.display = "block"
        firstParagraph.style.display = "none"
    } else {
        firstParagraph.style.display = "block"
        secondParagraph.style.display = "none"
    }
}

// تغییر حالت اطلاعات اولیه

function changinQuickInformation(){
    if ( secondQuickInformation.style.display == "none"){
        secondQuickInformation.style.display = "block"
        firstQuickInformation.style.display = "none"
    } else {
        firstQuickInformation.style.display = "block"
        secondQuickInformation.style.display = "none"
    }
}