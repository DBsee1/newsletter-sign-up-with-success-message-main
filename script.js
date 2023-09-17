
const emailInput = document.getElementById("email");
const errorText = document.getElementById("float");
const myMail = document.getElementById('myMail');


    emailInput.addEventListener("input", function() {
        const email = emailInput.value.trim();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!emailPattern.test(email)) {
            emailInput.style.borderColor = '#FF6155'
            errorText.textContent = "Invalid email address";
            // emailInput.classList.add("error");
        } else {
            emailInput.classList.remove("error");
            emailInput.style.borderColor = 'hsl(234, 29%, 20%)'
            errorText.textContent = "";
        }
        if (email === ""){
            errorText.textContent = "";
            emailInput.style.borderColor = '';
        }

    });

    // Get references to the DOM elements
const popover = document.getElementById('popover');
const mainContainer = document.querySelector('.main-container'); // You don't have an element with the ID 'mainContainer', so I'm selecting the class '.main-container'.

// Define the popOver and closePop functions
const popOver = () => {
    // Check if the elements exist before trying to manipulate them
    if (popover && mainContainer) {
        popover.classList.add('openpop');
        mainContainer.classList.add('closepop');
    } else {
        console.error('One or both elements not found.');
    }
};

const closePop = () => {
    // Check if the elements exist before trying to manipulate them
    if (popover && mainContainer) {
        popover.classList.remove('openpop');
        mainContainer.classList.remove('closepop');
    } else {
        console.error('One or both elements not found.');
    }
};




