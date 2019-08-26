function wakeDog(dogName, dogBreed) {
  let call = `Wake ${dogName} the ${dogBreed}`
  console.log(call)
  return call
}
function leashDog(dogName, dogBreed) {
  let call = `Leash ${dogName} the ${dogBreed}`
  console.log(call)
  return call
}
function walkToPark(dogName, dogBreed) {
  let call = `Walk to the park with ${dogName} the ${dogBreed}`
  console.log(call)
  return call
}
function throwFrisbee(dogName, dogBreed) {
  let call = `Throw the frisbee for ${dogName} the ${dogBreed}`
  console.log(call)
  return call
}
function walkHome(dogName, dogBreed) {
  let call = `Walk home with ${dogName} the ${dogBreed}`
  console.log(call)
  return call
}
function unleashDog(dogName, dogBreed) {
  let call = `Unleash ${dogName} the ${dogBreed}`
  console.log(call)
  return call
}


let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(array) {
    let dogstuff = []
    for (let i = 0 ;i < array.length; i++) {
      dogstuff.push(array[i])
    }
    return dogstuff
}
