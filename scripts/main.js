// const myHeading = document.querySelector("h1"); /* "querySelector()" function is used to select the "h1" element in the HTML document 
// (webpage) and store it in "myHeading" variable. */

// myHeading.textContent = "Hello world!" /* "textContent" property is then used on the "myHeading" variable to update the content 
// inside the heading to "Hello World!" */

// document.querySelector("html").addEventListener("click", () => {
//     alert("Ouch! Stop poking me!");
//   }); /*  The addEventListener() function listens to the 'click' event and runs the anonymous function. */
const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src"); /* Retrieves the value of the image's src attribute. */
    if (mySrc.includes("images/firefox-icon.png")) { /* include() ensures the condition works even if the full URL is stored. this ensures the image toggles correctly from the first click. */
    /* In this case, .includes() checks if the file name or path (substring) exists within the src attribute (full string). */
        myImage.setAttribute("src", "images/firefox2.jpg"); /* Changes the value of the image's src attribute */
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
  
}


if (!localStorage.getItem("name")) {
    setUserName();
 } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.addEventListener("click", () => {
    setUserName();
})