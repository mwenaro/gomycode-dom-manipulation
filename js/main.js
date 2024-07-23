// console.log(document)
//selectsrts - type, id, class
//methods selcting documents elements
/*  - querySelector
    - getElementById
    - getElementByClassName
    - getElementByTagName
    - querySectorAll
 */
let user = "Nekesa";
const h1 = document.querySelector("h1");
// get textContent
let footer = document.querySelector("footer");
console.log(h1.textContent);
console.log(h1.innerHTML);
//
console.log(footer.textContent);
footer.innerHTML = `


<p>New Paragraph</p>
<input placeholder="Enter Name">
<p>Hello there</p>

`;

//lget main
const main = document.querySelector("main");
//create new div
const card = document.createElement("div");
card.setAttribute(
  "class",
  `w-[250px]  h-[300px] overflow-hidden bg-slate-600
    rounded-2xl mx-auto flex flex-col gap-4 p-4 my-20`
);
//create imgContainer div
const imgContainer = document.createElement("div");
imgContainer.className =
  "w-full flex items-center justify-center overflow-hidden";
let img = document.createElement("img");
img.setAttribute("src", "/images/new-sima.png");
img.setAttribute("alt", "Lovely image");
img.className = "h-full w-auto";

//add image to its container
imgContainer.appendChild(img);

//add imgcontainer to card
card.appendChild(imgContainer);
console.log(card);

//add acrd to the main
main.appendChild(card);

let src = img.getAttribute("src");
console.log(src);
// img.removeAttribute('src')
//select footer paragrap
let footerP = document.querySelector("footer  p");
console.log(footerP);
footerP.setAttribute("style", "background-color:red;color:white");
footerP.style = "background-color:blue;";
footerP.style.color = "red";
footerP.style.fontSize = "30px";
footerP.style.backgroundColor = "purple";

// Events
const dareBtn = document.querySelector("#btnDare");
//add an event listener
dareBtn.addEventListener("mouseenter", function (e) {
  console.log(e.target);
  e.target.textContent = "You're stepping on me!";
  dareBtn.addEventListener("mouseleave", (e) => {
    e.target.textContent = "Why are you leaving?";
  });
});


let headerH1 = document.querySelector('header > h1')
console.log(headerH1.getAttribute('style'))
headerH1.setAttribute('data-id', "78483gcsdhtr873trjhdvg43")
headerH1.removeAttribute('data-id')
console.log(headerH1.getAttribute('data-id'))
