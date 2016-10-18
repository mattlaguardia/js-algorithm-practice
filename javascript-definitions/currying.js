// Definition: Currying is a way of constructing functions that allow partial application of a function's arguments.
// This means you can pass all the arguments a function is expecting and get the result, or pass a subset of those arguments and get a function back that's waiting for the rest of the argumemts

// Currying is an elemental in languages like Scala, which are built around functional concepts. JavaScript has functional capabilities, but Currying isn't built in by default.

// Creating our function

greet = (greeting, name) => {
  console.log(greeting + ', ' + name)
}

greet("Hello", "Heidi")

// This function requires both the name and the greeting to passes as arguments in order to work properly. But, we could rewrite this function using simple nested currying, so that the basic function only requires a greeting. and it returns another that takes the name of the person we want to greet.

// OUR FIRST CURRY //

greetCurried = (greeting) => {
  return (name) => {
    console.log(greeting + ", " + name)
  }
}

const greetHelloFirst = greetCurried("Hello")
greetHelloFirst("Jen")
greetHelloFirst("Eddie")

// This adjustment to the way we wrote the function lets up create a function for any type of greeting, and pass that new function the name of the person that we want to greet ^^^

greetCurried("Hi there")("Howard")
// We can also call the original curried function directly, just by passing each of the parametes in a separte set of parentheses, one right after the other

// CURRY ALL THE THINGS //

// a way of passing down parameters/properties to lower function calls

greetDeeplyCurried = (greeting) => {
  return (separator) => {
    return (emphasis) => {
      return (name) => {
        console.log(greeting + separator + name + emphasis)
      }
    }
  }
}

const greetAwkwardly = greetDeeplyCurried("Hello")("...")("?")
greetAwkwardly("Heidi")
greetAwkwardly("Wolf")

// Currying Traditional Functions //
// The only problem with the above curried function is syntax. As you build these curried functions up, you need to keep nesting returned functions, and call them with the new functions that require multiple sets of parentheses, each containing its own isolated argument -- this can get really really messy...

// To address this problem, on approach is to create a quick and dirty currying function that will take the name of an existing function that was written without all the nested returns. A currying function would need to pull out the list of arguments for that function, and use those to return a curried version of the original function.

var curryIt = function(uncurried) {
  var parameters = Array.prototype.slice.call(arguments, 1);
  return function() {
    return uncurried.apply(this, parameters.concat(
      Array.prototype.slice.call(arguments, 0)
    ));
  };
};

greeter = (greeting, separator, emphasis, name) => {
  console.log(greeting + separator + name + emphasis);
};

var greetHello = curryIt(greeter, "Hello", ", ", ".");
greetHello("Heidi");

var greetGoodbye = curryIt(greeter, "Goodbye", ", ");
greetGoodbye(".", "Joe");
