function f1(){
	var val = document.getElementById('t1').value;
	document.getElementById('s1').textContent = 'Hello ' + val;
}

function f2(){
	var txt = 'String: Apple';
	txt = txt + ' Banana';
	txt = txt + ' Organge';
	document.getElementById('s1').textContent = txt;
	
}

function f3(){
	var a = 1;
	a = a + 3;
	a = a + 1;
	a++;
	a = a + 2;
	a = a + ' is my lucky number';
	document.getElementById('s1').textContent = a;
}

function f4(){
	var b = document.getElementById('t1').value;
	var c = document.getElementById('t2').value;
	var a = 0;
	var st = '<table class="table table-dark"><tbody>';
	for(a=1; a<=c; a++){
		
		st = st +'<tr><td>'+ a +'</td><td>'+ ' x '+'</td><td>'+ b +'</td><td>'+' = '+'</td><td>'+(a*b)+'</td></tr>';
	
	}
	st = st + '</tbody></table>';
	document.getElementById('s1').innerHTML = st;
	//console.log(st);
}