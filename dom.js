/* Task 9.4: Adding & Removing Elements */

// ===== Exercise 1: Creating Elements =====

// Create new element
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph!";
newParagraph.className = "content highlight";

// Add to the page
const article = document.querySelector("article");
article.appendChild(newParagraph); // Add at end

// Insert before another element
const firstParagraph = article.querySelector("p");
article.insertBefore(newParagraph, firstParagraph); // Add before first p

// Modern insertion methods
const anotherPara1 = document.createElement("p");
anotherPara1.textContent = "Prepended text!";
article.prepend(anotherPara1); // First child

const anotherPara2 = document.createElement("p");
anotherPara2.textContent = "Appended text!";
article.append(anotherPara2); // Last child

const anotherPara3 = document.createElement("p");
anotherPara3.textContent = "Before sibling!";
firstParagraph.before(anotherPara3); // Before sibling

const anotherPara4 = document.createElement("p");
anotherPara4.textContent = "After sibling!";
firstParagraph.after(anotherPara4); // After sibling


// ===== Exercise 2: Removing Elements =====

// Remove an element
const footer = document.querySelector("footer");
if (footer) {
    footer.remove();
}

// Remove child
const nav = document.querySelector("nav");
const lastLink = nav.querySelector("li:last-child");
if (lastLink) {
    lastLink.parentElement.removeChild(lastLink);
}

// Clear all children (commented out text structure so we can see the cloned elements later in Ex3)
// article.innerHTML = ""; // Simple but rebuilds DOM
// OR
/*
while (article.firstChild) {
    article.removeChild(article.firstChild);
}
*/
console.log("Skipping full article wipe so visual output remains visible!");


// ===== Exercise 3: Cloning Elements =====

const navItem = document.querySelector(".nav-link").parentElement;
const clone = navItem.cloneNode(true); // true = deep clone
clone.querySelector("a").textContent = "New Link";
clone.querySelector("a").href = "#"; // Just to keep it consistent
document.querySelector(".nav-list").appendChild(clone);


// ===== Build: Create a function that adds a new nav item dynamically =====

function addNavItem(text, href) {
    // 1. Create li element
    const newLi = document.createElement("li");

    // 2. Create a.nav-link inside
    const newAnchor = document.createElement("a");
    newAnchor.className = "nav-link";
    newAnchor.textContent = text;
    newAnchor.href = href;

    // 3. Append anchor to li
    newLi.appendChild(newAnchor);

    // 4. Add to the nav list
    const navList = document.querySelector(".nav-list");
    if (navList) {
        navList.appendChild(newLi);
    }
}

// Test the function
addNavItem("Blog", "/blog");
addNavItem("Portfolio", "/portfolio");

console.log("Task 9.4 Exercises Completed Successfully!");
