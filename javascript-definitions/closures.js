sayHello = (name) => {
  const text = "Hello " + name
  const say = () => {
    console.log(text)
  }
  return say
}
const say2 = sayHello("bob")
say2()

// Definition: A closure is one way of supporting first-class functions; it is an expression that can reference variables within its scope
