// Question 1

// Write an application that satisfies the following:

// •          Small application

// •          Given a fully sorted array (ascending or descending), write a method to scramble the values

// e.g. (7, 13, 13, 18, 29, 33)

// •          Write the code with use-ability, debugging, and testing in mind.

const scramble = (array) => {
	var m = array.length,
		t,
		i;

	// While there are elements to scramble
	while (m) {
		// choose a remaining element
		i = Math.floor(Math.random() * m--);

		// then swap it with the current element
		t = array[m];
		array[m] = array[i];
		array[i] = t;
	}

	return array;
};
var array = [7, 13, 13, 18, 29, 33];
console.log(scramble(array));
