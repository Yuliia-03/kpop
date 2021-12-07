const favoriteAuthor = {
    email: 'jane.austen@gmail.com',
    name: 'Jane Austen',
    numBooksPublished: 15
};
const favoriteLibrarian = {
    department: 'Scientific and methodical department',
    email: 'department5@lib.org',
    name: 'Librarian_№8',
    assistCustomer(customerName) {
        console.log(`Assisting ${customerName}...`);
    }
};
console.log(favoriteAuthor.email + '\n' + favoriteAuthor.name + '\n' + favoriteAuthor.numBooksPublished + '\n');
console.log(favoriteLibrarian.department + '\n' + favoriteLibrarian.name + '\n' + favoriteLibrarian.email);
favoriteLibrarian.assistCustomer('customer Ann');
