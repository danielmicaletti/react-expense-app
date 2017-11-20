const promise = new Promise((resolve, reject) => {
	setTimeout(() => { 
		resolve({
			name: 'Daniel',
			age: 38
		});
		reject('something went wrong');
	}, 5000);
});

console.log('before');

promise.then((data) => {
	console.log('test 1 ', data);
	return new Promise((resolve, reject) => {
		setTimeout(() => { 
			resolve('another promise');
		}, 5000);
	});
}).then((str) => {
	console.log('does this run', str);
}).catch((error) => {
	console.log('error: ', error);
});

console.log('after');