let FizzBuzz = (primeiro, segundo, callback) => {return callback(primeiro, segundo)};

function multiplo(primeiro, segundo){
    if ((primeiro%segundo == 0) && (segundo%primeiro ==0))
    {
        console.log("FizzBuzz");
    } else if (primeiro%segundo == 0){
        console.log("Fizz");
    } else if (segundo%primeiro ==0) {
        return console.log("Buzz");
    } else {
        for (let index = 0; index < 100; index++) {
            console.log(index);
        }
    }
}

FizzBuzz(99, 11, multiplo);
FizzBuzz(8, 8, multiplo);
FizzBuzz(3, 8, multiplo);
