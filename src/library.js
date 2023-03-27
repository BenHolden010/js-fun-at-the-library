function createLibrary(libraryName) {
  var library = {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  return library
}


function addBook(library, book){
  // pseudocode - should add book to the fantasy shelf 
  // should add books to the correct shelves automatically
   if (book.genre === Object.keys(library.shelves)[0]){
   library.shelves.fantasy.push(book)
   } else if (book.genre === Object.keys(library.shelves)[1]){
    library.shelves.fiction.push(book)
   } else if (book.genre === Object.keys(library.shelves)[2]){
      library.shelves.nonFiction.push(book)
   }
 return book
  }

function checkoutBook(library, bookTitle, genre) {
  // pseudocode - should unshelf a book to check out a book to a patron
  // should only checkout a book if the book is on the shelves

      if ( genre === Object.keys(library.shelves)[0] && bookTitle === library.shelves.fantasy[0].title) {
      library.shelves.fantasy.splice(0,1)
    } else if (genre === Object.keys(library.shelves)[1] && bookTitle === library.shelves.fiction[0].title) {
      library.shelves.fiction.splice(0,1) 
    } else if (genre === Object.keys(library.shelves)[2] && bookTitle === library.shelves.nonFiction[0].title) {
      library.shelves.nonFiction.splice(0,1)
    } else if (bookTitle === library.shelves.fantasy[0].title) {
      return (`Sorry, there are currently no copies of ${bookTitle} available at the Denver Public Library.`)
    } else if (bookTitle === library.shelves.fiction[0].title) {
      return (`Sorry, there are currently no copies of ${bookTitle} available at the Denver Public Library.`)
    } else if (bookTitle === library.shelves.nonFiction[0].title) {
      return (`Sorry, there are currently no copies of ${bookTitle} available at the Denver Public Library.`)
    }
  return (`You have now checked out ${bookTitle} from the Denver Public Library.`)
}



function takeStock(library, genre){
  // pseudocode - should be able to take stock of how many books are on a shelf
  // should be able to count the number of books on a different shelf
 
  if (genre === Object.keys(library.shelves)[0]) {
return`There are a total of ${library.shelves.fantasy.length} ${Object.keys(library.shelves)[0]} books at the ${library.name}.`

} else if (genre === Object.keys(library.shelves)[1]) {
return`There are a total of ${library.shelves.fiction.length} ${Object.keys(library.shelves)[1]} books at the ${library.name}.`

} else if(genre === Object.keys(library.shelves)[2]) {
  return `There are a total of ${library.shelves.nonFiction.length} ${Object.keys(library.shelves)[2]} books at the ${library.name}.`

} else {
  var total = library.shelves.fantasy.length + library.shelves.fiction.length + library.shelves.nonFiction.length
  return "There are a total of " + total + " books at the " + library.name + "."
}
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};