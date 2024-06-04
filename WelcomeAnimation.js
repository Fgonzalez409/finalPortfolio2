document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");

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
      console.log("Learn more button clicked");
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
      console.log("Adding show class to welcome text");
      welcomeText.classList.add('show');
  }, 500);

  // After a longer delay, hide the animation and show the main content
  setTimeout(() => {
      console.log("Hiding animation container and showing main content");
      animationContainer.style.display = 'none';
      mainContent.classList.remove('content-hidden');
      mainContent.classList.add('content-visible');
  }, 2500); // Adjust this delay to match the duration of your animation
});