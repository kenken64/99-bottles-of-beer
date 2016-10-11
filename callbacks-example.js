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

var output = sumOfArray(array, function (sum) {
    console.log(25,sum)
});

console.log(28,output);



// function: group of statements 
// callbacks: functions passes on to another function
// anonymous functions: function that don't have a name
// callbacks can be anonymous