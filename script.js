// Global Variables
var guesses=10;
var word="";
var guessedLetters=[];
var fruitWords=["banana", "mango", "apple"];
var animalWords=["lion", "tiger", "whale"];
var scienceWords=["biology", "explosion", "chemistry"];
var holidayWords=["christmas", "hanukkah", "halloween"];
var schoolWords=["test", "homework", "classroom"];
var wordDisplayed="";
var alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function resetGuessesSelect() {
    //empty options
    document.getElementById("guess").innerHTML ="";
    //write new options
    var result= "";
    result+="<option disabled selected value> -- select an option -- </option>";
    for (var i=0;i<alphabet.length;i++){
        result += "<option value=" + alphabet[i] + ">" + alphabet[i] + "</option>"
    }
    //set new options into page
    document.getElementById("guess").innerHTML = result;
}

function startGame(){
    resetGuessesSelect();
    //reset guessed letters
    guessedLetters=[];
    //reset number of guesses back to 10
    var addedGuesses=10-guesses;
    guesses+=addedGuesses;
    //select random word from chosen category
    var category=document.getElementById("category").value;
    if (category=="fruit"){
        var randomWord=fruitWords[Math.floor(Math.random() * fruitWords.length)];
    }else if(category=="animals"){
        var randomWord=animalWords[Math.floor(Math.random() * animalWords.length)];
    }else if(category=="science"){
        var randomWord=scienceWords[Math.floor(Math.random() * scienceWords.length)];
    }else if(category=="holidays"){
        var randomWord=holidayWords[Math.floor(Math.random() * holidayWords.length)];
    }else if(category=="school"){
        var randomWord=schoolWords[Math.floor(Math.random() * schoolWords.length)];
    }
    word=randomWord;
    console.log(word);
    printWord();
}

function printWord(){
    document.getElementById("output4").innerHTML=guesses;
    //pull guess from chosen letter in select box and add to array of guessed letters
    var guess=document.getElementById("guess").value;
    guessedLetters+=guess + " ";
    document.getElementById("output3").innerHTML=guessedLetters;
    //show correct guessed letters in correct place and an underscore for every letter not guessed
    wordDisplayed ="";
    for (var i=0; i<word.length; i++){
        if (guessedLetters.indexOf(word[i])>-1){
            wordDisplayed+=word[i];
        }else{
            wordDisplayed+="_ ";
        }
    }
    document.getElementById("output").innerHTML=wordDisplayed;
    deleteGuess();
    handleGuess();
}

//remove guessed options from select box
function deleteGuess(){
    var selectedIndex=document.getElementById("guess").selectedIndex;
    var box= document.getElementById("guess");
    box.remove(selectedIndex);
}

function handleGuess(){
    //take away 1 guess for each letter guessed
    guesses--;
    //win/lose routine
    if (guesses>=0 && wordDisplayed.indexOf("_ ")==-1){
        document.getElementById("output2").innerHTML="You Won:) Choose a category to start a new game!";
    }else if (guesses<0 && wordDisplayed.indexOf("_ ")>-1){
        document.getElementById("output2").innerHTML="You Lost :( Choose a category to start a new game!";
    }else{
        document.getElementById("output2").innerHTML="Guess Another Letter!"
    }
}