function getTotalBooksCount(books) {
  let totalBooks = 0
  for (let i = 0; i < books.length; i++) {
    totalBooks += 1
  }
  return totalBooks
}

function getTotalAccountsCount(accounts) {
  let totalAccounts = 0
  for (let i = 0; i < accounts.length; i++) {
    totalAccounts += 1
  }
  return totalAccounts
}

function getBooksBorrowedCount(books) {
  let booksBorrowed = 0
  for (let i = 0; i < books.length; i++) {
    books[i].borrows.forEach(borrow => {
      if (borrow.returned === false) {
        booksBorrowed += 1
      }
    })
   }
    return booksBorrowed
  }
    


function getMostCommonGenres(books) {
  // the "return an array of 5 objects or fewer" thing is tripping me up. 
  // Also, how to add keys to objects. 
  //map the genres of the books array into a new variable called bookGenres
 const bookGenres = books.map((book) => book.genre)
 let result = []
 //map the bookGenres array into a new array containing the name and count
 bookGenres.map((genre) => {
   // for each genre, first check to see if the genre already exists in the results array
   const doesExist = result.findIndex((element) => element.name === genre)
   // if it exists, increase count by 1
   if (doesExist >= 0) {
     result[doesExist].count++
   }
   // otherwise, push a new genre object into the results array with the count of 1
   else {
     result.push({name: genre, count: 1})
   }
 })
  //sort the results array so that the count is displayed from high to low
  result.sort((result1, result2) => result2.count - result1.count)
  //limit the output to 5 results
  return result.slice(0, 5)
}

function getMostPopularBooks(books) {
  const result = books.map(book => {
    return {
      name: book.title,
      count: book.borrows.length
    }
  })
  return sortByCount(result)
    .filter((item, i) => i < 5)
}
//helper function
function sortByCount(array) {
return array.sort((a, b) => b.count - a.count)
}

function getMostPopularAuthors(books, authors) {
  return authors
    .map((author) => {
      const authorBorrowCount = books
        .filter((book) => book.authorId === author.id)
        .reduce((total, book) => {
          return total + book.borrows.length;
        }, 0);
      const authorName = `${author.name.first} ${author.name.last}`;
      return { name: authorName, count: authorBorrowCount };
    })
    .sort((bookA, bookB) => bookB.count - bookA.count)
    .slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
