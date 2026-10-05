window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script18 = function()
{
  var path = window.location.pathname;
var html5 = path.includes("html5");

var player = GetPlayer();

function findLMSAPI(win) {
	// look in this window
	if (win.hasOwnProperty("GetStudentID")) return win;

	// all done if no parent
	else if (win.parent == win) return null;

	// climb up to parent window & look there
	else return findLMSAPI(win.parent);
}

var lmsAPI = findLMSAPI(this); //finds the API for SCORM calls
var myName = lmsAPI.GetStudentName(); //gets the name of the student

//these two lines split the name into an array and then put it back together since SumTotal sends the data as Last, First
var array = myName.split(','); 
var newName = array[1]+ ' ' + array[0];

player.SetVar("newName", newName, newName); //sets the variable in Storyline to the name
}

};
