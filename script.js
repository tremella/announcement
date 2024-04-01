
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

let currentMessageIndex = 0;

function showMessage() {
  const message = document.querySelector('.message');
  
  function changeMessage() {
    // Fade out current message and prepare to change the message
    message.classList.remove('message-transition'); // Make sure this triggers fade out
    
    setTimeout(() => {
      currentMessageIndex = (currentMessageIndex + 1) % messages.length;
      message.textContent = messages[currentMessageIndex];
      // Trigger fade in after text change
      message.classList.add('message-transition');
    }, 2500); // This timing should be synced with your fade-out duration
  
    // Schedule the next message change
    setTimeout(changeMessage, 5000); // Continue with the 5-second cycle
  }

  // Initialize the first message with a fade-in effect
  setTimeout(() => {
    message.textContent = messages[currentMessageIndex];
    message.classList.add('message-transition'); // Starts the fade-in effect
    setTimeout(changeMessage, 5000); // Start the regular cycle after the initial display
  }, 0.1); // A slight delay to ensure CSS transitions apply correctly for the initial fade-in
}

// once page loaded, shows message.
document.addEventListener('DOMContentLoaded', () => {
  showLoadingAnimation()
  showMessage()
});
