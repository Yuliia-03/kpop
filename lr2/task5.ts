class ReferenceItem {

    /*
    //Завдання №1(a, b, c, d), 2
    title: string;
    year: number;
    
    constructor(newTitle: string, newYear: number) {
        this.title = newTitle;
        this.year = newYear;
        console.log(`Creating a new ReferenceItem ...`)
    }


    public printItem() {
        console.log(`${this.title} was published in ${this.year}`);
    }
    */
    
    constructor(public title: string, private year: number) {
    }

    private _publisher: string;

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher) {
        this._publisher = newPublisher;
    }

    static department: string = 'Scientific and methodical department';

    public printItem() {
        console.log(`${this.title} was published in ${this.year} in ${ReferenceItem.department} department`);
    }
}


//Завдання №1(a, b, c, d), 2
const ref = new ReferenceItem('Wuthering Heights', 1847);
//ref.printItem();


ref.publisher = 'Simon & Schuster';
console.log(ref.publisher);

