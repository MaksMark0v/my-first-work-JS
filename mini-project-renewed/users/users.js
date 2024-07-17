fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users => {
    const containerUser = document.createElement('div');
    containerUser.classList.add('container', 'mt-4');
    document.body.appendChild(containerUser);

    const row = document.createElement('div');
    row.classList.add('row');
    containerUser.appendChild(row);

    users.forEach(user => {
        const col = document.createElement('div');
        col.classList.add('col-12', 'col-md-6', 'col-lg-4', 'mb-3'); // Адаптивні колонки

        const userBlock = document.createElement('div');
        userBlock.classList.add('card', 'bg-light', 'border-primary', 'h-100'); // Висота 100% для рівномірного відображення

        const userBlockBody = document.createElement('div');
        userBlockBody.classList.add('card-body','comment-card');

        const userLink = document.createElement('a');
        userLink.href = `../user/user-details.html?id=${user.id}`;
        userLink.innerText = user.name;
        userLink.classList.add('card-title', 'text-decoration-none'); // Додаємо клас для стилізації

        userBlockBody.appendChild(userLink);
        userBlock.appendChild(userBlockBody);
        col.appendChild(userBlock);
        row.appendChild(col);
    });
});
