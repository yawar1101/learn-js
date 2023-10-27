console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringingTicks = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
});

const getPopcorn = promiseWifeBringingTicks.then((t) => {
    console.log('husband: We should go in');
    console.log('wife: No, I am hungry');
    return new Promise((resolve, reject) => resolve(`${t} popcorn`));
});

const getButter = getPopcorn.then((t) => {
    console.log('husband: We should go in');
    console.log('wife: No, I am hungry');
    return new Promise((resolve, reject) => resolve(`${t} butter`));
});

const getColdDrinks = getButter.then((t) => {
    console.log('husband: I got some butter');
    console.log('husband: Let\'s go now');
    console.log('wife: I want some cold drinks');
    return new Promise((resolve, reject) => resolve(`${t} cold drinks`));
});

getColdDrinks.then((t) => console.log(t));


console.log('person4: shows ticket');
console.log('person5: shows ticket');