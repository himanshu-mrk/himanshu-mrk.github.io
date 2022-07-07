function rectangle(){
	var num1 = document.getElementById('txt1').value;
	var num2 = document.getElementById('txt4').value;
	
	var area = num1*num2;
	var peri = 2*(parseInt(num1)+parseInt(num2));
	document.getElementById('txt2').value = area;
	document.getElementById('txt3').value = peri;
}