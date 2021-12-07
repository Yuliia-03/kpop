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
    constructor(title, year) {
        this.title = title;
        this.year = year;
    }
    get publisher() {
        return this._publisher.toUpperCase();
    }
    set publisher(newPublisher) {
        this._publisher = newPublisher;
    }
    printItem() {
        console.log(`${this.title} was published in ${this.year} in ${ReferenceItem.department} department`);
    }
}
ReferenceItem.department = 'Scientific and methodical department';
//Завдання №1(a, b, c, d), 2
const ref = new ReferenceItem('Wuthering Heights', 1847);
//ref.printItem();
ref.publisher = 'Simon & Schuster';
console.log(ref.publisher);
