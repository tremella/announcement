
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


function showLoadingAnimation(){
  const container = document.querySelector('.animation-container');
  const numberOfBalls = 10;
  
  const totalAnimationTime = 1; // seconds
  
  for (let i = 1; i <= numberOfBalls; i++) {
    const ball = document.createElement('div');
    ball.classList.add('ball');
    
    // Calculate rotation
    const rotationDegree = 36 * (i - 1); // 360 / 10 = 36 degrees per ball
    
    // Adjust the delay to ensure only 4-5 balls are fully visible at any time
    const animationDelay = -(totalAnimationTime / numberOfBalls) * (numberOfBalls - i);
    
    ball.style.transform = `rotate(${rotationDegree}deg) translate(100px) rotate(-${rotationDegree}deg)`;
    ball.style.animationDelay = `${animationDelay}s`;
    
    container.appendChild(ball);
  }
  
}

let currentMessageIndex = 0

function showMessage() {
  const message = document.querySelector('.message');
  
  // Immediately set the first message
  // message.textContent = messages[currentMessageIndex];
  message.textContent = ""
  message.classList.add('message-transition'); // Start the fade-in and fade-out cycle

  function changeMessage() {
    // Prepare to change the message by fading out
    message.classList.add('message-transition');
    // Change the message when fully faded out
    setTimeout(() => {
      currentMessageIndex = (currentMessageIndex + 1) % messages.length;
      message.textContent = messages[currentMessageIndex];
    }, 2500); // This timing should be half of your animation cycle (5s / 2)

    // Schedule the next message change
    setTimeout(changeMessage, 5000); // Continue with the 5-second cycle
  }

  // Start the cycle after the first full animation
  setTimeout(changeMessage, 5000);
}

// once page loaded, shows message.
document.addEventListener('DOMContentLoaded', () => {
  showLoadingAnimation()
  showMessage()
});

