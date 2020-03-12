'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;



/** 
 *  identity:
 * takes a value and returns it unchanged.
 * 
 * @param {any data type is the parameter} value (actual parameter name): can  be any data type or value.
 * (need @param for each parameter)
 * 
 * @return {any data type}: (description for return value) Will be the same value as the input value.
 * 
 */
 
 
function identity(value){
     return value;}
    
    
 module.exports.identity = identity;
 
 
/**
 * 
 * typeOf:
 * takes a value and returns a string that is the type of that value.
 * 
 * @param {any data type} value: can be any value
 * 
 * @return {string}: will return a string stating what the type of the value is
 * 
 **/
 
 
function typeOf(value){
    
    
     if (typeof value === "number"){
        return "number";}
        
  else if (typeof value === "string"){
        return "string";}
   
    else if (Array.isArray(value)) {
         return "array";}
  
    else if (typeof value === "undefined"){ 
        return "undefined";}

    else if (typeof value === "boolean"){
        return "boolean";}
    
    else if (value === null){
      return "null";}
    
    else if (typeof value === "function"){
        return "function";}
    
    else if (Object.prototype.toString.call(value) === '[object Date]'){
        return "date";}

else if (typeof value === 'object'){
     if (Array.isArray(value) || value === null || 
     Object.prototype.toString.call(value) === '[object Date]')
     {false}
     else  {return "object"}
    }
}
 
  module.exports.typeOf = typeOf;
 
/**
 * 
 * first:
 * designed to return first number of items in an array via given number.  our given number tells us what elements we want to take from 
 * the array
 * 
 * @param {a literal array} array: a array literal, that does or does not contain elements
 * @param {a numerical value} num (number): a number/ numerical value
 * 
 * @return {array or element/value}: will return a blank array if it is not an array or the given number is negative,
 * will return an array of all the elements if the number if larger than the array, 
 * will return the first element of the array if no number is given or the argument is not a number,
 * will return the first number of items from the array via the given number. the given number tells us how many
 * of the elements we want starting at the zero index.
 * 
 * */
 
 function first(array, num){
    if (!Array.isArray(array)){
        return [];
    } else if (num > array.length){
        return array;
    } else if (num <= 0){
        return [];
    }
    else if (typeof num === "undefined" || isNaN(num)){
        return array[0];
    }  
    else if (num <= array.length){
        return array.slice(0, num);
    }
}
 
 module.exports.first = first;
 
 
 /**
  * 
  * last:
  * designed to return the last element or the last number items in an array via the given number
  * 
  * @param {literal array} array: a literal array with elements
  * @param {a numerical value (a number)} num: a number
  * 
  * @return {literal array, element/value}: if not an array it will return an empty array, 
  * will return the last element in array if no number is given or if it is not a number, 
  * will return last number of items in array specified by number parameter, or 
  * will return the array with all the elements if the number is larger than the array
  * 
  * */
 
 function last(array, num){
    if (!Array.isArray(array) || num < 0){
        return [];
    } else if  (num === undefined || isNaN(num)){
        return array[array.length - 1];
    } else if (num > array.length){
        return array;
    }
    return array.slice(-num);
}
 
  module.exports.last = last;
  
  /**
   * indexOf:
   * will search through an array and the first time it finds the given value inside that array, it will return a cooresponding index.
   * 
   * @param {a literal array} array: a literal array with elements
   * @param {any data type} value: any data type
   * 
   * @return{number}: will return the index position of the value on the first occurance if it has matching an element 
   * inside the array. but if it is not in the array it will return -1
   * 
   * */

function indexOf(array, value){
    
    const callback = (element) => element === value;
  return array.findIndex(callback);
}   
 
  module.exports.indexOf = indexOf;

/**
 * contains:
 * will check to see if an array has a value. uses a ternary operator
 * 
 * @param {literal array} array: a literal array
 * @param {any data type} value: any data type
 * 
 * @return {boolean}: returns true or false based off if the array contains a given value
 * */
 
 function contains(array, value){
    
    return array.includes(value) ? true : false;
    
}
    //other working answer
    // let result = false;
    //  for (var i = 0; i < array.length; i++){
    // result = array[i] === value ? true : result;
    //  }
    //  return result;
    // };
    
 module.exports.contains = contains;
 
/**
 * unique:
 * removes duplicate elements from an array
 * uses indexOf()
 * 
 * @param {literal array} array: a literal array
 * 
 * @return {literal array}: returns a new array with the dupliicate elements removed.
 * 
 * */
 
 function unique(array){
    
 let unique = [...new Set(array)];

 let newarr = [array.indexOf(array)];
if (newarr === -1){
return unique;
}
return unique;
    
}
  module.exports.unique = unique;
  
  
 /**
  * filter:
  * its a function that filters through an array and adds elements that passed as true to a new array
  * as long as it has the passing arguments of element, index, and array
  * 
  * @param {literal array} array: a literal array with elements
  * @param {function} func: a function that filters through the elements
  * 
  * @return {array}: returns an array filled with elements that came back true after being passed through the function.
  *  //note: use filter to filter through users || names
  * */
  
 function filter(array, func){
    let result =[];
     for(var i = 0; i < array.length; i++){
          if (func(array[i], i, array)){
                  //element, index, array
             result.push(array[i]);
               }
         
     }
           return result;
           
}
  
    module.exports.filter = filter;




/**
 * 
 * reject:
 *  its a function that filters through an array and adds elements that passed as false to a new array
 * as long as it has the passing arguments of the element, index, and array. 
 * 
 * @param {literal array} array: a literal array
 * @param {function} func: the function to be applied to each value in the array
 * 
 * @return {array}: returns a new array of elements that returned false from the function
 * 
 * */
   
   function reject(array, func){
    
  
      let newarr =[];
     for(var i = 0; i < array.length; i++){
         
          if (!filter(array, func) === func(array[i], i, array)){
                  //element, index, array
                  func(array[i], i, array);
             newarr.push(array[i]);
              }
         
     }
          return newarr;
           
}
   
   
   
 module.exports.reject = reject;


  /**
   * 
   * partition:
   * a function that sorts true and false values in separate arrays, then adds those 2 separate arrays into one array.
   * boolean values are determined by if it has the passing arguments element, index and array
   * 
   * @param {literal array} array: a literal array
   * @param {function} func: the function to be applied to each value in the array
   * 
   * @return {array}: returns an array consisting of 2 arrays.
   * */
   
   
   function partition(array, func){
    
    let truthy = [];
    let falsey = [];
    let botharr = [];
    
     for(var i = 0; i < array.length; i++){
          if (func(array[i], i, array)){
              truthy.push(array[i]);
              
          }
          else {falsey.push(array[i]);
          }
         
     } botharr.push(truthy);
     botharr.push(falsey);
          
     return botharr ;
}
   
   
   
   module.exports.partition = partition;
  
 
  
  
  /**
   * 
   * map:
   * calls a function for each element in the collection, saves the new values and returns it in an array.
   * 
   * @param {array or object} collection: an array or object
   * @param {function} action: an action to carry out
   * 
   * @return {array}: returns new effected array 
   * //note: works on each element, use it when your affecting each element
  **/
  
  function map(collection, action){
  
   let newarr = [];
 


            each(collection, function(element, index, collection){
                newarr.push(action(element, index, collection));
            });
        

    
    return newarr;
}
  
  
  
  module.exports.map = map;
  
  
  
  
  
  
  /**
   * 
   * pluck:
   * takes the property from each object inside the array and returns it in a new array.
   * 
   * @param {array of objects} array: aliteral array consisting of objects.
   * @param {a key of the object} property: a keys' value.
   * 
   * @return {array}: returns an array consisiting of the values of properties from the array
   * 
   * */
   
   function pluck(array, property){
    
    let newarr = map(array, function(element, index, array){
       return element[property];
        
    });
    
    
    return newarr;
    
}
   

   module.exports.pluck = pluck;
  





  
/**  
 * 
 * every:
 * checks every elemnt inside the collection and returns true if everything is true. If there is one false, it will return false.
 * if the function is not provided, it will return true if every element is truthy, otherwise it will return false
 * 
 * @param {array or object} collection: an object or array
 * @param {function} func: an action to perform
 * 
 * @return {boolean}: returns a true or false value
 * */
 
 
 function every(collection, func){
    
    
    let answer = true
    
    if (func){
    
    each(collection, function(element, index, collection){
     if (func(element, index, collection) === false) {
         answer = false;
     } 
    
            });
        
    } else {
        each(collection, function(element, index, collection){
     if (!element) {
         answer = false;
     } 
    
            });
    }
            
        return answer;
}
 
 
 
 
 
 
 
   module.exports.every = every;
 
 
 
 
 
  
  
 /** 
  * 
  * some:
  * iterates through the collection and return true or false as the result. if no function is given it will return true if any elements 
  * are truthy; it will return false if ALL elements are falsey.
  * 
  * @param {array or object}collection: an object or array.
  * @param {function} func: an action to perform.
  * 
  * @return {boolean}: returns true if at least one element returns true. if all the elements return false, 
  * then this function returns false.
  * 
  * */
  
  
  function some(collection, func){
    
    
     let answer = false;
    
    if (func){
    
    each(collection, function(element, index, collection){
     if (func(element, index, collection) === true) {
         answer = true;
     } 
    
            });
        
    } else {
        each(collection, function(element, index, collection){
     if (element) {
         answer = true;
     } 
    
            });
    }
            
        return answer;
    
    
    
}
  
  
   module.exports.some = some;
  
  
  
  
  
  
  
  /**
   * 
   * reduce:
   * iterates through an array and returns the value of the final function call. if there is no seed, we use the 
   * first element in the array. reduce calls the function for each element in the given array passing the arguments:
   * previous result aka seed, element, index. it stores the returned value in the accumulator aka seed. and then returns that final 
   * accumulated value
   * 
   * @param {literal array} array: a literal array
   * @param {function} func: an action to perform
   * @param {whatever data type the value of the final function call is} seed: takes the place of the previous result to start with
   * 
   * @return{datatype of what we want our final value to be}: returns the value of the final function call
   * 
   * */
   
   function reduce(array, func, seed){
    
    
  let previousResult = ""  ;
  
         
     for(var i = 0; i < array.length; i++) {
        
         if ( i === 0 ){
             
              if (seed === undefined || seed === false){
                 seed = array[0]; i++;
                  
              }
                previousResult = seed;
         } 
                previousResult = func(previousResult, array[i], i);
        }
    
    return previousResult;
    
}
   
   
   
  module.exports.reduce = reduce;
  
  
  
  
  
  
  
  /**
   * 
   * extend:
   * copies properties from object 2 to object 1 and returns the updated object 1
   * 
   * @param {literal object} object: two or more objects.
   * 
   * @return{literal object}: returns an updated object
   * 
   * */
   
   
   
   function extend(object){

    let args = Array.from(arguments);
    each(args, function(element, index, array){
        Object.assign(object, element);
    });
    return object;
}
   
   
   
   module.exports.extend = extend;
  
  
  

    