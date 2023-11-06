interface Duck {
    name: string;
    swim(): string;
}

class Thing implements Duck {
    name: string;
    swim(): string {
        throw new Error("Method not implemented.");
    }
    
}