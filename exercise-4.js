function is18(number, successCb, errorCb) {
    if (number > 18) {
        successCb();
    } else {
        errorCb();
    }
}

is18(
    18,
    function () {
        // success
        console.log("Its > 18");
    },
    function () {
        //error
        console.log("Its < 18");
    }
);

is18(
    19,
    function () {
        // success
        console.log("Legal age");
    },
    function () {
        //error
        console.log("Illegal");
    }
);