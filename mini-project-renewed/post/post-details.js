const url = new URLSearchParams(window.location.search);
const postId = url.get('postId');

const container = document.getElementById('comments');


fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then(response => response.json())
    .then(comments => {
        comments.forEach(comment => {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('card', 'm-2', 'flex-grow-1', 'comment-card');
            displayCommentDetails(comment, commentDiv);
            container.appendChild(commentDiv);
        });
    });

function displayCommentDetails(comment, container) {
    for (const key in comment) {
        if (key === 'id' || key === 'postId') continue; // Пропускаємо ключі 'id' та 'postId'

        const commentDetailsText = document.createElement('div');
        commentDetailsText.classList.add("d-flex", 'card-body');

        const commentDetailsTextKey = document.createElement('p');
        commentDetailsTextKey.classList.add('me-2', 'fst-italic');
        commentDetailsTextKey.innerText = `${key}:  `;

        const commentDetailsTextValue = document.createElement('p');
        commentDetailsTextValue.classList.add('fw-bold');

        if (comment[key] !== null && typeof comment[key] === "object") {
            displayCommentDetails(comment[key], commentDetailsTextValue);
        } else {
            commentDetailsTextValue.innerText = comment[key];
        }

        commentDetailsText.appendChild(commentDetailsTextKey);
        commentDetailsText.appendChild(commentDetailsTextValue);

        container.appendChild(commentDetailsText);
    }
}
