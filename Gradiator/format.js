//Variables being used
let mainColor = '#FFFFFF';
let yellow = '#F7CE74';
let pink = '#EE6CB7';
let blue = '#82D2EE';
let darkBlue = '#283054';
let gray = '#F0F2F8';
let newblue = '#141C39';
let black = '#000000';
let darkGray = '#4D535E';
let superDarkGray = '#0B1419';

let deg1 = '0%';
let deg2 = '50%';
let deg3 = '100%';

let color1 = yellow;
let color2 = blue;
let color3 = darkBlue;

let x = 0;
let rowHeight = '65px';

let transimg = new Image();
transimg.src = '../Gradiator/transElips.png';

//Elements Created
let header2 = document.createElement('div');
document.body.appendChild(header2);

let title = document.createElement('h1');
header2.appendChild(title);

let image = document.createElement('div');
document.body.appendChild(image);

let scroll1 = document.createElement('div');
scroll1.classList.add('scrollable');
let scroll2 = document.createElement('div');
scroll2.classList.add('scrollable');
let scroll3 = document.createElement('div');
scroll3.classList.add('scrollable');
image.appendChild(scroll1);
image.appendChild(scroll3);
image.appendChild(scroll2);

//These are the first row of inputs elements
let choosingColor1 = document.createElement('div');
document.body.appendChild(choosingColor1);

let percentage = document.createElement('div');
choosingColor1.appendChild(percentage);

let display = document.createElement('button');
choosingColor1.appendChild(display);

let hexcode = document.createElement('div');
choosingColor1.appendChild(hexcode);
///////////////////////////////////////////////

//These are the second row of inputs elements
let choosingColor2 = document.createElement('div');
document.body.appendChild(choosingColor2);

let percentage2 = document.createElement('div');
choosingColor2.appendChild(percentage2);

let display2 = document.createElement('button');
choosingColor2.appendChild(display2);

let hexcode2 = document.createElement('div');
choosingColor2.appendChild(hexcode2);
///////////////////////////////////////////////

//These are the third row of inputs elements
let choosingColor3 = document.createElement('div');
document.body.appendChild(choosingColor3);

let percentage3 = document.createElement('div');
choosingColor3.appendChild(percentage3);

let display3 = document.createElement('button');
choosingColor3.appendChild(display3);

let hexcode3 = document.createElement('div');
choosingColor3.appendChild(hexcode3);
///////////////////////////////////////////////

//These are the forth row of inputs elements
let choosingColor4 = document.createElement('div');
document.body.appendChild(choosingColor4);

let go = document.createElement('button');
choosingColor4.appendChild(go);
///////////////////////////////////////////////

let blackBoard = document.createElement('div');
document.body.appendChild(blackBoard);

//Time for some styling (decoration)
document.body.style.backgroundColor = mainColor;

header2.style.marginTop = '68px';
header2.style.visibility = 'visible';
header2.style.position = 'relative';
header2.style.display = 'flex';
header2.style.visibility = 'visible';
header2.style.width = '100%';
header2.style.backgroundColor = mainColor;
header2.style.height = '90px';
header2.style.flexFlow = 'wrap';
header2.style.justifyContent = "space-evenly";
header2.style.alignContent = 'center';
header2.style.textAlign = 'center';

title.style.display = 'relative';
title.style.visibility = 'visible';
title.style.color = superDarkGray;
title.innerHTML = 'GRADIATOR';
title.style.fontFamily = 'Comic Sans MS, Comic Sans, cursive';
title.style.fontSize = '33px';
title.style.borderBottom = `solid 2px ${superDarkGray}`;
image.style.visibility = 'visible';
image.style.width = '100%';
deg1 = `${((image.offsetWidth - (image.offsetWidth)) / image.offsetWidth) * 100}%`;
deg2 = `${((image.offsetWidth - (image.offsetWidth / 2)) / image.offsetWidth) * 100}%`;
deg3 = `${((image.offsetWidth) / image.offsetWidth) * 100}%`;
image.style.backgroundImage = `linear-gradient(to right, ${color1} ${deg1}, ${color2} ${deg2}, ${color3} ${deg3})`;
image.style.height = '140px';

scroll1.style.left = '0%';
scroll1.style.backgroundColor = color1;
scroll2.style.left = `${((image.offsetWidth - ((image.offsetWidth / 2) + 13)) / image.offsetWidth) * 100}%`;
scroll2.style.backgroundColor = color2;
scroll3.style.right = '0%';
scroll3.style.backgroundColor = color3;

let scrollables = document.getElementsByClassName('scrollable');
for (i = 0; i < scrollables.length; i++) {
    scrollables[i].style.position = 'absolute';
    scrollables[i].style.width = '20px';
    scrollables[i].style.height = '20px';
    scrollables[i].style.borderRadius = '20px';
    scrollables[i].style.display = 'absolute';
    scrollables[i].style.border = `3px solid ${mainColor}`;
    scrollables[i].style.top = "130px";
    scrollables[i].draggable = true;
    scrollables[i].dragConstraint = 'horizontal';
    scrollables[i].style.textDecoration = 'none';
    scrollables[i].style.zIndex = '100';
}

choosingColor1.style.display = 'flex';
choosingColor1.style.flexFlow = 'wrap';
choosingColor1.style.justifyContent = "space-evenly";
choosingColor1.style.alignContent = 'center';
choosingColor1.style.textAlign = 'center';
choosingColor1.style.height = rowHeight;
choosingColor1.style.marginTop = '60px';
choosingColor1.style.backgroundColor = mainColor;

percentage.innerHTML = '0';
percentage.style.backgroundColor = mainColor;
percentage.style.width = '45px';
percentage.style.height = '25px';
percentage.style.border = `solid 4px ${gray}`;
percentage.style.borderRadius = '15px';
percentage.contentEditable = 'true';
percentage.style.fontFamily = 'Arial, Helvetica, sans-serif';
percentage.style.fontSize = '20px';
percentage.style.color = darkGray;
percentage.style.padding = '5px';
percentage.style.outline = 'none';

hexcode.innerHTML = '#F7CE74';
hexcode.style.backgroundColor = mainColor;
hexcode.style.height = '25px';
hexcode.style.width = '100px';
hexcode.style.border = `solid 4px ${gray}`;
hexcode.contentEditable = 'true';
hexcode.style.borderRadius = '15px';
hexcode.style.fontFamily = 'Arial, Helvetica, sans-serif';
hexcode.style.fontSize = '20px';
hexcode.style.color = darkGray;
hexcode.style.padding = '5px';
hexcode.style.outline = 'none';

display.style.width = '60px';
display.style.height = '45px';
display.style.backgroundColor = yellow;
display.style.border = `solid 4px ${gray}`;
display.style.borderRadius = '15px';
display.style.fontFamily = 'Arial, Helvetica, sans-serif';
display.style.fontSize = '20px';
display.style.color = darkGray;
display.style.padding = '5px';
display.style.outline = 'none';

choosingColor2.style.display = 'flex';
choosingColor2.style.flexFlow = 'wrap';
choosingColor2.style.justifyContent = "space-evenly";
choosingColor2.style.alignContent = 'center';
choosingColor2.style.textAlign = 'center';
choosingColor2.style.height = rowHeight;
choosingColor2.style.marginTop = '20px';
choosingColor2.style.backgroundColor = mainColor;

percentage2.innerHTML = '50';
percentage2.style.backgroundColor = mainColor;
percentage2.style.width = '45px';
percentage2.style.height = '25px';
percentage2.style.border = `solid 4px ${gray}`;
percentage2.style.borderRadius = '15px';
percentage2.contentEditable = 'true';
percentage2.style.fontFamily = 'Arial, Helvetica, sans-serif';
percentage2.style.fontSize = '20px';
percentage2.style.color = darkGray;
percentage2.style.padding = '5px';
percentage2.style.outline = 'none';

hexcode2.innerHTML = '#82D2EE';
hexcode2.style.backgroundColor = mainColor;
hexcode2.style.height = '25px';
hexcode2.style.width = '100px';
hexcode2.style.border = `solid 4px ${gray}`;
hexcode2.contentEditable = 'true';
hexcode2.style.borderRadius = '15px';
hexcode2.style.fontFamily = 'Arial, Helvetica, sans-serif';
hexcode2.style.fontSize = '20px';
hexcode2.style.color = darkGray;
hexcode2.style.padding = '5px';
hexcode2.style.outline = 'none';

display2.style.width = '60px';
display2.style.height = '45px';
display2.style.backgroundColor = blue;
display2.style.border = `solid 4px ${gray}`;
display2.style.borderRadius = '15px';
display2.style.fontFamily = 'Arial, Helvetica, sans-serif';
display2.style.fontSize = '20px';
display2.style.color = darkGray;
display2.style.padding = '5px';
display2.style.outline = 'none';

choosingColor3.style.display = 'flex';
choosingColor3.style.flexFlow = 'wrap';
choosingColor3.style.justifyContent = "space-evenly";
choosingColor3.style.alignContent = 'center';
choosingColor3.style.textAlign = 'center';
choosingColor3.style.height = rowHeight;
choosingColor3.style.marginTop = '20px';
choosingColor3.style.backgroundColor = mainColor;

percentage3.innerHTML = '100';
percentage3.style.backgroundColor = mainColor;
percentage3.style.width = '45px';
percentage3.style.height = '25px';
percentage3.style.border = `solid 4px ${gray}`;
percentage3.style.borderRadius = '15px';
percentage3.contentEditable = 'true';
percentage3.style.fontFamily = 'Arial, Helvetica, sans-serif';
percentage3.style.fontSize = '20px';
percentage3.style.color = darkGray;
percentage3.style.padding = '5px';
percentage3.style.outline = 'none';

hexcode3.innerHTML = '#283054';
hexcode3.style.backgroundColor = mainColor;
hexcode3.style.height = '25px';
hexcode3.style.width = '100px';
hexcode3.style.border = `solid 4px ${gray}`;
hexcode3.contentEditable = 'true';
hexcode3.style.borderRadius = '15px';
hexcode3.style.fontFamily = 'Arial, Helvetica, sans-serif';
hexcode3.style.fontSize = '20px';
hexcode3.style.color = darkGray;
hexcode3.style.padding = '5px';
hexcode3.style.outline = 'none';

display3.style.width = '60px';
display3.style.height = '45px';
display3.style.backgroundColor = darkBlue;
display3.style.border = `solid 4px ${gray}`;
display3.style.borderRadius = '15px';
display3.style.fontFamily = 'Arial, Helvetica, sans-serif';
display3.style.fontSize = '20px';
display3.style.color = darkGray;
display3.style.padding = '5px';
display3.style.outline = 'none';

choosingColor4.style.display = 'flex';
choosingColor4.style.flexFlow = 'wrap';
choosingColor4.style.justifyContent = "space-evenly";
choosingColor4.style.alignContent = 'center';
choosingColor4.style.textAlign = 'center';
choosingColor4.style.height = rowHeight;
choosingColor4.style.marginTop = '20px';
choosingColor4.style.backgroundColor = mainColor;

go.innerHTML = 'Go';
go.style.width = '200px';
go.style.height = '45px';
go.style.backgroundColor = gray;
go.style.border = `solid 4px ${gray}`;
go.style.borderRadius = '15px';
go.style.fontFamily = 'Arial, Helvetica, sans-serif';
go.style.fontSize = '20px';
go.style.color = superDarkGray;
go.style.padding = '5px';
go.style.outline = 'none';

blackBoard.style.width = '60%';
blackBoard.style.textAlign = 'left';
blackBoard.style.height = '300px';
blackBoard.style.marginTop = '20px';
blackBoard.style.padding = "25px 10%"
blackBoard.style.margin = "50px auto";
blackBoard.style.borderRadius = '50px';
blackBoard.style.backgroundImage = `linear-gradient(to right, #000000 0%, #111111 80%, #222222 100%)`;
blackBoard.style.color = mainColor;
blackBoard.style.fontSize = '20px';
blackBoard.style.fontFamily = 'Arial, Helvetica, sans-serif';
blackBoard.innerHTML = `background:<br>linear-gradient(<br>to right,<br>${color1} ${deg1},<br>${color2} ${deg2},<br>${color3} ${deg3},<br>);`;
blackBoard.style.lineHeight = '40px';

//Functions
function dragstarting(event) {
    event.dataTransfer.setData('Test', 'some data');
    event.dataTransfer.setDragImage(transimg, 0, 0);
    this.addEventListener('drag', dragable);
}
function dragable(event) {
    x = event.pageX;
    if (x < (image.offsetWidth - 13) && x > 13) {
        this.style.left = `${((image.offsetWidth - (image.offsetWidth - (x-13))) / image.offsetWidth) * 100}%`;
        if (this.isSameNode(scroll1)) {
            deg1 = `${((image.offsetWidth - (image.offsetWidth - (x-13))) / image.offsetWidth) * 100}%`;
            let d1 = ((image.offsetWidth - (image.offsetWidth - (x-13))) / image.offsetWidth) * 100;
            percentage.innerHTML = Math.round(d1 * 10) / 10; //shows percentage
        }
        if (this.isSameNode(scroll2)) {
            deg2 = `${((image.offsetWidth - (image.offsetWidth - (x))) / image.offsetWidth) * 100}%`;
            let d2 = ((image.offsetWidth - (image.offsetWidth - (x))) / image.offsetWidth) * 100;
            percentage2.innerHTML = Math.round(d2 * 10) / 10; //shows percentage
        }
        if (this.isSameNode(scroll3)) {
            deg3 = `${((image.offsetWidth - (image.offsetWidth - (x+13))) / image.offsetWidth) * 100}%`;
            let d3 = ((image.offsetWidth - (image.offsetWidth - (x+13))) / image.offsetWidth) * 100;
            percentage3.innerHTML = Math.round(d3 * 10) / 10; //shows percentage
        }
        image.style.backgroundImage = `linear-gradient(to right, ${color1} ${deg1}, ${color2} ${deg2}, ${color3} ${deg3})`;
    }   
}

function writing1() {
    let p = percentage.textContent;
    let c = hexcode.textContent;
    let p2 = percentage2.textContent;
    let c2 = hexcode2.textContent;
    let p3 = percentage3.textContent;
    let c3 = hexcode3.textContent;
    if (c.length == 7 && c.charAt(0) == '#' && !c2.includes('.')) {
        color1 = c;
        display.style.backgroundColor = c;
        scroll1.style.backgroundColor = c;
    }
    if (c2.length == 7 && c2.charAt(0) == '#' && !c2.includes('.')) {
        color2 = c2;
        display2.style.backgroundColor = c2;
        scroll2.style.backgroundColor = c2;
    }
    if (c3.length == 7 && c3.charAt(0) == '#' && !c2.includes('.')) {
        color3 = c3;
        display3.style.backgroundColor = c3;
        scroll3.style.backgroundColor = c3;
    }
    if (p < 101 && p >= 0) {
        deg1 = `${p}%`;
        scroll1.style.left = deg1;   
    }
    if (p2 < 101 && p2 >= 0) {
        deg2 = `${((((p2/100) * image.offsetWidth) - 13)/image.offsetWidth) * 100}%`;
        scroll2.style.left = deg2;   
    }
    if (p3 < 101 && p3 >= 0) {
        deg3 = `${((((p3/100) * image.offsetWidth) - 26)/image.offsetWidth) * 100}%`;
        scroll3.style.left = deg3;   
    }
    image.style.backgroundImage = `linear-gradient(to right, ${color1} ${deg1}, ${color2} ${p2}%, ${color3} ${p3}%)`;
    color1 = color1.toUpperCase();
    color2 = color2.toUpperCase();
    color3 = color3.toUpperCase();
    blackBoard.innerHTML = `background:<br>linear-gradient(<br>to right,<br>${color1} ${deg1},<br>${color2} ${p2}%,<br>${color3} ${p3}%,<br>);`;
}
function push() {
    this.style.borderColor = darkGray;
}
function release() {
    this.style.borderColor = gray;
}

//functions for touch (phones)
function touchstarting(event) {
    this.addEventListener('touchmove', touchable);
}
function touchable(event) {
    x = event.touches[0].clientX;
    if (x < (image.offsetWidth - 13) && x > 13) {
        this.style.left = `${((image.offsetWidth - (image.offsetWidth - (x-13))) / image.offsetWidth) * 100}%`;
        if (this.isSameNode(scroll1)) {
            deg1 = `${((image.offsetWidth - (image.offsetWidth - (x - 13))) / image.offsetWidth) * 100}%`;
            let d1 = ((image.offsetWidth - (image.offsetWidth - (x-13))) / image.offsetWidth) * 100;
            percentage.innerHTML = Math.round(d1 * 10) / 10; //shows percentage
        }
        if (this.isSameNode(scroll2)) {
            deg2 = `${((image.offsetWidth - (image.offsetWidth - (x))) / image.offsetWidth) * 100}%`;
            let d2 = ((image.offsetWidth - (image.offsetWidth - (x))) / image.offsetWidth) * 100;
            percentage2.innerHTML = Math.round(d2 * 10) / 10; //shows percentage
        }
        if (this.isSameNode(scroll3)) {
            deg3 = `${((image.offsetWidth - (image.offsetWidth - (x + 13))) / image.offsetWidth) * 100}%`;
            let d3 = ((image.offsetWidth - (image.offsetWidth - (x + 13))) / image.offsetWidth) * 100;
            percentage3.innerHTML = Math.round(d3 * 10) / 10; //shows percentage
        }
        image.style.backgroundImage = `linear-gradient(to right, ${color1} ${deg1}, ${color2} ${deg2}, ${color3} ${deg3})`;
    }
}


//Use of functions
scroll1.addEventListener('dragstart', dragstarting);
scroll2.addEventListener('dragstart', dragstarting);
scroll3.addEventListener('dragstart', dragstarting);

scroll1.addEventListener('touchstart', touchstarting);
scroll2.addEventListener('touchstart', touchstarting);
scroll3.addEventListener('touchstart', touchstarting);

go.addEventListener('click', writing1);
go.addEventListener('mousedown', push);
go.addEventListener('mouseup', release);

