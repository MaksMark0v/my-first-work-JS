 const url = new URLSearchParams(window.location.search);
        const postId = url.get('postId');

        const container = document.getElementById('comments');

        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(response => response.json())
            .then(comments => {
                comments.forEach(comment => {
                    const commentDiv = document.createElement('div');
                    commentDiv.innerHTML = `
                <h4>Name: ${comment.name}</h4>
                <p>Email: ${comment.email}</p>
                <p>${comment.body}</p>
            `;
                    container.appendChild(commentDiv);
                })
            })
