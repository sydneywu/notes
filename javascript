RegExp 						// search a strings
	var str = "The best things in life are free";
	var patt = new RegExp('e');
	var res = patt.test(str);
	console.log(res);
		=> True

Map 						// make an operation to each item in an array
	var numbers = [1, 4, 9];
	var roots = numbers.map(Math.sqrt);
	console.log(roots);
		=> [1,2,3]

Split						// break down a string into array
	var str = "How are you doing today?";
	var res = str.split(" ");
	console.log(res);
		=> ["How", "are", "you", "doing", "today?"]

Reduce						// reduce array to a single value
	[0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, currentIndex, array){return previousValue + currentValue;});
		=> 10

Functions
	function declaration
		function bar() {return 3;}
		bar()
			=>3
	function expression 				//recommended
		var a = function() {return 3;}
		a();
			=>3
	self invoking function expression
		(function sayHello() {
    		return(3);
		})();

