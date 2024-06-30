//Jeremy Dukes
//here we set the value of our boolean variable for the loop
var tryAgainFlag = true;
var myUserForm = document.getElementById("myUserForm")
var name1 = document.getElementById("name1").value;
var name2 = document.getElementById("name2").value;
var yerName = name1 + name2;


//function playAudio() {
  //  var audio = document.getElementById("myAudio");
    //audio.loop = true;
    //audio.play();
  //};
  


//This addEventListener will prevent the form from submitting and opening another page with an error
myUserForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
});

//This function is to validate the user input information in this portion of the form
function validations() {
    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;
    const stfrom = document.getElementById("stfrom").value;
    const zcode = document.getElementById("zcode").value;
   
    //This if statement looks to see that name1 or name2 or stfrom or zcode are not empty and trigures an alert if they are 
    if (!name1 || !name2 || !stfrom || !zcode) {
        alert("Please fill out the requested information");
       return false;
    }
    //otherwise "else" the welcome message is delivered
    else {
        document.getElementById("welcome").textContent = "Hello " + name1 + " " + name2 + " nice to meet you!";
    }
    return true;
}

function myPalindrome() {
    const userInput = document.getElementById("userInput").value.toLowerCase().replace(/[^a-z0-9]/g,"");
    const reversedInput = userInput.split("").reverse().join("");

    //Now we're providing the user some feedback as to their success 
    if(userInput === reversedInput) {
        document.getElementById("results").textContent = "Congratulations " + userInput + " is in fact a Palidrome!";
    }
    else{
        document.getElementById("results").textContent = "Well I dont thank that's even a word!";
    }
    if(userInput == "") {
        document.getElementById("results").textContent = "Well unfurtunately you forgot to enter your favorite Palidrome. Try Again?"
    }
}

//If the user would like to try again then this function will clear the field to receive another Palindrome
function tryAgain() {
    tryAgainFlag = true;
    document.getElementById("userInput").value = " ";
}

//This function breaks the loop and posts a farewell message.
function exitLoop() {
    tryAgainFlag = false;
    document.getElementById("results").textContent = "Well we hate ta see ya go, just remember Jesus loves you and is there for you!";
    document.getElementById("userInput").textContent = " ";
}

//Creates a timer that automatically breaks the loop at the 30 second mark
function loop() {
    if(tryAgainFlag){
        myPalindrome();
        setTimeout(loop, 30000);
    }
}