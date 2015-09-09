//SUCCESS! 1. provide the sum of the following variables - pretty easy
var num10 = 10;
var string8 = '8';
var one = 1;
string8 = Number(string8);
console.log(num10 + one + string8)


//2. write a loop that will log only numbers divisible by 3 between 20 - 100
var threeGoesIn = [];
for (i = 20; i <= 100; i++) {
    if ([i] % 3 === 0) {
        threeGoesIn.push([i]);
    }
}
/* PAST EFFORTS:
var allNums = [];//all numbers in the range
var okbyThree = 0;//numbers divisible by 3
var lowEnd = 20;//bottom of the range
var highEnd = 120;//top of the range
        
function getRange() {//creating a custom function to list all integers between 20 and 120
    while(lowEnd <= highEnd){//loop conditions, using variables with defined values
        allNums.push(lowEnd++);//listing the numbers in the range and pushing them into the allNums variable
    }
    return allNums;//passing allNums value to the getRange function
}
console.log(getRange()); //printing to screen

//2. ANOTHER EFFORT:
        var allNums = [];//all numbers in the range
        var okbyThree = 0;//numbers divisible by 3
        var lowEnd = 20;
        var highEnd = 120;
        var passNum = getRange();
        
        function getRange() {//creating a custom function to list all integers between 20 and 120
            while(lowEnd <= highEnd){//loop conditions, using variables with defined values
            allNums.push(lowEnd++);//listing the numbers in the range and pushing them into the allNums variable
}
            return allNums;//passing allNums value to the getRange function
        }
        console.log(getRange()); //printing to screen
        
        var okbyThree = Number.isInt();
       if (function Number.isInt(n) getRange() % 3) ===  {
         return getRange();
}         

        console.log(isInteger(i)) */


//SUCCESS! 3. find the class average given the following test scores
        //I start by adding the values in the array
            var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98]; 
            var scoresSum = 0;
            var scoresAverage = 0;
            
            for (var i = 0; i < scores.length; i++) {
                scoresSum += scores[i];//adding all the scores together
            }
            console.log(scoresSum);
            
            function scoreDivide() {//creating a custom function to divide the sum of the scores by the number of array elements
                scoresAverage = scoresSum/scores.length;
                return scoresAverage;//creating a variable to pass the function value back to the function
            }
            console.log(scoreDivide());