const arrind = [
    "Зберігати дані",
    "Гуртувати дані",
    "Сортувати дані",
    "Швидко додавати або видаляти данні",
    "Пошук елементів с заданими значеннями",
    "Сумування елементів масиву",
    "Структуроване зберігання даних"
];
console.log(arrind);

const book1 = {
    title: "Da Vinci Code",
    pageCount: "519",
    genre: "detective novel"
};
console.log(book1);

// book1.authors = "Dan Brown";

book1.authors = [
    {
        name: "Dan Brown",
        age: "59"
    }
];
console.log(book1.authors);



// Створюємо масив з 10 користувачів
const users = [];

for(let i = 1; i <= 10; i++) {
    const user = {
        name: `Ім'я ${i}`,
        username: `Користувач ${i}`,
        password: `Пароль ${i}`
    };
    users.push(user);
}

// Виводимо в консоль пароль кожного користувача
users.forEach(user => {
    console.log(`Пароль користувача ${user.username}: ${user.password}`);
});
