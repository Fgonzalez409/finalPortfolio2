document.addEventListener("DOMContentLoaded", () => {
  // Select the root element where the animation will be rendered
  const rootElement = document.getElementById('root');
  const mainContent = document.getElementById('main-content');

  // Create a container for the animation
  const animationContainer = document.createElement('div');
  animationContainer.classList.add('animation-container');

  // Create the welcome text element
  const welcomeText = document.createElement('h1');
  welcomeText.textContent = 'Welcome to my page';
  welcomeText.classList.add('welcome-text');

  // Append the welcome text to the animation container
  animationContainer.appendChild(welcomeText);

  // Append the animation container to the root element
  rootElement.appendChild(animationContainer);

  // After a delay, add the 'show' class to the welcome text to reveal it
  setTimeout(() => {
    welcomeText.classList.add('show');
  }, 500);

  // After a longer delay, hide the animation and show the main content
  setTimeout(() => {
    animationContainer.style.display = 'none'; // Hide the animation container
    mainContent.classList.remove('hidden');
    mainContent.classList.add('visible');
  }, 2500); // Adjust this delay to match the duration of your animation
});

t.appendChild(animationContainer);
 