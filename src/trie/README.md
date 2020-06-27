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

## Search in a Trie

1. Case 1: Non-Existent Word

If we are searching for a word that doesn’t exist in the trie and is not a subset of any other word, by principle, we will find null before the last character of the word can be found.

Case 2: Word Exists as a Substring

This is the case where our word can be found as a substring of another word, but the isEndWord property for it has been set to false.Therefor word will not be detected.
if there exists "bed" in trie then "be" will not be detected.

Case 3: Word Exists

The success case is when there already exists a path from the root to the node of the last character and the node is also marked as endOfWord

## Algorithm

1. Basically we will get the search word.
2. check if index of individual key is not null
3. And also check if it leaf node i.e endWord is true

```javascript
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
```

```
Time complexity is O(n).
```

## Deletion in a Trie

Case 1: Word with No Suffix or Prefix

If the word to be deleted has no suffix or prefix and all the character nodes of this word have no children, then we will delete all nodes up to the root.

Case 2: Word is a Prefix

If the word to be deleted is prefix of other word then just simply unmark the end word
If both the and their exists then to delete the , simply unmark e.

Case 3: Word Has a Common Prefix
It there exists both their and the and to remove their , simpley remove "ir"

## Challenges

<details><summary>Total Number of Words in a Trie
</summary>
<p>
```
Calculate no of isEndWord: true in all children
```
```javascript
function totalWords(rootN) {
  let result = 0;
  if (rootN.isEndWord) {
    result = result + 1;
  }
  for (var i = 0; i < 26; i++) {
    if (rootN.children[i] !== null) {
      result = result + totalWords(rootN.children[i]);
    }
  }
  return result;
}

let t = new Trie();
t.insert("ab");
t.insert("ba");
console.log(totalWords(t.root));//2

```

```

Time complexity is O(n)

```

</p>

</details>
```
