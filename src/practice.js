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
