
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
aboutUsLink.innerText = "About Us";
aboutUsLink.classList.add("center-links");
aboutUsLink.style["top"]='200px';
aboutUsLink.style["margin-left"]='-34px';

dropDownMenu.addEventListener("click", headerDrop);

function headerDrop() {
  if (pressed == 0){
    header.style['height']='100%';
    pressed = 1;
    header.appendChild(homeLink);
    header.appendChild(contactLink);
    header.appendChild(aboutUsLink);
  } else{
    header.style['height']='68px';
    pressed = 0;
    homeLink.remove();
    contactLink.remove();
    aboutUsLink.remove();
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
  contactLink.href = "#footer";
}

/////////////////////////////Starting to build html and css practice page////////////////////


//make buttons lead to corresponding pages//
function goToCalc() {
  window.location.href = "../Calculator/index.html";
}    

function goToAboutMe() {
  window.location.href = "../public/about.html";
}  
    



