//chatgpt magic
// Select all sliders
let sliders = document.querySelectorAll('.slider');

// Iterate through each slider
sliders.forEach(function(slider) {
    // Get the corresponding output element
    let output = document.getElementById(slider.id + '-value');

    // Set the initial value
    output.innerHTML = slider.value;

    // Add an input event listener to each slider
    slider.oninput = function() {
        // Update the corresponding output element
        output.innerHTML = this.value;
    };
});