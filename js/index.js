const container = document.querySelector('.blogs');
const searchForm = document.querySelector('.search');

// const renderPosts = () => {
//     fetch('http://localhost:8000/posts')
//         .then(res => res.json())
//             .then(data => console.log(data));
// }

// ?_sort=likes&_order=desc i.e sort the likes & make it from the highest to the lowest
// &q=${searchTerm} i.e return blog array containig the search term

const renderPosts = async (searchTerm) => {
    let url = 'http://localhost:8000/posts?_sort=likes&_order=desc';

    if(searchTerm) {
        url += `&q=${searchTerm}`
    }

    const res = await fetch(url);
    const posts = await res.json();

    let template = '';

    posts.forEach(post => {
        template += `
        <div class= "post" key = ${post.id}>
            <h2>${post.title}</h2>
            <p><small>${post.likes} likes</small></p>
            <p>${post.body.slice(0, 200)}</p>
            <a href="/details.html?id=${post.id}">read more...</a>
        </div>
        `   
    });

    container.innerHTML = template;
}

searchForm.addEventListener('keyup', (e) => {
    e.preventDefault();
    const searchTerm = searchForm.term.value.trim();
    renderPosts(searchTerm);
});

window.addEventListener('DOMContentLoaded', () => renderPosts());
