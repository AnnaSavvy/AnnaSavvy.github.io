// Anna Savitskaia
// Georgian ID: 200535874
// Program: Computer Programming (Co-op) (CMPG)
// Assignment 1 | COMP1073 Client-Side JavaScript


/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var story = "Your story will appear here...";
var textToSpeak = 'Speak out loud';

var actorBtn = document.querySelector('#actorBtn');
var actionBtn = document.querySelector('#actionBtn');
var adjectiveBtn = document.querySelector('#adjectiveBtn');
var objectBtn = document.querySelector('#objectBtn');
var placeBtn = document.querySelector('#placeBtn');
var speakBtn = document.querySelector('#speakBtn');

var generateBtn = document.querySelector('#generateBtn');
var resetBtn = document.querySelector('#resetBtn');

// Story elements arrays
var actor = ["Cat", "Dog", "Bird", "Fox", "Mouse"];
var action = ["Ate", "Kissed", "Hated", "Liked", "Kicked"];
var adjective = ["Funny", "Goofy", "Scary", "Happy", "Sad", "Nasty"];
var object = ["Goat", "Monkey", "Frog", "Worm", "Bug", "Pig", "Goose"];
var place = ["in Dirt.", "on a Hill.", "in my Salad.", "in the Trash.", "under the Bridge.", "on the Roof."];


/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

// Function to get a random element from an array
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to update the story
function updateStory() {
  document.getElementById("story").innerText = story;
  textToSpeak = story; // Update the text to speak
}

// Function to generate random story
function generateStory() {
  story = `${getRandomElement(actor)} ${getRandomElement(action)} ${getRandomElement(adjective)} ${getRandomElement(object)} ${getRandomElement(place)}`;
  updateStory();
}

// Function to reset the story
function resetStory() {
  story = "Your story will appear here...";
  updateStory();
  textToSpeak = ''; // Reset the text to speak
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakBtn.onclick = function() {
	speakNow(textToSpeak);
}

generateBtn.onclick = generateStory;
resetBtn.onclick = resetStory;

actorBtn.onclick = function() {
	story = getRandomElement(actor) + " ";
	updateStory();
}

actionBtn.onclick = function() {
	story += getRandomElement(action) + " ";
	updateStory();
}

adjectiveBtn.onclick = function() {
	story += getRandomElement(adjective) + " ";
	updateStory();
}

objectBtn.onclick = function() {
	story += getRandomElement(object) + " ";
	updateStory();
}

placeBtn.onclick = function() {
	story += getRandomElement(place) + " ";
	updateStory();
}
