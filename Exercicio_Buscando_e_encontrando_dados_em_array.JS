/* 
Baseado no Array de livros por categoria abaixo, faça os seguintes desafios:
    * Contar o número de categorias e o numero de livros em cada categoria.
    * Contar o número de autores de
    * Mostrar livros do autor Augusto Cury
    * Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, Pai pobre",
                author: "Robert T. Kiyosaki e Sharon l. Lechter",   
            },
        ],
    },
    {
        category: "Inteligencia Emocional",
        books: [
            {
                title: "Você é insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",   
            },
        ],
    },
]

// RESOLUÇÕES

const categories = booksByCategory.length
console.log('total categorias: ',categories)

for(let category of booksByCategory){
    console.log('total de livros da categoria', category.category)
    console.log(category.books.length)
}

function authors(){
    let authors = [];

    for (let category of booksByCategory){
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }
    }
    console.log("Total de autores", authors.length)
}
authors();


function booksOfAugustoCury(){
    let books = [];

    for (let category of booksByCategory){
        for(let book of category.books) {
            if(book.author === 'Augusto Cury'){
                books.push(book.title)
            }
        }
    }
    console.log("Livros do Autor", books)
}
booksOfAugustoCury();

function booksOfAuthor(author){
    let books = [];

    for (let category of booksByCategory){
        for(let book of category.books) {
            if(book.author === author){
                books.push(book.title)
            }
        }
    }
}
booksOfAuthor('George S. Clason');