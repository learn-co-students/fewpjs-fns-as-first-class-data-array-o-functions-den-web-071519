function wakeDog(dogName, dogBreed) {
    let concatString = (`Wake ${dogName} the ${dogBreed}`);
    console.log(concatString)
    return concatString
}

function leashDog(dogName, dogBreed) {
    let concatString = (`Leash ${dogName} the ${dogBreed}`);
    console.log(concatString)
    return concatString
}

function walkToPark(dogName, dogBreed) {
    let concatString = (`Walk to the park with ${dogName} the ${dogBreed}`);
    console.log(concatString)
    return concatString
}

function throwFrisbee(dogName, dogBreed) {
    let concatString = (`Throw the frisbee for ${dogName} the ${dogBreed}`);
    console.log(concatString)
    return concatString
}

function walkHome(dogName, dogBreed) {
    let concatString = (`Walk home with ${dogName} the ${dogBreed}`);
    console.log(concatString)
    return concatString
}

function unleashDog(dogName, dogBreed) {
    let concatString = (`Unleash ${dogName} the ${dogBreed}`);
    console.log(concatString)
    return concatString
}

const routine = [wakeDog,
                leashDog, 
                walkToPark, 
                throwFrisbee, 
                walkHome, 
                unleashDog];

function exerciseDog(dogName, dogBreed) {
    return routine.map(fn => fn(dogName, dogBreed));
}