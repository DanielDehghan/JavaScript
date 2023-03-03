function atLeastTwoCharacters(text){

    const letter = text.match(/[a-z]/gi) || [];

    return letter.length >= 2;

}

function absenceOfThreeConsecutiveCharacters(text){


    for(const character of text){

        // Array has the ability to get the things from the text
        //by filter we will only get the characters that are equal to character 
        // condition is in the peranthesis
        const occurrences = Array.from(text).filter(v => v == character).length;

        if(occurrences >= 3){
            return false;
        }
    

    }
     return true;
    
};

// Array of above functions
const checks =[atLeastTwoCharacters , absenceOfThreeConsecutiveCharacters];
const textInput = document.querySelector(".text-input");
const wordCountElement = document.querySelector(".word-count");
const letterCountElement = document.querySelector(".letter-count");
const spaceCountElement = document.querySelector(".space-count");




 let clearOut = () => {
  const splitted = textInput.value.trim().split(/[\s-]/);
  const letterCount = (textInput.value.match(/[a-z]/gi) || []).length;
  const spaceCount = (textInput.value.match(/\s+/g) || []).length;
  let wordCount = 0;

  // Chekcs is the array of functions 
 for (const text of splitted) {
    for (const check of checks) {
      if (!check(text)) {
        continue ;
      }
    }

    wordCount++;
  }

  wordCountElement.textContent = wordCount;
  letterCountElement.textContent = letterCount;
  spaceCountElement.textContent = spaceCount;

};

textInput.addEventListener('input', clearOut)

