var N = 5;
var array = [];

for (var i = 0; i <= N; i++) {
    array.push(i);
}

function sumOfArray(arrayOfNumbers, callback) {
    var sum = 0;
    console.log("10. Inside sum of array");
    setTimeout(function () {
        console.log("12 Inside set timeout");
        arrayOfNumbers.forEach(function (element) {
            sum += element
        });

        callback(sum);

    }, 1000);
    console.log("20 returning");
    return sum;
}

var output = sumOfArray(
    array, // 1 parameter
    function (sum) {
        console.log(25, sum)
    } // 2 parameter
);


console.log(28, output);


// function             : group of statements
// callbacks            : function passed on to another function
// anonymous functions  : function that don't have a name
// callbacks can be anonymous

// Named function

function sayHello(){

}

// Example of callback

function callbackExample(cb){

}

callbackExample(function () {

});


// Example of named callback

function callbackExample(cb){

}

callbackExample(function abc() {

});


// another way for named callback

function callback(){
    console.log("I'm callback");
}

function callbackExample(cb){

}

callbackExample(callback);



















