import * as firebase from 'firebase';

const config = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIREBASE_DATABSE_URL,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
  
firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').once('value')
// 	.then((snapshot) => {
// 		const expenses = [];

// 		snapshot.forEach((childSnapshot) => {
// 			expenses.push({
// 				id: childSnapshot.key,
// 				...childSnapshot.val()
// 			});
// 		});
// 		console.log(expenses);
// 	}).catch((error) => {
// 		console.log('Some error: ', error);
// 	})

// database.ref('expenses').on('value', (snapshot) => {
// 	const expenses = [];

// 	snapshot.forEach((childSnapshot) => {
// 		expenses.push({
// 			id: childSnapshot.key,
// 			...childSnapshot.val()
// 		});
// 	});
// 	console.log('Expenses changed: ', expenses);
// });

// setTimeout(() => {
// 	database.ref('expenses').push({
// 		description: '4th expense',
// 		note: 'This is fourth expense',
// 		amount: 4444,
// 		createdAt: 0		
// 	});
// }, 3500);

// database.ref('expenses').push({
// 	description: '1st expense',
// 	note: 'This is first expense',
// 	amount: 1234,
// 	createdAt: 0
// });

// database.ref('notes/-KzANZ_6f20A8936UOpE').update({
// 	body: 'Buy food'
// });

// database.ref('notes/-KzANZ_6f20A8936UOpE').remove();

// database.ref('notes').push({
// 	title: 'Course Topics',
// 	body: 'React Native'
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
// 	console.log(snapshot.val());
// }, (error) => {
// 	console.log('Error fetching data: ', error);
// });

// setTimeout(() => {
// 	database.ref('age').set(42);
// }, 3500);

// setTimeout(() => {
// 	database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
// 	database.ref('age').set(40);
// }, 10500);

// const onValueChange = database.ref().on('value', (snapshot) => {
// 	const data = snapshot.val();
// 	console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// }, (error) => {
// 	console.log('Something went wrong updating data: ', error);
// });

// setTimeout(() => {
// 	database.ref('job/company').set('Apple');
// }, 3500);

// database.ref('location/city').once('value')
// 	.then((snapshot) => {
// 		const val = snapshot.val();
// 		console.log(val);
// 	}).catch((error) => {
// 		console.log('error fetching data: ', error);
// 	});

// database.ref().set({
// 	name: 'Daniel Micaletti',
// 	age: 38,
// 	stressLevel: 6,
// 	job: {
// 		title: 'Software Developer',
// 		company: 'Apple'
// 	},
// 	location: {
// 		city: 'Phoenix',
// 		country: 'USA'
// 	}
// }).then(() => {
// 	console.log('data is saved');
// }).catch((error) => {
// 	console.log('This failed: ', error);
// });

// database.ref().update({
// 	stressLevel: 9,
// 	'job/company': 'Amazon',
// 	'location/city': 'Seattle'
// });

// database.ref('isSingle').remove()
// 	.then(() => {
// 		console.log('Removed item');
// 	}).catch((error) => {
// 		console.log('Did not remove item: ', error);
// 	});