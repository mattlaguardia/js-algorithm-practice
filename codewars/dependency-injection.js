var DI = function (dependency) {
  this.dependency = dependency;
};

DI.prototype.inject = function (func) {
  // Your code goes here
  console.log("Hey From Inject Method!")
}

module.exports = DI
