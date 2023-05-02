// This function creates a new blog post. 
const newFormHandler = async (event) => {
  event.preventDefault();
    // Collect values from the blog post form
  const title = document.querySelector('#post-title').value.trim();
  const text = document.querySelector('#post-text').value.trim();

  if (title) {
    const response = await fetch(`/api/posts`, {
      // Sends a POST request to blog post API endpoint
      method: 'POST',
      body: JSON.stringify({ title, text }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post');
    }
  }
};

// this function deletes a post and returns the user to the dashboard page. 
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      // Sends a Delete request to blog post API endpoint
      method: 'DELETE',
    });

    if (response.ok) {
      // If the delete request is successful, then the user is returned to the dashboard page. 
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete post');
    }
  }
};

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.post-list')
  .addEventListener('click', delButtonHandler);
