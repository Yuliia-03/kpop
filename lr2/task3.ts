
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

const favoriteAuthor: Author = {
    email: 'jane.austen@gmail.com',
    name: 'Jane Austen',
    numBooksPublished: 15
}

const favoriteLibrarian: Librarian = {
    department: 'Scientific and methodical department',
    email: 'department5@lib.org',
    name: 'Librarian_№8',

    assistCustomer(customerName: string): void {
        console.log(`Assisting ${customerName}...`);
    }
};

console.log(favoriteAuthor.email + '\n' + favoriteAuthor.name + '\n' + favoriteAuthor.numBooksPublished + '\n')
console.log(favoriteLibrarian.department + '\n' + favoriteLibrarian.name + '\n' + favoriteLibrarian.email)
favoriteLibrarian.assistCustomer('customer Ann')