// async function getBooks() {
//     let response = await fetch('books.json')
//     let books = await response.json()
//     let n = 1
//     return books.map(book => {
//         book.id = n
//         n += 1
//         return book
//     })
// }

// function getBookHtml(book) {
//     return `<div class="my-book">
//         <div class="my-book-cover">${book.title}</div>
//         <div class="my-book-spine"></div>
//         <div class="my-book-footer"></div>
//     </div>`
// }

// function displayLibrary(books) {
//     document.body.innerHTML = `<div class="my-library">
//         ${books.map(getBookHtml).join('')}
//     </div>`
// }

// getBooks()
//     .then(displayLibrary)
//     .catch(e => console.log(e))

async function findShow(query) {
    let response = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${query}&embed=seasons`)
    let data = await response.json()
    return data
}

findShow("office").then(show => {
    console.log(show)
    document.body.innerHTML = `<div class="my-show">
        <div class="my-show-title">
            ${show.name}
        </div>
        
        <div class="my-show-summary">
            ${show.summary}
        </div>
        
        ${show._embedded.seasons.map(season => {
            return `<div class="my-show-season">Season ${season.number}</div>`    
        }).join('')}
    </div>`
})