var soundLeft = 
[{"button": "title", "gifLink": "Link", "soundLink": "SoundURL"}, {"button": "title", "gifLink": "Link", "soundLink": "SoundURL"},{"button": "title", "gifLink": "Link", "soundLink": "SoundURL"},{"button": "title", "gifLink": "Link", "soundLink": "SoundURL"}];
var soundRight = [{"button": "title", "gifLink": "Link", "soundLink": "SoundURL"},{"button": "title", "gifLink": "Link", "soundLink": "SoundURL"},{"button": "title", "gifLink": "Link", "soundLink": "SoundURL"},{"button": "title", "gifLink": "Link", "soundLink": "SoundURL"}];
var gifChosen;
var audioChosen;
// This function creates buttons
function placeButtonsLeft (){
	for (var i = 0; i < soundLeft.length;i++) {
		$("#soundLeft").append("<button class='btn btn-danger spaceGood' data-gif='" + soundLeft[i].gifLink + "' data-sound='" + soundLeft[i].soundLink + "'>" + soundLeft[i].button + "</button");
	};
};
function placeButtonsRight (){
	for (var i = 0; i < soundRight.length;i++) {
		$("#soundRight").append("<button class='btn btn-danger spaceGood' data-gif='" + soundRight[i].gifLink + "' data-sound='" + soundRight[i].soundLink + "'>" + soundRight[i].button + "</button");
	};
};
$(document).ready(function(){
placeButtonsLeft();
placeButtonsRight();
$(".spaceGood").click(function () {
gifChosen = $(this).attr("data-gif");
audioChosen = $(this).attr("data-sound");
$("#mainImage").attr("src", gifChosen);
$("#mainAudio").attr("src", audioChosen);
console.log(gifChosen);
console.log(audioChosen);
});
	});