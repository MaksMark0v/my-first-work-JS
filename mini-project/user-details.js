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
            <div class="card bg-light border-primary mb-3">
                <div class="card-header text-white bg-primary">User Details</div>
                <div class="card-body">
                    <h2 class="card-title text-primary">${user.name}</h2>
                    <p class="card-text">Username: ${user.username}</p>
                    <p class="card-text">Email: ${user.email}</p>
                    <p class="card-text">Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
                    <p class="card-text">Phone: ${user.phone}</p>
                    <p class="card-text">Website: ${user.website}</p>
                    <button id="user-posts-btn" class="btn btn-primary my-3">Posts of current user</button>
                </div>
            </div>
        `;

        const userButton = document.getElementById('user-posts-btn');
        userButton.addEventListener('click', () => {
            getPostsForUser(userId);
        });
    });

function getPostsForUser(userId) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => response.json())
        .then(posts => {
            const postContainer = document.getElementById('post-container');
            postContainer.innerHTML = ''; // Очищуємо контейнер перед додаванням нових постів
            posts.forEach(post => {
                const postDiv = document.createElement('div');
                postDiv.classList.add('card', 'mb-3', 'bg-light', 'border-info');
                postDiv.innerHTML = `
                    <div class="card-body">
                        <h3 class="card-title text-info">Title: ${post.title}</h3>
                        <button class='butPost btn btn-info' data-post-id='${post.id}'>Details</button>
                    </div>
                `;
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
