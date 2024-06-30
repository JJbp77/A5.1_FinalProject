//Jeremy Dukes

const startButton = document.getElementById("startButn");
const stopButton = document.getElementById("stopButn");
let cptJack = document.getElementById("myImage");

//Establishing the initial position of the image so that it will return to it when stopped
let initialPosition = {left: cptJack.style.left, top: cptJack.style.top};

let isAnimating = false;


//Function to calculate the new position
function calculateNextPosition() {
     const maxX = Math.random() * window.innerWidth - cptJack.clientWidth;
     const maxY = Math.random() * window.innerHeight - cptJack.clientHeight;
     const newX = Math.random() * maxX;
     const newY = Math.random() * maxY;
     return {left: newX, top: newY};
}

//Function to animate the image 
function animateDiv(){
    if(isAnimating) {
        let newPosition = calculateNextPosition();
        console.log(cptJack);
        cptJack.style.left = newPosition.left + "px";
        console.log("cptJack:", cptJack);
        cptJack.style.top = newPosition.top + "px";
        requestAnimationFrame(animateDiv);
    }
}

//Event listeners for the user to click the start buttons
startButton.addEventListener("click", () => {
    if(!isAnimating) {
        isAnimating = true;
        animateDiv();
    }
});

//Event Listener watching for the user to click the stop button
stopButton.addEventListener("click", () => {
    isAnimating = false;
    cptJack.style.left = initialPosition.left;
    cptJack.style.top = initialPosition.top;
});


animateDiv();


