var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/shakespeare.json"

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error){
    console.log("error occured", error)
    alert("OOPS! something went wrong, try again later.")
}

function clickHandler(){
    var inputTxt = txtInput.value 

    fetch(getTranslationURL(inputTxt))
    .then(response => response.json())
    .then(json => {
        outputDiv.innerHTML = json.contents.translated
    })
    .catch(errorHandler)
}


btnTranslate.addEventListener("mouseover", function(){
    document.querySelector("#shaky").style.display="none";
    document.querySelector("#shaky2").style.display="inline";

})
btnTranslate.addEventListener("mouseleave", function(){
    document.querySelector("#shaky").style.display="inline";
    document.querySelector("#shaky2").style.display="none";
})

btnTranslate.addEventListener("click", clickHandler)

