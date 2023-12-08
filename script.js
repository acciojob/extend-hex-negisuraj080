const extendHex = (shortHex) => {
  // write your code here
// 	let i = shortHex.length - 3, isCapital = false;
// 	let output = "#";
// 	while (i < shortHex.length) {
// 		let asciiCode = shortHex[i].charCodeAt(0);
// 		if(asciiCode >= 65 && asciiCode <= 90){
// 			isCapital = true;
// 		}
// 		output += shortHex[i] + shortHex[i];
// 		i++
// 	}
// 	return isCapital ? output.toUpperCase() : output;
// };



	let hexcode = "#";
	let n = shortHex.length;
	for(let i = 0; i < n;i++){
		if(shortHex[i] != "#"){
			hexcode += shortHex[i] + shortHex[i];
		}
		return hexcode;
	}

//Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
