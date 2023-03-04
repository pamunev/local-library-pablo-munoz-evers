function findAuthorById(authors, id) {
  let rightAuthor = authors.find(author => {
    if (author.id === id) {
      return author
    }
  })
  return rightAuthor
}

function findBookById(books, id) {
  let rightBook = books.find(book => book.id === id)
  return rightBook
}

function partitionBooksByBorrowedStatus(books) {
  //let checkedOut = []
  //let returned = []
  // if they're checked out, we push them to checked out.
  // if they're returned, same thing. 
  // ohh, it needs to loop through borrows. borrows is an array. 
  // so we're looping throuhg books, and within each book we're looping thru borrows.
  // and if ANY of those borrows === false, then the book is checked out. 
  // so we're going to use .every. 
  // if every borrows in that book is returned === true, 
  // then we add it to the returned array. 
  // else we add it to the checked out array. 
  // I know how to do this with a for loop. It's the advanced functions that are tripping me up. 

  // Maybe a forEach within a for loop. 
  // I need to loop within each book.borrows. 
  // If there is one returned there that === false, then push to checked out.
  // If there are no returned there that === false, then push to returnedBooks.
  // How do I write that?
  /*let checkedOut = []
  let returnedBooks = []
  for (let i = 0; i < books.length; i++) {
    books[i].borrows.forEach(borrow => {
      if (borrow.returned === true) {
      returnedBooks.push(books[i])
    }
    else {
      checkedOut.push(books[i])
    }
   })
  }
  let partitionedArray = [checkedOut, returnedBooks]
  return partitionedArray
  console.log(partitionedArray)*/
      //create an empty result array
      let result = []
      //using a variable called checked out, filter through the books array for books that have been checked out and have not been returned.
      const checkedOut = books.filter((book) => 
        book.borrows.length > 0 && book.borrows[0].returned === false) 
      //push the checkedOut variable into the result array
      result.push(checkedOut) 
      //using a variable called returned, filter through the books array for books that have been returned. push the returned variable into the result array
      const returned = books.filter((book) => book.borrows[0].returned === true) 
        result.push(returned)
      
    // return the result array
        return result 
}




  //let checkedOut = books.filter(book => book.borrows.returned === false)
  //let returned = books.filter(book => book.borrows.returned === true)
  
  /*let checkedOut = books.filter(book => {
    if (book.borrows.filter(borrow => borrow.returned === false)))
    return}
  let returned = books.filter(book => book.borrows.returned === true)

  let allBooks = [checkedOut, returned]
  return allBooks*/


function getBorrowersForBook(book, accounts) {
  // we create an array variable
  // then if array.length is equal or lesser than 10, we keep pushing account objects into it. 
  // We're pushing in the accounts whose id's match the id's in books.borrows. 
  // So we're looping through accounts. 
  // and then we also need to add the returned entry (from books.borrows) into these account objects. I'm not sure how to do this part. 
 //using the map method, return a new array containing the borrows from the book array.
 return book.borrows.map((account) => {
  //using the variable foundBorrower, search the accounts array for an id that matches the borrower id
  let foundBorrower = accounts.find(borrower => account.id === borrower.id )

  return {...foundBorrower, returned: account.returned}

}).slice(0, 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
