abstract class ReferenceItem {
    constructor(public title: string, protected year: number) {
    }

    private _publisher: string;

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher) {
        this._publisher = newPublisher;
    }

    static department: string = 'Scientific and methodical';

    public printItem() {
        console.log(`${this.title} was published in ${this.year} in ${ReferenceItem.department} department`);
    }

    abstract printCitation();
}

class Encyclopedia extends ReferenceItem {
    constructor(title: string, year: number, public edition: number) {
        super(title, year);
    }

    public printItem(): void {
        super.printItem();
        console.log(`Edition: ${this.edition} (${this.year})`);
    }

    public printCitation() {
        console.log(`${this.title} - ${this.year}`);
    }
}

const refBook = new Encyclopedia('Wuthering Heights', 1847, 20)
//refBook.printItem();

refBook.printCitation()