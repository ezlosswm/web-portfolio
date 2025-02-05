export const initCursorTrail = () => {
  const numTrailElements = 10; // Number of elements in the trail
  const trail: HTMLDivElement[] = []; // Array to hold trail elements
  let mouseX = 0;
  let mouseY = 0;
  let inactivityTimeout: ReturnType<typeof setTimeout>;

  // Create a container for the trail in the background
  const trailContainer = document.createElement("div");
  trailContainer.className = "fixed inset-0 -z-10 pointer-events-none";
  document.body.appendChild(trailContainer);

  // Create trail elements inside the container
  for (let i = 0; i < numTrailElements; i++) {
    const element = document.createElement("div");
    element.className =
      "absolute size-5 bg-gradient-to-r from-vblue-300 to-vblue-400 rounded-full pointer-events-none opacity-0";
    trailContainer.appendChild(element);
    trail.push(element);
  }

  // Update trail position
  let index = 0;
  const updateTrail = () => {
    const element = trail[index];
    if (element) {
      element.style.left = `${mouseX}px`;
      element.style.top = `${mouseY}px`;
      element.style.opacity = "1";
      element.style.transform = `scale(${Math.random() * 1.5 + 1})`; // Random scale for effect
      element.style.transition =
        "opacity 2s cubic-bezier(0.08, 0.79, 0.28, 1), transform 2s cubic-bezier(0.08, 0.79, 0.28, 1)";
      setTimeout(() => {
        element.style.opacity = "0.5";
      }, 50); // Fade out delay
    }

    index = (index + 1) % numTrailElements; // Loop through trail elements
  };

  // Show trail on mouse movement
  const handleMouseMove = (event: MouseEvent) => {
    mouseX = event.clientX;
    mouseY = event.clientY;

    // Clear the inactivity timeout when the mouse is moving
    clearTimeout(inactivityTimeout);

    updateTrail();

    // Restart the inactivity timeout
    inactivityTimeout = setTimeout(() => {
      fadeOutTrail();
    }, 300); // Adjust delay as needed
  };

  // Fade out all trail elements
  const fadeOutTrail = () => {
    trail.forEach((element) => {
      element.style.opacity = "0";
    });
  };

  // Attach listeners
  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("mouseleave", fadeOutTrail);
};
