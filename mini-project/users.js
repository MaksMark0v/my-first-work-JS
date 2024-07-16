// 1. отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {

    //2. Вивести id,name всіх user в index.html. Окремий блок для кожного user.

    const containerUser = document.createElement('div');
    containerUser.classList.add('container', 'mt-4');                
    document.body.appendChild(containerUser);
    console.log(users)
    users.forEach(user => {
        const userBlock = document.createElement('div');
        userBlock.classList.add('card', 'mb-3', 'bg-light', 'border-primary');
        userBlock.innerText = `Name: ${user.name}`;
        containerUser.appendChild(userBlock);

        // 3. Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  
        //на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули

        const userLink = document.createElement('a');

        userLink.href = `user-details.html?id=${user.id}`;
        userLink.innerText = 'Details';
        userLink.classList.add('user-link'); // Додавання класу user-link
        userBlock.appendChild(userLink);
    })
});

