// Definition: Currying is a way of constructing functions that allow partial application of a function's arguments.
// This means you can pass all the arguments a function is expecting and get the result, or pass a subset of those arguments and get a function back that's waiting for the rest of the argumemts

// Currying is an elemental in languages like Scala, which are built around functional concepts. JavaScript has functional capabilities, but Currying isn't built in by default.

// Creating our first Curried function

greet = (greeting, name) => {
  console.log(greeting + ', ' + name)
}

greet("Hello", "Heidi")

// This function requires both the name and the greeting to passes as arguments in order to work properly. But, we could rewrite this function using simple nested currying, so that the basic function only requires a greeting. and it returns another that takes the name of the person we want to greet.

// OUR FIRST CURRY

greetCurried = (greeting) => {
  return function(name) {
    console.log(greeting + ", " + name)
  }
}

const greetHello = greetCurried("Hello")
greetHello("Jen")
greetHello("Eddie")
