const element = document.getElementById('animatedButton');
let computedStyle = getComputedStyle(element);
let backgroundPosition = computedStyle.backgroundPosition.split(' ');
let initialPositionX = backgroundPosition[0]; // Extract X position
let initialPositionY = backgroundPosition[1]; // Extract Y position

    function handleAnimation(event) {
      if (event.type === 'mouseover') {
        
        initialPositionX = backgroundPosition[0]; // Extract X position
        initialPositionY = backgroundPosition[1]; // Extract Y position
        // Set the initial background position before starting animation
        element.style.backgroundPosition = `${initialPositionX} ${initialPositionY}`;

        // Remove the class to reset animation
        element.classList.add('animate-background');
        
      } else if (event.type === 'mouseout') {
        // Extract the current background position
        computedStyle = getComputedStyle(element);
        backgroundPosition = computedStyle.backgroundPosition.split(' ');
        var finalPositionX = backgroundPosition[0]; // Extract X position
        var finalPositionY = backgroundPosition[1]; // Extract Y position

        // Update the initial position X and Y with final positions
        initialPositionX = finalPositionX;
        initialPositionY = finalPositionY;

        // Set the background position to the last known position
        element.style.backgroundPosition = `${initialPositionX} ${initialPositionY}`;
        element.classList.remove('animate-background');
      }
    }

    element.addEventListener('mouseover', handleAnimation);
    element.addEventListener('mouseout', handleAnimation);