let headingElement = document.getElementById("heading");
console.log(headingElement.textContent);

let elements = document.getElementsByClassName("info");
for (let i = 0; i < elements.length; i++) {
    elements[i].style.color = "red";
}

let ele = document.querySelector("h1");
ele.textContent = "New Heading";
ele.style.color = "red";
ele.style.fontSize  ="100px";

let image = document.getElementById("image").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4_hpLK-f3kOHV-TJdBjawD6iPkWchTqey3w&s"

//DRY 
//VARIABLE

//create and append elements


let newPara = document.createElement("p");
newPara.textContent = "I am a new paragraph";

document.getElementById("container").appendChild(newPara);


//remove ele

let rm = document.getElementById("remove");
rm.remove();