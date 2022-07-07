function cylinder(){
	var num1 = document.getElementById('txt1').value;
	var num2 = document.getElementById('txt4').value;
	var area = 2*3.14*num1*num2;
	var vol = 3.14*num1*num1*num2;
	
	document.getElementById('txt2').value = area;
	document.getElementById('txt3').value = vol;
}