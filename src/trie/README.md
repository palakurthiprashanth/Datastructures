## Trie

It is DS where it can store unique char.
Applications of trie

1. Autocomplete.
2. Searching a phone contact.
   3.Spell checker.

## Properties of a Trie

1. Each node represents a unique character.
2. size of trie depends on no of alphabets , max of 26.
3. Another important property of a trie is that it provides the same path for words that share a common prefix
   For example, “there” and “their” have a common prefix “the”

## Structure of a Trie

1. char : each char will store in node
2. children[]: contains pointers to child nodes
3. isEndword: flag to check if it is end word.

```javascript
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
```

Just like any other DS it can also perform operations like Insert , search , deletion.

## Insertion in a Trie

After inserting the word , we will mark isEndOfWord flag to true;

## Case 1: No Common Prefix

Inserting a word whose characters are not common with any other node like
any , the.

## Case 2: Common Prefix

If new word share a common path with already existing path like if trie has a path of their, then inserting there share common path till "the"

## Case 3: Word Exists

This occurs if your word is a substring of another word that already exists in the trie.

For example, if we want to insert the​ word the in the trie which already contains their, the path for the already exists. Therefore, we simply need to set the value of isEndWord to true at e in order to represent the end of the word

## insert

```javascript
insert(key){
    //None keys are not allowed
    if (key == null){
      return;
    }

    key = key.toLowerCase();  //Keys are stored in lowercase
    let currentNode = this.root;
    let index = 0;          //To store the character index

    //Iterate the trie with the given character index,
    //If the index points to null
    //simply create a TrieNode and go down a level
    for (var level=0; level<key.length; level++){
      index = this.getIndex(key[level]);

      if (currentNode.children[index] == null){
        currentNode.children[index] = new TrieNode(key[level]);
        console.log(String(key[level]) + " inserted");
      }
      currentNode = currentNode.children[index];
    }

    //Mark the end character as leaf node
    currentNode.markAsLeaf();
    console.log("'" + key + "' inserted");
  }

```

```
Time complexity is O(n)
```
