function getData(data) {
    return new Promise((resolve, reject) => {
        console.log('Veriler alınıyor...');
        
        if (data){
            resolve('Veriler Alındı.');
        }
        else{
            reject('Veriler Alınamadı.');
        }
    })
}

function cleanData(receivedData) {
    return new Promise((resolve, reject) => {
        console.log('Veriler düzenleniyor...');

        if (receivedData) {
            resolve('Veriler düzenlendi.');
        } else {
            reject('Verilen düzenlenemedi.');
        }
    })
}


/*
getData(true)
    .then(result => {
        console.log(result);
        return cleanData(true);
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
})
*/

// Async - Await

/*
async function processData() {
    try {
        const receivedData = await getData(true);
        console.log(receivedData);
        const cleanedData = await cleanData(true);
        console.log(cleanedData);
    } catch (error) {
        console.log(error);
    }
}

processData();
*/

const books = [
    {name: 'Book 1', author: 'Author 1'},
    {name: 'Book 2', author: 'Author 2'},
    {name: 'Book 3', author: 'Author 3'}
];

const listBooks = () =>{
    books.map(book => {
        console.log(book.name);
    })
}

const addBook = (newBook) =>{
    const promise1 = new Promise((resolve, reject)=>{
        books.push(newBook);
        //resolve(books);
        reject('Hata oluştu');
    })
    return promise1;
}

/*addBook({name: 'Book 4', author: 'Author 4'})
    .then(()=>{
        console.log('Yeni Liste');
        listBooks();
    })
    .catch((error)=>{
        console.log(error);
    })*/


async function showBooks() {
    try {
        await addBook({name: 'Book 4', author: 'Author 4'})
        listBooks();   
    } catch (error) {
        console.log(error);
    }
}
showBooks();