class Hashmap {
  buckets;
  constructor() {
    this.buckets = [];
  }

  hash(key) {
    return key.length;
    //   the length of the key is used as a simple hash value
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
    if (this.buckets[index])
      this.buckets[index] = Object.assign({}, this.buckets[index], obj);
    else this.buckets[index] = obj;
  }

    
  get(key) {
    let index = this.getIndex(key);
    return this.buckets[index][key];
  }
}

let h1 = new Hashmap();
h1.set("US", 80);
h1.set("UK", 95);
h1.set("INDIA", 20);
console.log(h1.get("US"));
console.log(h1.get("INDIA"));
