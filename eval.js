/**
 * create some vars:
 * 1. a number
 * 2. a string
 * 3. a string with a number in it
 * 4. an array
 * 5. an array with anything in it
 * 6. a function that doesn't have to do anything
 * 7. an object with a few props on it
 */

var one = 1
var family = 'Moss Family'
var numberString = '1'
var array = []
var array = [3, 'fight', 6, 8, 'cat']
var uselessFunction = function () { }
var object = {
  name: 'object',
  color: 'blue',
  creatorName: 'jaja'
}



/**
 * Functions
 */


/**
 * 1. make a function that takes 2 numbers
 *  and returns the sum if the numbers
 */

// write your code here
var add = function (number1, number2) {
  return number1 + number2
}

add(8, 9)



/**
 * 2. make function that takes a name and returns a sentence tha uses that name
 */


// write your code here
var sayName = function (name) {
  return 'My name is' + " " + name + " " + 'and I like to code!'
}

sayName('jaja')




/**
 * arrays
 */


/**
 * 1. make an array, literally,  with no items in it,
 *  but add any for items in it after you have made it
 */


// write your code here
var array = []
array.push(1, 2, 3, 4, 45)



/**
 * 2. make a function that loops through all numbers 1 - 500
 *  and then add all numbers divisible by 3 into an array
 *  and then returns the array
 */


// write your code here
// var array1 = []
var loop = function () {
  var results = []
  for (var i = 0; i <= 500; i++) {
    if (i % 3 === 0) {
      results.push(i)
    } 
  }
  return results
}


/**
 * 3. make a function that takes an array and loops through
 * it backwards and logs out every element in the array
 */

// write your code here
var reverse = function (array) {
  for (var i = array.length - 1; i >= 0; i--) {
    console.log(array[i])
  }
}


reverse()
