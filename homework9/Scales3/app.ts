interface IStorageEngine {
    addItem(item: Product): void;
    getItem(index: number): Product;
    getCount(): number;
}

class Product {
    constructor(private scale: number, private name: string) {
    }

    getScale(): number {
        return this.scale;
    }

    getName(): string {
        return this.name;
    }
}

class Scales<StorageEngine extends IStorageEngine> {
    constructor(private storage: StorageEngine) { };

    add(item: Product): void {
        this.storage.addItem(item);
    }
    getSumScale(): number {
        let sumScale: number = 0;

        for (let i = 0; i < this.storage.getCount(); i++) {
            sumScale += this.storage.getItem(i).getScale();
        }

        return sumScale;
    }

    getNameList(): string[] {
        let nameList: string[] = [];

        for (let i = 0; i < this.storage.getCount(); i++) {
            nameList.push(this.storage.getItem(i).getName());
        }

        return nameList;
    }
}

class ScalesStorageEngineArray implements IStorageEngine {
    items: Product[] = [];

    addItem(item: Product): void {
        this.items.push(item);
    }
    getItem(index: number): Product {
        return this.items[index];
    }
    getCount(): number {
        return this.items.length;
    }
}

class ScalesStorageEngineLocalStorage implements IStorageEngine {

    key: string = 'list';

    addItem(item: Product): void {
        let items: any[];
        if (!localStorage.getItem(this.key)) {
            items = [];
        }
        else {
            items = JSON.parse(localStorage.getItem(this.key));
        }
        items.push(item);
        localStorage.setItem(this.key, JSON.stringify(items));
    }

    getItem(index: number): Product {
        let items: any[] = JSON.parse(localStorage.getItem(this.key));
        return new Product(items[index].scale, items[index].name);
    }

    getCount(): number {
        let items: any[] = JSON.parse(localStorage.getItem(this.key));
        return items.length;
    }

}

let storage = new ScalesStorageEngineArray;
let scalesArray = new Scales<ScalesStorageEngineArray>(storage);
let product1 = new Product(100, 'Apple');
let product2 = new Product(20, 'Grape');
let product3 = new Product(56, 'Orange');

scalesArray.add(product1);
scalesArray.add(product2);
scalesArray.add(product3);

console.log(`List of all products: ${scalesArray.getNameList()}`);
console.log(`Scales of all products: ${scalesArray.getSumScale()}`);


localStorage.clear();
let storageLS = new ScalesStorageEngineLocalStorage;
let scalesLS= new Scales<ScalesStorageEngineLocalStorage>(storageLS);
let product1LS = new Product(45, 'Apple');
let product2LS = new Product(45, 'Grape');
let product3LS = new Product(100, 'Orange');

scalesLS.add(product1LS);
scalesLS.add(product2LS);
scalesLS.add(product3LS);

console.log(`List of all products: ${scalesLS.getNameList()}`);
console.log(`Scales of all products: ${scalesLS.getSumScale()}`);