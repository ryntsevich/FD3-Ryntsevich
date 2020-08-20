class Product {
    scale: number;
    name: string;

    constructor(_scale: number, _name: string) {
        this.scale = _scale;
        this.name = _name;
    }

    getScale(): number {
        return this.scale;
    }

    getName(): string {
        return this.name;
    }
}

class Scales {
    products: Product[] = [];

    add(_product: Product): void {
        this.products.push(_product);
    }

    getSumScale(): number {
        let sumScale: number = 0;
        this.products.forEach((product: Product) => {
            sumScale += product.getScale();
        });

        return sumScale;
    }

    getNameList(): string[] {
        let nameList: string[] = [];
        this.products.forEach(product => {
            nameList.push(product.getName());
        });

        return nameList;
    }

}

class Grape extends Product {

    constructor(_scale: number, _name: string) {
        super(_scale, _name);
    }
}

class Tomato extends Product {

    constructor(_scale: number, _name: string) {
        super(_scale, _name);
    }
}

let scales: Scales = new Scales();

let grape1: Grape = new Grape(100, 'Pinot blanc');
let grape2: Grape = new Grape(500, 'Muscat Blanc');
let grape3: Grape = new Grape(700, 'Cabernet Franc');

let tomato1: Tomato = new Tomato(50, 'Red Tomatoes');
let tomato2: Tomato = new Tomato(150, 'Black Tomatoes');
let tomato3: Tomato = new Tomato(250, 'Yellow Tomatoes');

scales.add(grape1);
scales.add(grape2);
scales.add(grape3);
scales.add(tomato1);
scales.add(tomato2);
scales.add(tomato3);

console.log(`List of all products: \n ${scales.getNameList()}`);
console.log(`Scales of all products: ${scales.getSumScale()}`);