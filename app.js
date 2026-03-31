// --- Task 10.1: Build - Click Counter ---
const countSpan = document.getElementById("count");
const btnIncrease = document.getElementById("btn-increase");
const btnDecrease = document.getElementById("btn-decrease");
const btnReset = document.getElementById("btn-reset");

let count = 0;

function updateCounter() {
    countSpan.textContent = count;
}

// + button increases count
btnIncrease.addEventListener("click", () => {
    count++;
    updateCounter();
});

// - button decreases count
btnDecrease.addEventListener("click", () => {
    // Count cannot go below 0
    if (count > 0) {
        count--;
        updateCounter();
    }
});

// Reset button sets to 0
btnReset.addEventListener("click", () => {
    count = 0;
    updateCounter();
});


// --- Task 10.2: Build - Keyboard Shortcuts ---
const contactForm = document.getElementById("contact-form");

document.addEventListener("keydown", (event) => {
    // Ctrl+S: Show "Saved!" alert (prevent actual save dialog)
    if (event.ctrlKey && event.key.toLowerCase() === "s") {
        event.preventDefault();
        alert("Saved!");
    }

    // Escape: Clear all form inputs
    if (event.key === "Escape") {
        contactForm.reset();
        // Clear errors if present
        clearError(document.getElementById("name"));
        clearError(document.getElementById("email"));
    }

    // Ctrl+Enter: Submit form
    if (event.ctrlKey && event.key === "Enter") {
        // Modern approach to properly trigger submit event bypassing standard button validation wait
        contactForm.requestSubmit();
    }
});


// --- Task 10.3: Build - Delegated Task List ---
const taskList = document.getElementById("task-list");
const newTaskInput = document.getElementById("new-task-input");
const btnAdd = document.getElementById("btn-add-task");

// ONE event listener on the parent ul
taskList.addEventListener("click", (event) => {
    // Clicking a delete button removes the item
    if (event.target.classList.contains("delete-btn")) {
        // Stop propagation incase we also toggle completed
        event.stopPropagation();
        const li = event.target.closest("li");
        li.remove();
        return; // Early return
    }

    // Clicking a task toggles "completed" class
    // Match either the Span or the outer Li element
    if (event.target.tagName.toLowerCase() === "span" || event.target.tagName.toLowerCase() === "li") {
        const li = event.target.closest("li");
        li.classList.toggle("completed");
    }
});

// Add new task logic
btnAdd.addEventListener("click", () => {
    const text = newTaskInput.value.trim();
    if (text) {
        const li = document.createElement("li");
        li.innerHTML = `<span>${text}</span><button class="delete-btn">Delete</button>`;
        taskList.appendChild(li);
        newTaskInput.value = "";
    }
});


// --- Task 10.4: Build/Exercise - Form Handling ---
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

function showError(input, message) {
    input.classList.add("error");
    const errorMsg = input.nextElementSibling;
    errorMsg.textContent = message;
}

function clearError(input) {
    input.classList.remove("error");
    const errorMsg = input.nextElementSibling;
    errorMsg.textContent = "";
}

// Real-time validation
nameInput.addEventListener("input", function (event) {
    const value = event.target.value;
    if (value.length > 0 && value.trim().length < 2) {
        showError(nameInput, "Name must be at least 2 characters");
    } else {
        clearError(nameInput);
    }
});

emailInput.addEventListener("input", function (event) {
    const value = event.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Empty field should just clear unless we enforce required checking on input
    if (value.length > 0 && !emailRegex.test(value)) {
        showError(emailInput, "Please enter a valid email");
    } else {
        clearError(emailInput);
    }
});

// Additional validation layer for logic
function isValid(data) {
    let valid = true;

    // Name check
    if (data.name.trim().length < 2) {
        showError(nameInput, "Name must be at least 2 characters");
        valid = false;
    }

    // Email Check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showError(emailInput, "Please enter a valid email");
        valid = false;
    }

    return valid;
}

// Form submission
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();  // Stop default action immediately

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    console.log("Form data submitted:", data);

    // Validate final checks before proceeding
    if (isValid(data)) {
        alert("Form submitted successfully!");
        contactForm.reset();
    }
});
