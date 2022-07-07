function calcu(){
	var num1 = document.getElementById('txt1').value;
	var area = num1*num1;
	var peri = 4*num1;
	document.getElementById('txt2').value = area;
	document.getElementById('txt3').value = peri;
}