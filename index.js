function change()
{
	var inputFormat = document.getElementById("input").value;
	document.getElementById("changeLabel").innerHTML = "Enter " + inputFormat + " Number: " ;
	
	var outputFormat = document.getElementById("output").value;
	document.getElementById("title").innerHTML = inputFormat +" to " + outputFormat ;	

	if (inputFormat==="Binary" && outputFormat === "Decimal") 
	{
		document.getElementById("result1").innerHTML = "Decimal number: ";
		document.getElementById("result2").innerHTML = "Hexadecimal number: ";
		document.getElementById("result3").innerHTML = "Binary number: ";
	} 
	
	else if (inputFormat==="Hexadecimal" && outputFormat === "Decimal") 
	{
		document.getElementById("result1").innerHTML = "Decimal number: ";
		document.getElementById("result2").innerHTML = "Binary number: ";
		document.getElementById("result3").innerHTML = "Hexadecimal number: ";
	} 
	
	else if (inputFormat==="Binary" && outputFormat === "Hexadecimal") 
	{
		document.getElementById("result1").innerHTML = "Hexadecimal number: ";
		document.getElementById("result2").innerHTML = "Decimal number: ";
		document.getElementById("result3").innerHTML = "Binary number: ";
	}

	else if (inputFormat==="Decimal" && outputFormat === "Hexadecimal") 
	{
		document.getElementById("result1").innerHTML = "Hexadecimal number: ";
		document.getElementById("result2").innerHTML = "Binary number: ";
		document.getElementById("result3").innerHTML = "Decimal number: ";
	}

	else if (inputFormat=== "Decimal" && outputFormat === "Binary") 
	{
		document.getElementById("result1").innerHTML = "Binary number: ";
		document.getElementById("result2").innerHTML = "Hexadecimal number: ";
		document.getElementById("result3").innerHTML = "Decimal number: ";
	}

	else if (inputFormat=== "Hexadecimal" && outputFormat === "Binary") 
	{
		document.getElementById("result1").innerHTML = "Binary number: ";
		document.getElementById("result2").innerHTML = "Decimal number: ";
		document.getElementById("result3").innerHTML = "Hexadecimal number: ";
	}

	else if (inputFormat=== "Binary" && outputFormat === "Binary") 
	{
		document.getElementById("result1").innerHTML = "Binary number: ";
		document.getElementById("result2").innerHTML = "Decimal number: ";
		document.getElementById("result3").innerHTML = "Hexadecimal number: ";
	}
	else if (inputFormat=== "Decimal" && outputFormat === "Decimal") 
	{
		document.getElementById("result1").innerHTML = "Decimal number: ";
		document.getElementById("result2").innerHTML = "Binary number: ";
		document.getElementById("result3").innerHTML = "Hexadecimal number: ";
	} 
	else if (inputFormat=== "Hexadecimal" && outputFormat === "Hexadecimal") 
	{
		document.getElementById("result1").innerHTML = "Hexadecimal number: ";
		document.getElementById("result2").innerHTML = "Decimal number: ";
		document.getElementById("result3").innerHTML = "Binary number: ";
	}
	reset();
}

function restrictInput(input)
{
	var inputFormat = document.getElementById("input").value;
	if (inputFormat==="Binary")
	{
		var regex = /^[01]+$/;
			var userInput = input.value;
			if (!regex.test(userInput)) 
			{
				window.alert("Please enter a valid BINARY number!!! (0-1 only)");
			  	input.value = userInput.slice(0, -1); // Remove the last character if it's not a valid binary
				
			}
	}

	else if (inputFormat==="Decimal")
	{
			var regex = /^\d*\.?\d*$/;
			var userInput = input.value;
			if (!regex.test(userInput)) 
			{
				window.alert("Please enter a valid DECIMAL number!!! (0-9 only)");
			  	input.value = userInput.slice(0, -1); // Remove the last character if it's not a valid decimal
				
			}
	}

	else if (inputFormat==="Hexadecimal")
	{
		var regex = /^[0-9A-Fa-f]+$/;
		var userInput = input.value;
		if (!regex.test(userInput)) 
		{
			window.alert("Please enter a valid HEXADECIMAL number!!!");
			input.value = userInput.slice(0, -1); // Remove the last character if it's not a valid hex
			
		}
	}
}

function convert()
{
	var input = document.getElementById("number").value;
	var inputFormat = document.getElementById("input").value;
	var outputFormat = document.getElementById("output").value;

	//input
	var decimal=0;
	if (inputFormat === "Binary") 
	{
		decimal = parseInt(input, 2);
	} 
	
	else if (inputFormat === "Decimal") 
	{
		decimal = parseInt(input, 10);
	} 
	
	else if (inputFormat === "Hexadecimal") {
		decimal = parseInt(input, 16);
	} 
	
	//Output
	if (inputFormat==="Binary" && outputFormat === "Decimal") 
	{
		resultTextarea1.value = decimal;
		resultTextarea2.value = decimal.toString(16).toUpperCase();
		resultTextarea3.value = decimal.toString(2);
	} 
	
	else if (inputFormat==="Hexadecimal" && outputFormat === "Decimal") 
	{
		resultTextarea1.value = decimal;
		resultTextarea2.value = decimal.toString(2);
		resultTextarea3.value = decimal.toString(16).toUpperCase();
	} 
	
	else if (inputFormat==="Binary" && outputFormat === "Hexadecimal") 
	{
		resultTextarea1.value = decimal.toString(16).toUpperCase();
		resultTextarea2.value = decimal;
		resultTextarea3.value = decimal.toString(2);
	}

	else if (inputFormat==="Decimal" && outputFormat === "Hexadecimal") 
	{
		resultTextarea1.value = decimal.toString(16).toUpperCase();
		resultTextarea2.value = decimal.toString(2);
		resultTextarea3.value = decimal;
	}

	else if (inputFormat=== "Decimal" && outputFormat === "Binary") 
	{
		resultTextarea1.value = decimal.toString(2);
		resultTextarea2.value = decimal.toString(16).toUpperCase();
		resultTextarea3.value = decimal;
	}

	else if (inputFormat=== "Hexadecimal" && outputFormat === "Binary") 
	{
		resultTextarea1.value = decimal.toString(2);
		resultTextarea2.value = decimal;
		resultTextarea3.value = decimal.toString(16).toUpperCase();
	}
	else if (inputFormat=== "Binary" && outputFormat === "Binary") 
	{
		resultTextarea1.value = decimal.toString(2);
		resultTextarea2.value = decimal;
		resultTextarea3.value = decimal.toString(16).toUpperCase();
	}

	else if (inputFormat=== "Decimal" && outputFormat === "Decimal") 
	{
		resultTextarea1.value = decimal;
		resultTextarea2.value = decimal.toString(2);
		resultTextarea3.value = decimal.toString(16).toUpperCase();
	} 

	else if (inputFormat=== "Hexadecimal" && outputFormat === "Hexadecimal") 
	{
		resultTextarea1.value = decimal.toString(16).toUpperCase();
		resultTextarea2.value = decimal;
		resultTextarea3.value = decimal.toString(2);
	}
	
	else {
		resultTextarea1.value = "Invalid output format.";
		resultTextarea2.value = "Invalid output format.";
	}
}//end of convert function

//begin of swap function
function swap() 
{
	var input = document.getElementById("input");
	var output = document.getElementById("output");
	var temp = input.value;
	input.value = output.value;
	output.value = temp;
	change();
	reset();
}//end of swap function

//begin reset function
function reset() 
{
	document.getElementById("number").value = "";
	document.getElementById("resultTextarea1").value = "";
	document.getElementById("resultTextarea2").value = "";
	document.getElementById("resultTextarea3").value = "";
}//end of reset function
		
			



		