console.log("Script works")

var btnTranslate= document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txtarea");
var outputDiv=document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/minion.json"

function errorHandler(error){
    console.log("Error Occured",error);
    alert("Oops! Something went wrong. Try again later.");
}

function getTranslationURL(text){
    return serverURL +"? "+"text=" + text
}

function clickHandler(){
    console.log("Translate button clicked");
    var Inputext = txtInput.value;
    fetch(getTranslationURL(Inputext))
        .then(response => response.json())
        .then(json => {
            var translatedText=json.contents.translated;
            outputDiv.innerText=translatedText;
        })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click",clickHandler)