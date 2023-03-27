function shelfBook(book, shelf){
// // pseudocode - should add books to a specific shelf
// should add another book to the shelf
// shelves can only hold a certain amount of books (3)
if (shelf.length < 3) {
shelf.unshift(book)
return shelf
}
}

function unshelfBook(book, shelf) {
 // pseudocode - should remove a book by name
 for (var i = 0; i < shelf.length; i++) {
  if (shelf[i].title === book) {
    shelf.splice(i,1)
    return shelf
  }
}
}

function listTitles(shelf) {
  // pseudocode - should create a list of all the titles on a shelf
  var titles = []
  for (var i = 0; i < shelf.length; i++) {
      titles.push(shelf[i].title)
    } return titles.join(', ')
}

function searchShelf(shelf, bookTitle){
  // psuedocode - should tell us if a title is on the shelf
  // for (var i = 0; i < shelf.length; i++)
  
    if (shelf[0].title.includes(bookTitle)){
      return true
    } else if (shelf[1].title.includes(bookTitle)){
        return true
    } else {
      return false
    }
  
}


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};