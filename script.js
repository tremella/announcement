
const messages = [
  "Constructing Nodes",
  "Compiling Maslow's Hierarchy",
  "Setting Physical Constants",
  "Spongifying Nodes",
  "Growing Data Trees",
  "Reticulating Splines",
  "Setting Maximum Velocity",
  "Loading \"BOING\" Sounds",
  "Connecting Nodes",
  "Checking In The Back Of The Fridge",
  "Inverting Internets",
  "Gently Reassuring Nodes",
  "Setting Universal Constants",
  "Scanning For Viruses",
  "Cubifying Splines",
  "Loading Loading Music",
  "Watering Data Trees",
  "Connecting Nodes",
  "Harvesting Fruit From Data Trees",
  "Happy April First!",
  "Gleefully Stalling For Time",
  "Setting Universal Physical Constants",
  "Pruning Data Trees",
  "Setting Universal Constants of the Universe",
  "Look, It's Never Going To Load",
  "That's The Point"
]

let currentMessageIndex = 0

function showMessage() {
  // finds page element
  const messageDiv = document.querySelector('.message');

  if (!messageDiv) return;

  messageDiv.textContent = messages[currentMessageIndex];
  messageDiv.classList.remove('slide-exit'); // remove in case it exists
  messageDiv.classList.add('slide-enter');

  setTimeout(() => {
    messageDiv.classList.add('slide-exit');
  }, 3000); // slide out after 3 seconds

  currentMessageIndex = (currentMessageIndex + 1) % messages.length;
  setTimeout(showMessage, 4000); 
}

// once page loaded, shows message.
document.addEventListener('DOMContentLoaded', showMessage);