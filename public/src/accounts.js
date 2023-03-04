function findAccountById(accounts, id) {
  let accountById = accounts.find((account) => account.id === id)
  return accountById
}

function sortAccountsByLastName(accounts) {
  //let sorted = accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowercase() ? 1 : -1)
  //function sortAccountsByLastName(accounts) {
    //using a ternary operator, sort the last names in the accounts array in alphabetical order
    accounts.sort((account1, account2) => account1.name.last > account2.name.last ? 1 : -1)
     return accounts
  }
  //return sorted 
//}

function getTotalNumberOfBorrows(account, books) {
  // so we're trying to find out how many times account.id appears in any book's borrows.id
  // is this a loop within a loop?
  // becacuse we're going to loop through each book's borrows, of which there are many.
  // and then we're going to compare that to account.id.
  // and then do the same for all the books in the book object. 

  // so it's the "going thru book.borrows" loop inside the "going through books" loop.
  // and then we add +1 to the total if the book.borrows.id matches the account.id. 
  // We define the total at the top.  
  // And then we return the total. 
  // good old fashioned for loop?

  let total = 0
  for (let i = 0; i < books.length; i++) {
    books[i].borrows.forEach((borrow) => {
      if (borrow.id === account.id) {
        total += 1
      }
    }
    )
  }
  return total
}

function getBooksPossessedByAccount(account, books, authors) {
  // So we're adding the author object as a key to the book object. 
  // So we're trying to find all the books currently checked out by the account.
  // Meaning, the id has to match AND borrows.return has to equal false. 
  // so if borrow.id === account.id AND borrow.return === false,
  // Then add books to an array.
  // And then we have to add the author object as a key in each book in that array.
  // Sounds like 2 functions. 
  // we could use a for loop for the first one, but maybe filter. 

  // an array of book objects that are checked out by the account. 
  /*let checkedOutBooks = books.filter((book) => {
    if (book.borrows.id === account.id) {
      if (book.borrows.returned === false) {
        return book
      }
    }
  })*/
  //console.log(booksPossessed)

  // I might just need to do .forEach instead of .some.

    let checkedOutBooks = books.filter(book => {
      if (book.borrows.some(borrowedBook => {
        if (borrowedBook.returned === false && borrowedBook.id === account.id) return true
      }))
    {
      return book
    } 
  })

  booksAndAuthors = checkedOutBooks.map(book => {
    book["author"] = authors.find(author => author.id === book["authorId"])
  })

  return checkedOutBooks

  // now we have to add the author object that corresponds to each book in the booksPossessed array
  // as a key in each book object. 
  // loop thru books. or authors?
  // if author.id === books.authorId
  // then booksPossessed.author = id

  // No. How do I nest the whole author object within each book object in the booksPossessed array?
  // booksPossessed[book] = author

  // Is it a loop within a loop?
  // loop thru authors.
  // if author.id === book.authorId
  // then booksPossessed[book] = author
  // but how do I run loops thru authors AND books at the same time?
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
