console.log("hello world");
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
var digit = "0";
var firstNum = "0";
var secondNum = "0";
var result = "0";
var equalPressed = "no";
var oporatorPressed = "no";

digit=firstNum;
script.innerHTML=digit;

one.onclick=()=>{
	let extraNum = "1";
	if (digit != "0") {
		digit = digit + extraNum;
		script.innerHTML=digit;
	} else {
		digit = extraNum;
		script.innerHTML=digit;
	}
}
two.onclick=()=>{
	let extraNum = "2";
	if (digit != "0") {
		digit = digit + extraNum;
		script.innerHTML=digit;
	} else {
		digit = extraNum;
		script.innerHTML=digit;
	}
}
three.onclick=()=>{
	let extraNum = "3";
	if (digit != "0") {
		digit = digit + extraNum;
		script.innerHTML=digit;
	} else {
		digit = extraNum;
		script.innerHTML=digit;
	}
}
four.onclick=()=>{
	let extraNum = "4";
	if (digit != "0") {
		digit = digit + extraNum;
		script.innerHTML=digit;
	} else {
		digit = extraNum;
		script.innerHTML=digit;
	}
}
five.onclick=()=>{
	let extraNum = "5";
	if (digit != "0") {
		digit = digit + extraNum;
		script.innerHTML=digit;
	} else {
		digit = extraNum;
		script.innerHTML=digit;
	}
}
six.onclick=()=>{
	let extraNum = "6";
	if (digit != "0") {
		digit = digit + extraNum;
		script.innerHTML=digit;
	} else {
		digit = extraNum;
		script.innerHTML=digit;
	}
}
seven.onclick=()=>{
	let extraNum = "7";
	if (digit != "0") {
		digit = digit + extraNum;
		script.innerHTML=digit;
	} else {
		digit = extraNum;
		script.innerHTML=digit;
	}
}
eight.onclick=()=>{
	let extraNum = "8";
	if (digit != "0") {
		digit = digit + extraNum;
		script.innerHTML=digit;
	} else {
		digit = extraNum;
		script.innerHTML=digit;
	}
}
nine.onclick=()=>{
	let extraNum = "9";
	if (digit != "0") {
		digit = digit + extraNum;
		script.innerHTML=digit;
	} else {
		digit = extraNum;
		script.innerHTML=digit;
	}
}
zero.onclick=()=>{
	let extraNum = "0";
	if (digit != "0") {
		digit = digit + extraNum;
		script.innerHTML=digit;
	} else {
		digit = extraNum;
		script.innerHTML=digit;
	}
}
point.onclick=()=>{
	let extraNum = ".";
	digit = digit + extraNum;
	script.innerHTML=digit;
}
clear.onclick=()=>{
	result="";
	digit = "0";
	script.innerHTML=digit;
	equalPressed = "no";
	oporatorPressed = "no";
	equal.onclick=()=>{
		digit="0";
		script.innerHTML=digit;
	}	
}

////////////////////////////////////
//    The Oporators Section!!     //
////////////////////////////////////
var y = "0";
var x = "0";

addition.onclick=()=>{
	if (oporatorPressed == "yes") {
		y = digit;
		result=Number(x)+Number(y);
		script.innerHTML=result;
		x = result;
		digit = x;
	} else {
		x = digit;
		script.innerHTML = x;
		digit = secondNum;
		oporatorPressed = "yes";
		equal.onclick=()=>{
			if (equalPressed == "yes") {
				result=Number(x)+Number(y);
				script.innerHTML=result;
				x = result;
			} else {
				y = digit;
				result=Number(x)+Number(y);
				script.innerHTML=result;
				x=result;
				digit=x;
				equalPressed = "yes";
			}
		}
	}	
}

multiplication.onclick=()=>{
	x = digit;
	script.innerHTML = x;
	digit = secondNum;
	equal.onclick=()=>{
		if (equalPressed == "yes") {
			result=Number(x)*Number(y);
			script.innerHTML=result;
			x = result;
		} else {
			y = digit;
			result=Number(x)*Number(y);
			script.innerHTML=result;
			x = result;
			digit = x;
			equalPressed = "yes";
		}
	}
}

subtraction.onclick=()=>{
	x = digit;
	script.innerHTML = x;
	digit = secondNum;
	equal.onclick=()=>{
		if (equalPressed == "yes") {
			result=Number(x)-Number(y);
			script.innerHTML=result;
			x = result;
		} else {
			y = digit;
			result=Number(x)-Number(y);
			script.innerHTML=result;
			x = result;
			digit = x;
			equalPressed = "yes";
		}
	}
}

division.onclick=()=>{
	x = digit;
	script.innerHTML = x;
	digit = secondNum;
	equal.onclick=()=>{
		if (equalPressed == "yes") {
			result=Number(x)/Number(y);
			script.innerHTML=result;
			x = result;
		} else {
			y = digit;
			result=Number(x)/Number(y);
			script.innerHTML=result;
			x = result;
			digit = x;
			equalPressed = "yes";
		}
	}
}











