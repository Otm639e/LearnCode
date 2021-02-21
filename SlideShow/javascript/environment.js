let main = document.createElement("div");
document.body.appendChild(main);
main.id = "main";

let image_on_page = document.createElement("img"); //creating an element "img" 
image_on_page.classList.add('size');               //putting a class on that img
//image_on_page.src = 'images/brawstars.jpeg';       //giving that "img an src or url"

let listOfImages = ['images/LA.JPG', 'images/AngelesNationalP.JPG', 'images/Barca.JPG', 'images/LosAngeles.JPG', 'images/Palmdale.JPG', 'images/Pearblossom.jpg', 'images/SanFran.JPG', 'images/SantaMonica.JPG', 'images/snowMan.JPG', 'images/UCB.JPG']
//list of images 

main.appendChild(image_on_page);          //inputting this new creared element(img) into the main div
random = listOfImages[Math.trunc(Math.random() * listOfImages.length)];
image_on_page.src = random
//making the src or url into one of the images in the list 



////////////////////////////////////////////////////////////////////////
// Now creating the two sides buttons on the page to change characters// 
////////////////////////////////////////////////////////////////////////

let leftBox = document.createElement('div');  //creating a div or button on the left 
document.body.appendChild(leftBox);           //appending this button to the body of the html file
leftBox.classList.add('leftBoxApearance');    //adding a class to the button

let leftArrow = document.createElement('h1'); //creating a H1 in order to put an arrow in the button
leftArrow.innerText = '<';                    //putting an arrow in the button 
leftBox.appendChild(leftArrow);               //appending this H1 into the div we made
leftArrow.classList.add('leftArrow');         //adding a class to the H1 or 'leftArrow'


let rightBox = document.createElement('div');  //creating a div or button on the left 
document.body.appendChild(rightBox);           //appending this button to the body of the html file
rightBox.classList.add('rightBoxApearance');   //adding a class to the button

let rightArrow = document.createElement('h1'); //creating a H1 in order to put an arrow in the button
rightArrow.innerText = '>';                    //putting an arrow in the button 
rightBox.appendChild(rightArrow);              //appending this H1 into the div we made
rightArrow.classList.add('rightArrow');        //adding a class to the H1 or 'rightArrow'

///////////////////////////////////////////////////////////////////
////////turning the arrows green when clicking on the div//////////
///////////////////////////////////////////////////////////////////

leftBox.onmouseover = ()=>{
	leftArrow.style["color"]='#885266'
}
leftBox.onmouseout = ()=>{
	leftArrow.style["color"]='grey'
}

rightBox.onmouseover = ()=>{
	rightArrow.style["color"]='#885266'
}
rightBox.onmouseout = ()=>{
	rightArrow.style["color"]='grey'
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//going back to the previous picture in the list with the left div and going forward in the list with the right div//
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

rightBox.addEventListener("click", myRightFunction);
leftBox.addEventListener("click", myLeftFunction);

function myRightFunction() {
	if(random == 'images/UCB.JPG'){
		random = 'images/LA.JPG'
		image_on_page.src = random;
		middleWords.innerText = characterSuper[listOfImages.indexOf(random)];
	}	else{
		random = listOfImages[listOfImages.indexOf(random)+1]
		image_on_page.src = random
		middleWords.innerText = characterSuper[listOfImages.indexOf(random)]
	}
}


function myLeftFunction() {
	if(random == 'images/LA.JPG'){
		random = 'images/UCB.JPG'
		image_on_page.src = random
		middleWords.innerText = characterSuper[listOfImages.indexOf(random)];
	}	else{
		random = listOfImages[listOfImages.indexOf(random)-1]
		image_on_page.src = random
		middleWords.innerText = characterSuper[listOfImages.indexOf(random)]
	}
}

////////////////////////////////////////////////
//Below is an easier onclick way of doing this//
////////////////////////////////////////////////

/*
rightBox.onclick = ()=>{
	if(random == 'images/TaraBanner.png'){
		random = 'images/ColtBanner.png'
		image_on_page.src = random
		middleWords.innerText = characterSuper[listOfImages.indexOf(random)]
	}	else{
		random = listOfImages[listOfImages.indexOf(random)+1]
		image_on_page.src = random
		middleWords.innerText = characterSuper[listOfImages.indexOf(random)]
	}	
}

leftBox.onclick = ()=>{
	if(random == 'images/ColtBanner.png'){
		random = 'images/TaraBanner.png'
		image_on_page.src = random
		middleWords.innerText = characterSuper[listOfImages.indexOf(random)]
	}	else{
		random = listOfImages[listOfImages.indexOf(random)-1]
		image_on_page.src = random
		middleWords.innerText = characterSuper[listOfImages.indexOf(random)]
	}
}
*/

/////////////////////////////////////////////////
//The words that come unique to every character//
/////////////////////////////////////////////////

characterSuper = ["Los Angeles, USA", "Angeles National Park, USA", "Barcelona, Spain", "Los Angeles, USA", "Palmdale, USA", "Pearblossom, USA", "San Fransisco, USA", "Santa Monica, USA", "Random Snowman", "UC Berkeley, USA"];

let middleWords = document.createElement('p');
main.appendChild(middleWords);
middleWords.id = ("supers");
middleWords.innerText = characterSuper[listOfImages.indexOf(random)];
let words = document.getElementsByClassName("supers");





