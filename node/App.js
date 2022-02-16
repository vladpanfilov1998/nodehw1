// Всі дії виконувати з допомогою модулів (вручну нічого не створюємо)
// Створити основну папку (main), в яку покласти дві інші папки:
// перша - online, друга - inPerson

const fs = require('fs');
const path = require("path");

fs.mkdir(path.join(__dirname, 'main'), (err) => {
    if(err){
        console.log(err)
    }
})
fs.mkdir(path.join(__dirname, 'main', 'online'), {recursive: true}, (err) => {
    if(err){
        console.log(err);

    }
})
fs.mkdir(path.join(__dirname, 'main', 'inPerson'), {recursive: true}, (err) => {
    if(err){
        console.log(err);

    }
})

// Потім створити в вашому головному файлі (для прикладу app.js)
// два масиви з обєктами user ({. name: "Andrii", age: 22, city: "Lviv" }),
// відповідно перший - onlineUsers, другий - inPersonUsers;
// і створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів,
// але щоб ваш файл виглядав як NAME: ім'я з обєкту і т.д і всі пункти з нового рядка.

onlineUsers = [
    {name: "Andriy11", age: 11, city: "Lviv"},
    {name: "Andriy12", age: 22, city: "Kiev"},
    {name: "Andriy13", age: 33, city: "Odessa"},
    {name: "Andriy14", age: 44, city: "Zashkiv"},

];
inPersonUsers = [
    {name: "Oleg11", age: 33, city: "Kiev"},
    {name: "Oleg22", age: 44, city: "Lviv"},
    {name: "Oleg33", age: 55, city: "Zashkiv"},
    {name: "Oleg44", age: 66, city: "Odessa"},

]
onlineUsers.map((user) => {
        fs.appendFile(path.join(__dirname, 'main', 'online', 'online.txt'), `\n Name:${user.name} Age:${user.age} City: ${user.city}`, (err => {
            if (err) {
                console.log(err)
                throw err;
            }

        }));

    }
);
inPersonUsers.map((user) => {
        fs.appendFile(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), `\n Name:${user.name} Age:${user.age}`, (err => {
            if (err) {
                console.log(err)
                throw err;
            }

        }));

    }
);

// Коли ви це виконаєте напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу.
// (ті, що були в папці inPerson будуть в папці online)

fs.rename(path.join(__dirname, 'main', 'inPerson', 'inPerson.txt'), path.join(__dirname, 'main', 'online', 'inPerson.txt'), (err => {
    if (err) {
        console.log(err)
        throw err;
    }

}));
fs.rename(path.join(__dirname, 'main', 'online', 'online.txt'), path.join(__dirname, 'main', 'inPerson', 'online.txt'), (err => {
    if (err) {
        console.log(err)
        throw err;
    }

}));
