// First need to make our node //
const Node = (data) => {
  this.data = data
  this.next = null
}

const SinglyList = () => {
  this._length = 0
  this.head = null
}
// Functionality to add nodes to a list //

SinglyList.prototype.add = (value) => {
  var node = new Node(value)
  var currentNode = this.head

  // 1st use-case: an empty list //
  if(!currentNode){
    this.head = node
    this._length++
    return node
  }

  // 2nd use-case: a non-empty list //
  while(currentNode.next){
    currentNode = currentNode.next
  }

  currentNode.next = node
  this._length++

  return node

}
