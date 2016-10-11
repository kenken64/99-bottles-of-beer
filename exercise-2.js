var N = 5;
var sum = 0;
var a = [];

for(var i = 0; i<=N; i++ ){
    a.push(i);
}

a.forEach(function( element){
    sum+=element
});

console.log(sum);
