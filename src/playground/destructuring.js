
// const person = {
// 	name: 'Daniel',
// 	age: 38,
// 	location: {
// 		city: 'Phoenix',
// 		temp: 78
// 	}
// };

// const name = person.name;
// const age = person.age;
// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;

// if(city && temperature){
// 	console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
// 	title: 'Ego is the Enemy',
// 	author: 'Ryan Holiday',
// 	publisher: {
// 		name: 'Penguin'
// 	}
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);


const address = ['123 Main St', 'Phoenix', 'AZ', '85310'];

const [, city, state] = address;

console.log(`You are in ${city}, ${state}.`);

const item  = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , costMedium] = item;

console.log(`A medium ${itemName} costs ${costMedium}`);


