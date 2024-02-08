window.addEventListener('DOMContentLoaded', () => {
  const elPostContent = document.querySelector('.posts')
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
  }).then(response => {
    return response.json()
  }).then(data => {
    data.forEach((element, index) => {
      const div = document.createElement('div')
      div.innerHTML = `
        <div class="post">
          <h4> <b>#${index + 1}.</b> ${element.title}</h4>
          <p>${element.body}</p>
        </div>
      `
      elPostContent.append(div)
    });
  })
})