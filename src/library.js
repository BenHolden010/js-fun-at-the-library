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


function addBook(library, bookTitle){
  // pseudocode - should add book to the fantasy shelf 
  // should add books to the correct shelves automatically
  if (genre = 'fantasy') {
  library.shelves.fantasy.push(bookTitle)
  } 
  // else if (genre = 'fiction') {
    // library.shelves.fiction.push(bookTitle)
  // } 
  // else (genre = 'nonFiction') {
    
  //   library.shelves.nonFiction.push(bookTitle)
  // }
return library
}


// function takeStock(library, genre){
// return `There are a total of ${shelves.length} at the ${library}`
// }

module.exports = {
  createLibrary,
  addBook,
  // checkoutBook,
  // takeStock
};