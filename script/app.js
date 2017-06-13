var soundsLeft = ["button1", "button2", "button3", "button4"];
var soundsRight = ["button5", "button6", "button7", "button8"];

// This function creates buttons
function placeButtons (x){
	for (var i = 0; i < x.length;i++) {
		$("#" + x).append("<button class='btn btn-danger'>" + x[i] + "</button");
		console.log(x[i]);
		console.log($("#" + x));
	};
};
$(document).ready(function(){
placeButtons(soundsLeft);
placeButtons(soundsRight);
	});