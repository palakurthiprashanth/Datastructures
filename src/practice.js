class TrieNode {
  constructor(char) {
    this.char = char;
    this.children = [];
    for (var i = 0; i < 26; i++) {
      this.children[i] = null;
    }
    this.isEndWord = false;
  }
  markAsLeafNode() {
    this.isEndWord = true;
  }
  markAsNonLeafNode() {
    this.isEndWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode(""); // root node
  }
  //Function to get the index of character 't'
  getIndex(t) {
    return t.charCodeAt(0) - "a".charCodeAt(0);
  }
  insert(key) {
    if (key === null) {
      return;
    }
    let index = 0;
    let currentNode = this.root;
    for (var i = 0; i < key.length; i++) {
      index = this.getIndex(key[i]);
      if (currentNode.children[index] === null) {
        currentNode.children[index] = key[i];
      }
    }
    currentNode.markAsLeafNode();
  }
  search(key) {
    let index = 0;
    let currentNode = this.root;
    for (var i = 0; i < key.length; i++) {
      index = this.getIndex(key[i]);
      if (currentNode.children[index] === null) {
        return false;
      }
    }
    if (currentNode !== null && currentNode.isEndWord) {
      return true;
    }
    return false;
  }
}

// Input keys (use only 'a' through 'z' and lower case)
let keysList = ["the"];
let t = new Trie();
console.log("Keys to insert: ");
console.log(keysList);

//Construct Trie
for (var i = 0; i < keysList.length; i++) {
  t.insert(keysList[i]);
}
console.log(t.search("the"));
console.log(t.search("these"));
