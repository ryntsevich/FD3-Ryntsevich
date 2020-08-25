interface IScalable {
    getScale(): number;
    getName(): string;
}

class Scales {
    products: IScalable[] = [];

    add(_product: IScalable): void {
        this.products.push(_product);
    }

    getSumScale(): number {
        let sumScale: number = 0;
        this.products.forEach((product: IScalable) => {
            sumScale += product.getScale();
        });

        return sumScale;
    }

    getNameList(): string[] {
        let nameList: string[] = [];
        this.products.forEach((product: IScalable) => {
            nameList.push(product.getName());
        });

        return nameList;
    }

}

class Grape implements IScalable {
    constructor(public scale: number, public name: string) { };

    getScale(): number {
        return this.scale;
    }

    getName(): string {
        return this.name;
    }
}

class Tomato implements IScalable {
    constructor(public scale: number, public name: string) { };

    getScale(): number {
        return this.scale;
    }

    getName(): string {
        return this.name;
    }
}

let scales: Scales = new Scales();

let grape1: Grape = new Grape(100, 'Pinot blanc');
let grape2: Grape = new Grape(5008, 'Muscat Blanc');
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