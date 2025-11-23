document.addEventListener("DOMContentLoaded", () => {
    
    // Select all elements with the .fade-in class
    const animatedElements = document.querySelectorAll(".fade-in");

    if (!animatedElements.length) return;

    // Create an observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // If the element is in view
            if (entry.isIntersecting) {
                // Add the .visible class to trigger the CSS transition
                entry.target.classList.add("visible");
                // Stop observing this element (animation only happens once)
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    // Observe each animated element
    animatedElements.forEach(element => {
        observer.observe(element);
    });

});
