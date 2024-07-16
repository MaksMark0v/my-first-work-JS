// Отримання ID користувача з параметрів URL
const url = new URLSearchParams(window.location.search); //Це об’єкт класу URLSearchParams, 
// який дозволяє отримувати доступ до параметрів URL.
// Він створюється за допомогою конструктора new URLSearchParams() 
const userId = url.get('id');
// https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
// https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams

// Отримання даних про користувача з сервера
fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        // Вставка даних про користувача в блок

        const userDetails = document.getElementById('user-details');
        userDetails.innerHTML = `
             <h2>${user.name}</h2>
             <p>Username: ${user.username}</p>
             <p>Email: ${user.email}</p>
             <p>Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
             <p>Phone: ${user.phone}</p>
             <p>Website: ${user.website}</p>
             `;
        // Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
        //    (для отримання постів використовуй эндпоінт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
        //    Кожному посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, 
        // яка має детальну інфу про поточний пост.

        const userButton = document.createElement('button');
        userButton.innerText = 'Posts of current user';
        userButton.classList.add('btn', 'btn-primary', 'my-3');
        userButton.addEventListener('click', () => {
            getPostsForUser(userId);
        });
        userDetails.appendChild(userButton);
    });
function getPostsForUser(userId) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => response.json())
        .then(posts => {
            const postContainer = document.getElementById('post-container');
            posts.forEach(post => {
                const postDiv = document.createElement('div');
                postDiv.classList.add('border-bottom', 'p-3', 'mb-3');
                postDiv.innerHTML = `
                <h3>Title: ${post.title}</h3>
                <button class='butPost btn btn-info' data-post-id='${post.id}'>Details</button>`;
                postContainer.appendChild(postDiv);
            });

            // Після додавання всіх постів до контейнера, додаємо обробник події для кнопок "Details"
            const buttons = document.querySelectorAll('.butPost');
            buttons.forEach(button => {
                button.addEventListener('click', () => {
                    const postId = button.getAttribute('data-post-id');
                    window.location.href = `post-details.html?postId=${postId}`;
                });
            });
        });
}
