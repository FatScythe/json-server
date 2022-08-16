const form = document.querySelector('form');

const createPost = async (e) => {
    e.preventDefault();

    const blogPost = {
        title: form.title.value,
        body: form.body.value,
        likes: 0
    }

    await fetch('http://localhost:8000/posts', {
        method: "POST",
        body: JSON.stringify(blogPost),
        headers : { "Content-Type": "application/json" }
    });

    window.location.replace('/');
}
// Because i want to to take in the event parameter in the createPost function , we don't call it like this createPost()


form.addEventListener('submit', createPost)