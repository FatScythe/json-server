const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.details');
const deleteBtn = document.querySelector('.del-btn');

fetch(`http://localhost:8000/posts/${id}`)
    .then(res => res.json())
        .then(data => blogDetail(data))
        .catch(err => console.log(err.message));

const blogDetail = (data) => {
    let template = `
        <h1>${data.title}</h1>
        <p>${data.body}</p>
    `
    container.innerHTML = template;
}

deleteBtn.addEventListener('click', async (e) => {
    const res = fetch(`http://localhost:8000/posts/${id}`, {
        method : "DELETE"
    })
    window.location.replace('/index.html');
})

window.addEventListener('DOMContentLoaded', renderDetails());