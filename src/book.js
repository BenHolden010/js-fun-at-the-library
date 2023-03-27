function createTitle(title) {
  return `The ${title}`
}

function buildMainCharacter(name, age, pronouns) {
    // psuedocode - this code will add values to the character object
var character = {
  name: name, 
  age: age, 
  pronouns: pronouns
}
return character
}

function saveReview(newReview, reviews) {
  // pseudocode - this code should add reviews to an array unless previous newReview = review
// for (var i = 0; i < reviews.length; i++) {
  if (reviews.includes(newReview)) {
    return
  } else {
   reviews.push(newReview)
   return reviews
  }
}

function calculatePageCount(bookTitle) {
    // pseudocode - should add 20 pages per letter in the title
    //should add 20 pages per letter for a different title

return bookTitle.length * 20
}


function writeBook(bookTitle, bookCharacter, genre) {
    // pseudocode - should return a book object and a different book object
    var book = {
        title: bookTitle,
        mainCharacter: bookCharacter,
        pageCount: bookTitle.length*20,
        genre: genre
    }
return book
}

function editBook(book) {
    // pseudocode - should decrease the book's page
    // count to be three quarters of what it originally was
    book.pagecount = book.pageCount * .75
    return book.pageCount
    
}

  module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
