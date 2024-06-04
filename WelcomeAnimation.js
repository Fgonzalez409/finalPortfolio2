document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById('root');
  const mainContent = document.getElementById('main-content');
  const animationContainer = document.createElement('div');
  animationContainer.classList.add('animation-container');

  const welcomeText = document.createElement('h1');
  welcomeText.textContent = 'Hello and thank you for giving my page a visit!';
  welcomeText.classList.add('welcome-text');

  animationContainer.appendChild(welcomeText);
  rootElement.appendChild(animationContainer);

  const learnMoreButton = document.getElementById("learn-more-button");
  const additionalContent = document.getElementById("additional-content");

  learnMoreButton.addEventListener("click", function() {
      if (additionalContent.classList.contains("content-hidden")) {
          additionalContent.classList.remove("content-hidden");
          additionalContent.classList.add("content-visible");
      } else {
          additionalContent.classList.remove("content-visible");
          additionalContent.classList.add("content-hidden");
      }
  });

  // After a delay, add the 'show' class to the welcome text to reveal it
  setTimeout(() => {
      welcomeText.classList.add('show');
  }, 500);

  // After a longer delay, hide the animation and show the main content
  setTimeout(() => {
      animationContainer.style.display = 'none';
      mainContent.classList.remove('hidden');
      mainContent.classList.add('visible');
  }, 2500); // Adjust this delay to match the duration of your animation
});