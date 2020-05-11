//
// vis element
//
let randomHue = Math.floor(Math.random() * 361);
let randomX = Math.floor(Math.random() * 1100);
let randomY = Math.floor(Math.random() * 1000);


function addFish(){

let fish = document.createElement("fish")

document.body.appendChild(fish)

fish.style.transform = `translate(${randomX}px, ${randomY}px)`
fish.style.filter = `hue-rotate(${randomHue}deg)`

}



//
// bubble element
//

function addBubble() {

let bubble = document.createElement("bubble")

document.body.appendChild(bubble)

bubble.style.transform = `translate(${randomX}vw, ${randomY}vh)`


}

addFish();
addBubble();

for (let i = 0; i < 100; i++) {
    
  }