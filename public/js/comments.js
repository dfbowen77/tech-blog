const commentFormHandler = async (event) => {
    event.preventDefault()

    const text = document.querySelector('#add-comment').value.trim()

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

    if (text) {
        const postComment = await fetch('api/comments', {
            method: 'POST',
            body: JSON.stringify({ text, post_id }),
            headers: { 'Content_Type': 'application/json' }
        })

        if (postComment.ok) {
            document.location.reload()
        } else {
            alert ('Comment not created')
        }
    }
}

const addCommentForm = document.querySelector('.add-comment-form')
if (addCommentForm) {
    addCommentForm.addEventListener('submit', commentFormHandler)
}