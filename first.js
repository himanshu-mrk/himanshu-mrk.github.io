function printSupperstar(){
	var fname = document.getElementById('firstname').value;
	var lname = document.getElementById('lastname').value;
	console.log('Hello '+ fname +' '+ lname);
}

function mathsOp(){
	var fname = document.getElementById('firstname').value;
	var lname = document.getElementById('lastname').value;
	var add = parseInt(fname) + parseInt(lname);
	console.log('Addition = ' + add);
	
}

function del(){
	document.getElementById('firstname').value = "";
	document.getElementById('lastname').value = "";
	
}

function printsub(){
	var fname = document.getElementById('firstname').value;
	var lname = document.getElementById('lastname').value;
	var sub = fname-lname;
	console.log('Subtraction = ' + sub);
}

function printMultiply(){
	var fname = document.getElementById('firstname').value;
	var lname = document.getElementById('lastname').value;
	var mul = fname*lname;
	console.log('multiplication = ' + mul);
}

function printdivision(){
	var fname = document.getElementById('firstname').value;
	var lname = document.getElementById('lastname').value;
	var div = fname/lname;
	console.log('Division = ' + div);
}

