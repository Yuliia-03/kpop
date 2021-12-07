class ReferenceItem {
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
ReferenceItem.department = 'Scientific and methodical';
class Encyclopedia extends ReferenceItem {
    constructor(title, year, edition) {
        super(title, year);
        this.edition = edition;
    }
    printItem() {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }
    printCitation() {
        console.log(`${this.title} - ${this.year}`);
    }
}
const refBook = new Encyclopedia('Wuthering Heights', 1847, 20);
//refBook.printItem();
refBook.printCitation();
