document.addEventListener('DOMContentLoaded', () => {
    const posts = document.querySelectorAll('.post');
    const filterContainer = document.querySelector('.filter-container');

    // Lista tagów do filtrowania
    const tags = ['#poland', '#germany', '#france', '#italy', '#adventure', '#cuisine', '#culture', '#nature'];

    // Usunięcie istniejących przycisków (jeśli są)
    filterContainer.innerHTML = '';

    // Tworzenie przycisków dynamicznie
    tags.forEach(tag => {
        const button = document.createElement('button');
        button.textContent = tag;
        button.classList.add('filter-button');
        button.addEventListener('click', () => filterPosts(tag));
        filterContainer.appendChild(button);
    });

    function filterPosts(tag) {
        posts.forEach(post => {
            const postContent = post.querySelector('.post-content').textContent;
            if (postContent.includes(tag)) {
                post.style.display = 'flex';
            } else {
                post.style.display = 'none';
            }
        });
    }
});

