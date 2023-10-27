console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async () => {
    const promiseWifeBrigingTicks = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000);
    });

    const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'));
    const addButter = new Promise((resolve, reject) => resolve('butter'));
    const getColdDrink = new Promise((resolve, reject) => resolve('cold drink'))
    let ticket = await promiseWifeBrigingTicks;
    console.log(`wife: i have the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no, i am hungry');

    let popcorn = await getPopcorn;

    console.log(`husband: i got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: I need some butter on my popcorn');

    let butter = await addButter;

    console.log(`husband: i got some ${butter}`);
    console.log('husband: let\'s go now')
    console.log('wife: i want some cold drinks')

    let coldDrink = await getColdDrink
    console.log(`husband: here is your ${coldDrink}`)
    console.log('husband: let\'s go now')
    return ticket;
};

preMovie().then((m) => console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');
