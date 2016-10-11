var N = 5;
var sum = 0;
var a = [];

var element = 4;
var index;

for(var i = 0; i<=N; i++ ){
    a.push(i);
}

// Way 1 - one liner
//write code to find index of element

index = a.indexOf(element);


//way 02

a.forEach(function (item, i) {
    if(element == item){
        index = i;
    }
});

console.log(index);