function timesTable(x){
	

		for(i=1;i<11;i++){
			if (x){
				for (j =1;j<11;j++) {
					console.log(j*i);
				}
			}
			else{
				console.log(9* i);
			}

		}

}
function grade(x){
	var n = Math.floor((x/10));
	if(n<5){ 
		console.log("maybe think about a easier major")
		return;	
		}
	switch(n){
		case 9: console.log("you got the A");
		break;
		case 8: console.log("you got the B");
		break;
		case 7: console.log("you got the C");
		break;
		case 6: console.log("you got the D");
		break;
		case 5: console.log("you got the F");
		break;
	}
}
function tellFortune(x,y,z,n){
	console.log("~You will be in more debt than you are in now~");
	// console.log("You will be a " + x + " in " + y +" , and married to "+Z+" with N kids.");
}

function salty(arry){

	var rS=0;
	var rB=0;
	var oArry=[];
	for(i=0;i<arry.length;i++){
		for(j=0;j<arry.length;j++){
			if(arry[i] <= arry[j]){
				oArry.push(arry[i]);
				break;
			}
		}
	}

	console.log(oArry[1] + " " + oArry[oArry.length-2]);
	return oArry;
}
function count(c, str){

	var count = 0;
	var pos = str.indexOf(c);

	while (pos !== -1) {
  	count++;
  	pos = str.indexOf( c , pos + 1);
}
	
	console.log(count);
}
function longest(arry){
	var longest="";
	for(i=0;i<arry;i++){
		if(arry[i] > longest){
			longest=arry[i];
		}
	}
	console.log(longest)

}

function numReverse(x){
	var sT = ""+x;
	var aT = [];
	aT=st.split('');
	aT.reverse();
	aT.join();
	console.log(aT.toString());
}
