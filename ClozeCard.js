
// Creating node module that exports a constructor for basic falshcards
module.exports = ClozeCard;

// ClozeCard Function
function ClozeCard(text, cloze) {
	this.full = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, "...");
}

// Test the function
var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States." , "George Washington");

// Print Output
console.log(firstPresidentCloze.full);
console.log(firstPresidentCloze.cloze);
console.log(firstPresidentCloze.partial);

ClozeCard();

