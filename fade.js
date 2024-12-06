document.addEventListener("DOMContentLoaded", () => {
    const fadeBox = document.getElementById('fadeBox');
  
    function showFade() {
      fadeBox.style.display = 'block'; // Make sure the image is visible
      setTimeout(() => {
        fadeBox.classList.add('show'); // Trigger fade-in after 5 seconds
      }, 3000);
    }
  
    showFade(); // Start the fade-in process
  });
  
