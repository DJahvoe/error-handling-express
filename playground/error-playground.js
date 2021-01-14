const sum = (a, b) => {
	if (a && b) {
		return a + b;
	}
	throw new Error('Invalid arguments');
};

// Error handling won't crashed App (important)

// Synchronous Code
try {
	console.log(sum(1));
} catch (error) {
	console.log(error);
	console.log('Error occured!');
}

console.log('This works!');

// Asynchronous Code
// use then().then().then().catch() chain
