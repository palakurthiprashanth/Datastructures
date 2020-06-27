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
