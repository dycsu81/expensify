// const person = {
//     name: 'David',
//     age: 36,
//     location: {
//         city: 'Taipei',
//         temp: 40
//     }
// };

// //set default
// const {name: firstname = 'Anonymous', age} = person;

// console.log(`${firstname} is ${age}.`);

// //assign temp to temperature
// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`${name} is in ${city}. Currently ${temperature} degrees.`);
// }

// const book = {
//     title: 'Ego is the enemy',
//     auther: 'Ryan Holiday',
//     publisher: {
//         //name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);


const address = ['12345 Sesame Street', 'Vancouver', 'BC', 'V5Y2X1'];

console.log(`You are in ${address[1]} ${address[2]}.`);

const [street, city, state, zip] = address;

console.log(`You are in ${city} ${state}.`);

const emptyAddress = [];

const [, city2, state2 = 'default'] = emptyAddress;

console.log(`You are in ${city2} ${state2}.`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [name, , price] = item;
console.log(`A medium ${name} costs ${price}`);
