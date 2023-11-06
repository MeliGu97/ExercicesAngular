interface Duck {
    name: string;
    swim(): string;
}

class Thing implements Duck {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    swim(): string {
        return "Nage comme un canard";
    }
}

const duck = new Thing("Nanar");
console.log(duck.swim());

