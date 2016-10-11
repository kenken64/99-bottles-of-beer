//immediate functions example

(function () {
    console.log("I'm immediate function");
})();


for (var i = 0; i <= 5; i++) {
    console.log("trying to Register function with", i);

    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, 10);
    })(i);


}
console.log("Fini", i);

