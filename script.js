
// Get references to DOM elements
const myButton = document.getElementById("myButton");
const myParagraph = document.getElementById("myParagraph");
const myDiv = document.getElementById("myDiv");

// Function to change text content
function changeText() {
    myParagraph.textContent = "Text has been changed!";
}

// Function to change CSS style
function changeStyle() {
    myDiv.style.backgroundColor = "yellow";
    myDiv.style.width = "300px";
}

// Function to add/remove element
function addRemoveElement() {
    const newElement = document.createElement("p");
    newElement.textContent = "This is a new paragraph!";
    if (myDiv.contains(newElement)) {
        myDiv.removeChild(newElement)
    } else {
        myDiv.appendChild(newElement);
    }
}

// Event listeners
myButton.addEventListener("click", () => {
    changeText();
    changeStyle();
    addRemoveElement();
});
