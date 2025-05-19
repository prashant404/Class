let headingElement = document.getElementById("heading");
console.log(headingElement.textContent);

let elements = document.getElementsByClassName("info");
for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = "red";
}

let ele = document.querySelector("h1");
ele.textContent = "New Heading";
ele.style.color = "red";


//DRY 
//VARIABLE
