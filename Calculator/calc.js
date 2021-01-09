
var monitor=document.getElementsByClassName("typing-screen");
var script=document.getElementById("script");
var one=document.getElementById("one");
var two=document.getElementById("two");
var three=document.getElementById("three");
var four=document.getElementById("four");
var five=document.getElementById("five");
var six=document.getElementById("six");
var seven=document.getElementById("seven");
var eight=document.getElementById("eight");
var nine=document.getElementById("nine");
var zero=document.getElementById("zero");
var addition=document.getElementById("add");
var subtraction=document.getElementById("subtract");
var multiplication=document.getElementById("multiply");
var division=document.getElementById("divide");
var clear=document.getElementById("clear");
var point=document.getElementById("point");
var equal=document.getElementById("equal");
var btn = document.getElementsByClassName("btn");
var digit = "0";
var firstNum = "0";
var secondNum = "0";
var result = "0";
var equalPressed = "no";
var oporatorPressed = "no";

script.innerHTML = digit;

function drawnum(num) {
	if (digit == "0" && num != "." || digit == "null") {
		digit = num;
	} else {
		digit = digit + num;
	}
	return digit;
}

one.onclick=()=>{
	script.innerHTML = drawnum("1");
}
two.onclick=()=>{
	script.innerHTML = drawnum("2");
}
three.onclick=()=>{
	script.innerHTML = drawnum("3");
}
four.onclick=()=>{
	script.innerHTML = drawnum("4");
}
five.onclick=()=>{
	script.innerHTML = drawnum("5");
}
six.onclick=()=>{
	script.innerHTML = drawnum("6");
}
seven.onclick=()=>{
	script.innerHTML = drawnum("7");
}
eight.onclick=()=>{
	script.innerHTML = drawnum("8");
}
nine.onclick=()=>{
	script.innerHTML = drawnum("9");
}
zero.onclick=()=>{
	script.innerHTML = drawnum("0");
}
point.onclick=()=>{
	script.innerHTML = drawnum(".");
}
clear.onclick=()=>{
	result="";
	digit = "0";
	script.innerHTML = digit;
	equalPressed = "no";
	oporatorPressed = "no";
	equal.onclick=()=>{
		digit="0";
		script.innerHTML = digit;
	}	
}
////////////////////////////////////
//    The Oporators Section!!     //
////////////////////////////////////
var y = "null";
var x = "null";

addition.onclick=()=>{
	if (digit != "null") {
		x = digit;
		digit = "null";
		script.innerHTML = "";
		console.log(digit);
		console.log(result);
		equal.onclick=()=>{
			y = digit;
			result = Number(x) + Number(y);
			digit = result;
			script.innerHTML = result;
		}
	}
	
}

subtraction.onclick=()=> {
	if (digit != "null") {
		x = digit;
		digit = "null";
		script.innerHTML = "";
		console.log(digit);
		console.log(result);
		equal.onclick=()=>{
			y = digit;
			result = Number(x) - Number(y);
			digit = result;
			script.innerHTML = result;
		}
	}
}

multiplication.onclick=()=> {
	if (digit != "null") {
		x = digit;
		digit = "null";
		script.innerHTML = "";
		console.log(digit);
		console.log(result);
		equal.onclick=()=>{
			y = digit;
			result = Number(x) * Number(y);
			digit = result;
			script.innerHTML = result;
		}
	}
}

division.onclick=()=>{
	if (digit != "null") {
		x = digit;
		digit = "null";
		script.innerHTML = "";
		console.log(digit);
		console.log(result);
		equal.onclick=()=>{
			y = digit;
			result = Number(x) / Number(y);
			digit = result;
			script.innerHTML = result;
		}
	}
}











