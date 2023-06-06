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
    const itinId = itinArr[2];
    console.log(itinId);
}
commentBtn.addEventListener('click', addComment);