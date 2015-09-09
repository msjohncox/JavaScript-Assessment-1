//1. Given the following sentence change all of the letters lowercase letter i in reference to yourself to the uppercase I

var sentence = 'When i went to the mall i bought a pair of shoes.';

for(var i = 0; i < sentence.length; i++){
    var current = sentence[i];
    var next = sentence[i + 1];
    var prev = sentence[i - 1];
    
    if(current === 'i'){
        if(next === ' '){
            if(prev === ' '){
                sentence = sentence.replace(current, 'I');
           }
        }
    }
};
console.log(sentence.replace(current, 'I'));


//using replace method
sentence = sentence.replace(/ i /g, ' I ');//note use of space to keep from capitalizing any other occurrance of 'i', and to retain correct spacing. Also, remember to reassign sentence to its new, replaced value. 

//2. The history of JavaScript is interesting but how many times does the letter a appear? Find a way to count both upper and lower case
var jsHistory = 'JavaScript, not to be confused with Java, was created in 10 days in May 1995 by Brendan Eich, then working at Netscape and now of Mozilla. JavaScript was not always known as JavaScript: the original name was Mocha, a name chosen by Marc Andreessen, founder of Netscape. In September of 1995 the name was changed to LiveScript, then in December of the same year, upon receiving a trademark license from Sun, the name JavaScript was adopted. This was somewhat of a marketing move at the time, with Java being very popular around then.';

var aCount = 0;
for (i = 0; i < jsHistory.length; i++) {
    if (jsHistory[i] === 'a' || jsHistory[i] === 'A'){//finding all the As, big or small
        aCount++; //assigning those values to aCount and incrementing
    }
}
console.log("The letter 'A' appears" , aCount , "times in the history statement.");

//3. Given the following sentence: all-caps the word "scream" each time it appears in the sentence
var text = 'I scream, you scream, we all scream for icecream';
// a very clunky way to do it that almost works
for (var i = 0; i < text.length; i++) {
    var findS = text[i];
    var findC = text[i + 1];
    var findR = text[i + 2];
    var findE = text[i + 3];
    var findA = text[i + 4];
    var findM = text[i + 5];

    if (findS === 's') {
        if (findC === 'c') {
            if (findR === 'r') {
                if (findE === 'e'){
                    if (findA ==='a'){
                        if(findM ==='m');
                    }
                }
            }
        }
   }
}
console.log('Scream capitalized:', text.replace());

//using a loop, except it only does some
function moveUps() {
    for (var i = 0; i < text.length; i++); {
        if (text[i] === 's') {
        var newCt = text.toUpperCase();
        }
            return i;
    }
}
console.log('Scream capitalized:' , moveUps()); 
//the number of characters - I can't get it to replace anything.

//BEST WAY, with replace method
text = text.replace(/scream/g, "SCREAM");
console.log(text);