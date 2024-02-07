const statement = "Happy Birthday to you! Hehe";
let numOfVowels = 0;
let numOfCons = 0;

console.log(statement.length);

for (let i = 0; i < statement.length; i++) {
  let currentLetter = statement[i].toLowerCase();

  if (currentLetter === " " || currentLetter === "!") {
    continue;
  } else if (
    currentLetter === "a" ||
    currentLetter === "e" ||
    currentLetter === "i" ||
    currentLetter === "o" ||
    currentLetter === "u"
  ) {
    numOfVowels++;
  } else {
    numOfCons++;
  }
}

console.log(`num of vowels in the statement is: ${numOfVowels}`);
console.log(`num of consonants in the statement is: ${numOfCons}`);
