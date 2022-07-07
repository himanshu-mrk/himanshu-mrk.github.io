function comp(){
	var num1 = document.getElementById('id1');
	var num2 = document.getElementById('id2');
	var num3 = document.getElementById('id3');
	
	pr = parseFloat(num1.value);
	ra = parseFloat(num2.value);
	num = parseFloat(num3.value);
	amt = pr*(Math.pow((1+ra/100),num));
	
	var ci = amt-pr;
	
	document.getElementById('id4').value = amt;
	document.getElementById('id5').value = ci;
}

