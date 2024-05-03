class Storage {
  #items = [];
  constructor(params){
   
    this.#items = params;
  }
  getItems(){
    return this.#items;
  }
  addItem(newItem){
     this.#items.push(newItem);
     return this.#items;
  }
  removeItem(itemToRemove){
    const removeItem = this.#items.indexOf(itemToRemove);
    if(removeItem !== -1){
     this.#items.splice(removeItem, 1)
   }
   return this.#items;
  }
}
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);


console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
