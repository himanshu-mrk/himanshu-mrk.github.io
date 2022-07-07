function sortA(){
	var txt1 = document.getElementById('txt1').value;
	var txt2 = document.getElementById('txt2').value;
	console.log(txt1.length);
	console.log(txt2.length);
	
	if(txt2.length > txt1.length){
		document.getElementById('txt1').value = txt2;
		document.getElementById('txt2').value = txt1;
	}
	
}
function sortD(){
	var txt1 = document.getElementById('txt1').value;
	var txt2 = document.getElementById('txt2').value;

	if(txt1.length > txt2.length){
		document.getElementById('txt2').value = txt1;
		document.getElementById('txt1').value = txt2;
	}
}