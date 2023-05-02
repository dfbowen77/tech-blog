const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

const updatePostFormHandler = async (event) => {
    event.preventDefault()
    // gathers information from the update post form 
    const title = document.querySelector('#update-post-title').value.trim()
    const text = document.querySelector('#update-post-text').value.trim()

    if (title && text) {
        const updatePost = await fetch(`/api/posts/${post_id}`, {
            // sends a put request to the api endpoint
            method: "PUT",
            body: JSON.stringify({ title, text}),
            headers: { 'Content-Type': 'application/json'}
        })
        if (updatePost.ok) {
            document.location.replace('/dashboard')
        } else {
            alert("You were unsuccessful in updating your post.")
        }
    }
}

const deletePostFormHandler = async (event) => {
    event.preventDefault()

    const deletePost = await fetch(`/api/posts/${post_id}`, {
        // sends a delete request to the api endpoint
        method: 'DELETE'
    })

    if (deletePost.ok) {
        document.location.replace('/dashboard')
    } else {
        alert("You were unsuccessful in deleting your post.")
    }
}

const updatePostButton = document.querySelector('#update-post')

if (updatePostButton) {
    updatePostButton.addEventListener('click', updatePostFormHandler)
}

const deletePostButton = document.querySelector('#delete-post')

if (deletePostButton) {
    deletePostButton.addEventListener('click', deletePostFormHandler)
}