// implement snake and ladder using hash map

class Hashmap {
  buckets;
  constructor() {
    this.buckets = [];
  }

  hash(key) {
    return key[0].toLowerCase().charCodeAt(0) - 97;
  }

  getIndex(key) {
    let hashValue = this.hash(key);
    let index = hashValue;
    return index;
  }

  set(key, value) {
    let index = this.getIndex(key);
    let obj = {};
    obj[key] = value;
    this.buckets[index] = Object.assign({}, this.buckets[index], obj);
  }

  get(key) {
    let index = this.getIndex(key);
    return this.buckets[index][key];
  }
}

let h1 = new Hashmap();
h1.set("BALLOON", 80);
h1.set("PHOTO", 95);
h1.set("PENCIL", 20);
h1.set("YOYO", 20);

console.log(h1.get("BALLOON"));
console.log(h1.get("PHOTO"));
console.log(h1.get("PENCIL"));
console.log(h1);
