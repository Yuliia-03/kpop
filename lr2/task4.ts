interface Person {
    name: string,
    email: string
}

interface Author extends Person {
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string,
    assistCustomer: (customerName: string) => void
}

class UniversityLibrarian implements Librarian {
    department: string;
    email: string;
    name: string;

    assistCustomer(customerName: string): void {
        console.log(`${this.name} is assisting ${customerName}`);
    }
}

const favoriteAuthor: Author = {
    email: 'jane.austen@gmail.com',
    name: 'Jane Austen',
    numBooksPublished: 15
}

//    const favoriteLibrarian: Librarian = {
//        department: 'Scientific and methodical department',
//        email: 'department5@lib.org',
//        name: 'Librarian_№8',
//
//        assistCustomer(customerName: string): void {
//            console.log(`Assisting ${customerName}...`);
//        }
//    };

const favoriteLibrarian: Librarian = new UniversityLibrarian();
favoriteLibrarian.name = 'Librarian_№8';
favoriteLibrarian.assistCustomer('customer Ann');