const herName = prompt("Enter her name 💖");
if (herName) {
  document.getElementById("title").innerHTML = `🌹 Our Little Chat World with ${herName} 🌹`;
  document.getElementById("footer").innerHTML = `— From your friend, who enjoys every notification from ${herName}.`;
}

// Typing effect
const text = "Typing a message to someone who makes online chats feel special...";
const typingElement = document.getElementById("typing");
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 40);
  }
}
typeEffect();

// Delivered animation
setTimeout(() => {
  document.getElementById("status").innerHTML = "Delivered ✓✓";
}, 2000);

setTimeout(() => {
  document.getElementById("status").innerHTML = "Read ✓✓ 💙";
}, 4000);

function showMessage() {
  document.getElementById("hiddenMessage").style.display = "block";
}

function playMusic() {
  document.getElementById("bgMusic").play();
}

// Floating roses
function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal");
  petal.innerHTML = "🌹";
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = (5 + Math.random() * 5) + "s";
  document.body.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 8000);
}

setInterval(createPetal, 600);
