
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {addSticky()};

const header = document.getElementById('header');

// Get the offset position of the navbar
const sticky = header.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function addSticky() {
    if (window.pageYOffset >= sticky) {
      header.classList.add("sticky")
    } else {
      header.classList.remove("sticky");
    }
}



// And now to do the modify the menu for smaller devices

const dropDownMenu = document.getElementById('drop-down-menu');
let pressed = 0;
const homeLink = document.createElement("a");
homeLink.href = "index.html";
homeLink.innerText = "Home";
homeLink.classList.add("center-links");
homeLink.style["top"]='100px';
homeLink.style["margin-left"]='-24px';

const contactLink = document.createElement("a");
contactLink.innerText = "Contact";
contactLink.classList.add("center-links");
contactLink.style["top"]='150px';
contactLink.style["margin-left"]='-29px';

const aboutUsLink = document.createElement("a");
aboutUsLink.href = "about.html";
aboutUsLink.innerText = "About Me";
aboutUsLink.classList.add("center-links");
aboutUsLink.style["top"]='200px';
aboutUsLink.style["margin-left"]='-34px';

const gradiator = document.createElement("a");
gradiator.href = "gradiator.html";
gradiator.innerText = "Gradiator";
gradiator.classList.add("center-links");
gradiator.style["top"]='250px';
gradiator.style["margin-left"]='-33px';

dropDownMenu.addEventListener("click", headerDrop);

function headerDrop() {
  if (pressed == 0){
    header.style['height']='100%';
    pressed = 1;
    header.appendChild(homeLink);
    header.appendChild(contactLink);
    header.appendChild(aboutUsLink);
    header.appendChild(gradiator);
  } else{
    header.style['height']='68px';
    pressed = 0;
    homeLink.remove();
    contactLink.remove();
    aboutUsLink.remove();
    gradiator.remove();
  }
}


////////////////////////////scrolling to bottom with contact link/////////////////

contactLink.addEventListener("click", scrollDown);

function scrollDown() {
  header.style['height']='68px';
  pressed = 0;
  homeLink.remove();
  contactLink.remove();
  aboutUsLink.remove();
  gradiator.remove();
  contactLink.href = "#footer";
}

/////////////////////////////Links to the portfolio and resume and all the projects////////////////////


//make buttons lead to corresponding pages//
function goToCalc() {
  window.location.href = "../Calculator/index.html";
}    

function goToAboutMe() {
  window.location.href = "../public/about.html#languages";
}  

function goToResume() {
  window.location.href = "https://drive.google.com/file/d/1g-x-_2ddC25gxKuh1no25VJ6CT3HyDh5/view?usp=sharing";
} 

////////////////////////////////scrolling to protfolio///////////////////
const port = document.getElementById("port");
if (port) {
  port.addEventListener("click", goToAboutMe);
}


function mobileView(x) {
  const mobile = isMobile();
  if (mobile) {
    mobileViewC();
    const cover = x.getElementsByClassName("cover");
    cover[0].style.backgroundColor = "#4D535E";
    const p = x.getElementsByClassName("description");
    p[0].style.color = "#FFFFFF";
    const h2 = x.getElementsByClassName("plink");
    h2[0].style.color = "#F7CE74";
  } 
}

function mobileViewC() {
  const project = document.getElementsByClassName("project");
  for (i = 0; i < project.length; i++) {
    mobileViewCancel(project[i]);
  }
}

function mobileViewCancel(x) {
  const cover = x.getElementsByClassName("cover");
  cover[0].style.backgroundColor = "transparent";
  const p = x.getElementsByClassName("description");
  p[0].style.color = "transparent";
  const h2 = x.getElementsByClassName("plink");
  h2[0].style.color = "transparent";
  console.log("clicked");
}

function isMobile() {
  try{ document.createEvent("TouchEvent"); return true; }
  catch(e){ return false; }
}



