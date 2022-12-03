class BH {
    constructor() {
      this.values = [];
    }
    add(element) {
      this.values.push(element);
      let index = this.values.length - 1;
      const current = this.values[index];
  
      while (index > 0) {
        let parentIndex = Math.floor((index - 1) / 2);
        let parent = this.values[parentIndex];
  
        if (parent <= current) {
          this.values[parentIndex] = current;
          this.values[index] = parent;
          index = parentIndex;
        } else break;
      }
    }
  }
  
  const tree = new BH();
  tree.add(50);
  tree.add(40);
  tree.add(30);
  tree.add(20);
  console.log(tree); // [31, 6, 4, 3]