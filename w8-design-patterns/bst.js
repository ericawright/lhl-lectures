function Node(key, value) {
  this.key = key;
  this.value = value;
  this.left = null;
  this.right = null;
  this.accept = function (visitor,level) {
    visitor.visit(this,level);
    if (this.left) 
      this.left.accept(visitor,level+"-")
    if (this.right)
      this.right.accept(visitor,level+"-")
  }
}

var tree = {
  _root: null,
        
  insert: function (key, value) {
    var node = new Node(key, value);
    if (this._root) {
      var currentNode = this._root;
      while (currentNode) {
        var dir = (currentNode.key > key) ? 'left' : 'right';
        if (currentNode[dir]) {
          currentNode = currentNode[dir];
        } else {
          currentNode[dir] = node;
          currentNode = null;
        }
      }
    } else {
      this._root = node;
    }
  },
  traverse: function(visitor) {
    if (this._root) {
      this._root.accept(visitor,"|")
    }
  },
  get: function (key) {
    var currentNode = this._root;
    while (currentNode) {
      if (currentNode.key === key) {
        return currentNode.value;
      }
      var dir = (currentNode.key > key) ? 'left' : 'right';
      currentNode = currentNode[dir];
    }
    return null;
  }
};

var display = {
    visit: function (node,level) {
      console.log(level + ">" + node.key);
    }
};

var myCount = 0;
var countThem = {
  visit: function (node, level) {
    myCount ++;
  }
}


tree.insert(1234, 1);
tree.insert(7777, 2);
tree.insert(123, 3);
tree.insert(-1123, 4);
tree.insert(0, 5);
tree.insert(9999, 6);
tree.insert(590, 7)
tree.insert(14,8)
tree.traverse(display)
tree.traverse(countThem)
console.log(myCount)
// console.log(tree.get(9999));