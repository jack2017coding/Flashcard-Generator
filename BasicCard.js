
// Creating node module that exports a constructor for basic falshcards
module.exports = BasicCard();

// BasicCard Function
function BasicCard(front, back){
    this.front = front;
    this.back = back;
}
var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");

// Print Outputs
console.log(firstPresident.front); 
console.log(firstPresident.back);

BasicCard();