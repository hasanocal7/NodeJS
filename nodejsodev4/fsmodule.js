const fs = require('fs');

/*

1

fs.writeFile('employee.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err) => {
    if (err) console.log(err);
});

2

fs.readFile('employee.json', 'utf8', (err, data) => { // callback fonksiyonu ile birlikte çalıştırıyoruz.
    if (err) console.log(err);                         // hata kontrolü
    console.log(data);                                 // okunan verinin çıktısının alınması
})

3

fs.writeFile('employee.json', '{"name": "Employee 2 Name", "salary": 3000}', function (err) {
    if (err) throw err;
    console.log('Replaced!');
});

4

fs.unlink('employee.json', (err) => {
    if (err) console.log(err);
});

*/


