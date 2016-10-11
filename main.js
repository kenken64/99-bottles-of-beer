var START = 99;
var END = 0;

for (var i = START; i >= END; i--) {

    if (i > 0) {
        console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.");
        if (i - 1 > 0) {
            console.log("Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall.\n")
        } else {
            console.log("Take one down and pass it around, no more bottles of beer on the wall.\n")
        }
    } else {
        console.log("No more bottles of beer on the wall, no more bottles of beer.");
        console.log("Go to the store and buy some more, " + START + " bottles of beer on the wall.\n")
    }
}

