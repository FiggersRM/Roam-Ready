commentDiv = document.getElementById('commentDiv');
commentBtn = document.getElementById('commentBtn');
const textareaDiv = document.createElement('div');
textareaDiv.setAttribute('class', 'column is-full has-text-centered');

const textArea = document.createElement('textarea');
textArea.rows = 4;
textArea.cols = 100;
const submitBtn = document.createElement('input');
submitBtn.type = 'submit';
submitBtn.value = 'Submit Comment';
submitBtn.setAttribute('class', 'button is-info is-light');

const addComment = async (event) => {
    event.preventDefault();
    commentBtn.remove();
    textareaDiv.appendChild(textArea);
    commentDiv.appendChild(textareaDiv);
    commentDiv.appendChild(submitBtn);
    submitBtn.addEventListener('click', postComment)
}

const postComment = async (event) => {
    const itinurl = window.location.pathname
    const itinArr = itinurl.split('/');
    const itinerary_id = itinArr[2];
    console.log(itinerary_id);
    const description = textArea.value;
    console.log(description);
    if (description && itinerary_id) {
        const response = await fetch('/api/comments', {
            method: "POST",
            body: JSON.stringify({ description, itinerary_id }),
            headers: { 'Content-Type': 'application/json' }
        });

        if(response.ok) {
            document.location.replace('/itinerary/' + itinerary_id);
        } else {
            alert("Failed to add comment");
        }
    }
}
commentBtn.addEventListener('click', addComment);