//console.log("2. GÖREV");
//console.log("1. GÖREV");
//console.log("3. GÖREV");

/*const func1 = () =>{
    console.log("Func 1 Tamamlandı")
};

const func2 = () =>{
    console.log("Func 2 Tamamlandı")
};

func2();
func1();*/

/*const func1 = () =>{
    console.log("Func 1 Tamamlandı")
    func2();
};

const func2 = () =>{
    console.log("Func 2 Tamamlandı")
    func3();
};

const func3 = () =>{
    console.log("Func 3 Tamamlandı")
};

func1();*/

/*const func1 = () =>{
    console.log("Func 1 Tamamlandı")
    func3();
};

const func2 = () =>{
    console.log("Func 2 Tamamlandı")
};

const func3 = () =>{
    console.log("Func 3 Tamamlandı")
    func2();
};

func1();*/


// Single Thread --- JS Senkron çalışır.

/*
let x = 5;
console.log(`1. veri: ${x}`);

setTimeout(() => {
    x+= 5;
    console.log(`2. veri: ${x}`); // Callback Fonksiyon
}, 5000);

x += 5;
console.log(`3. veri: ${x}`);*/

// Gerçek Hayat Senaryosu

/*
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

const addBook = (newBook, callback) =>{
    books.push(newBook);
    callback();
}

//listBooks();

addBook({name: 'Book 4', author: 'Author 4'}, listBooks);
*/
