// console.log("Hey there!!!");
const names: Array<string> = ['Max', 'Mike']


function merge<T extends object, U extends object>(a: T, b: U) {
    return Object.assign(a, b)
}


const mergeObject = merge({ name1: "Meet", age1: 23 }, { name: "Dhruvin", age: 21, })
console.log(mergeObject);

interface lengthy {
    length: number
}

function countAndDescribe<T extends lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value'
    if (element.length === 1) {
        descriptionText = "Got 1 element"
    } else if (element.length > 1) {
        descriptionText = `Got ${element.length} elements.`
    }
    return [element, descriptionText]
}

console.log(countAndDescribe("Hello there!!!"));


function extractAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U
  ) {
    return 'Value: ' + obj[key];
  }
  
  extractAndConvert({ name: 'Max' }, 'name');
  
  class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];
  
    addItem(item: T) {
      this.data.push(item);
    }
  
    removeItem(item: T) {
      if (this.data.indexOf(item) === -1) {
        return;
      }
      this.data.splice(this.data.indexOf(item), 1); // -1
    }
  
    getItems() {
      return [...this.data];
    }
  }
  
  const textStorage = new DataStorage<string>();
  textStorage.addItem('Max');
  textStorage.addItem('Manu');
  textStorage.removeItem('Max');
  console.log(textStorage.getItems());
  
  const numberStorage = new DataStorage<number>();
  
  // const objStorage = new DataStorage<object>();
  // const maxObj = {name: 'Max'};
  // objStorage.addItem(maxObj);
  // objStorage.addItem({name: 'Manu'});
  // // ...
  // objStorage.removeItem(maxObj);
  // console.log(objStorage.getItems());