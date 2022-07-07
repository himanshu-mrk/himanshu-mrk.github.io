function calculate(){
	var num1 = document.getElementById('txt1').value;
	var area = 3.14*num1*num1;
	var peri = 2*3.14*num1;
	document.getElementById('txt2').value = area;
	document.getElementById('txt3').value = peri;
	
	
}