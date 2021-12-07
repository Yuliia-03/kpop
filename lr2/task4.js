class UniversityLibrarian {
    assistCustomer(customerName) {
        console.log(`${this.name} is assisting ${customerName}`);
    }
}
const favoriteAuthor = {
    email: 'jane.austen@gmail.com',
    name: 'Jane Austen',
    numBooksPublished: 15
};
//    const favoriteLibrarian: Librarian = {
//        department: 'Scientific and methodical department',
//        email: 'department5@lib.org',
//        name: 'Librarian_№8',
//
//        assistCustomer(customerName: string): void {
//            console.log(`Assisting ${customerName}...`);
//        }
//    };
const favoriteLibrarian = new UniversityLibrarian();
favoriteLibrarian.name = 'Librarian_№8';
favoriteLibrarian.assistCustomer('customer Ann');
